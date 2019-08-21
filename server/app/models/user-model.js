var conn = require('../../config/database');
// const faceDetecion = require('../faceRec/facedetection');
const fs = require('fs')
const request = require('request');

var userModel = {
   addUser:addUser,
   getUserById:getUserById,
   updateUserById:updateUserById
}

function getUserById(voter_id) {
    return new Promise((resolve,reject) => {
        conn.query("SELECT * FROM voters WHERE voter_id ='"+voter_id+"';",(error,rows,fields)=>{
            if(error) {
                reject(error);
            } else {
                resolve(rows);
            }
       });
    });  
}

function addUser(user) {
    console.log(user)
    return new Promise((resolve,reject) => {
        const params = [user.voter_id, user.name, user.age, user.constituency_id];
        conn.query("INSERT INTO voters (voter_id,name,age,constituency_id) VALUES (?,?,?,?);", params, (error,rows,fields)=>{
            if(error) {
                console.log(error);
                reject(error);
            } else {
                resolve(rows);
            }
        });
    });
}

async function updateUserById(user) {
    console.log(user.faceName)

    fs.writeFile(user.faceName, user.face_id, 'base64', async function(err) {
		if(err){
			console.log(err);
        } else {
            // Replace <Subscription Key> with your valid subscription key.
            const subscriptionKey = 'b5c5cfb44a1c49a3b519d59843c01c21';

            // You must use the same location in your REST call as you used to get your
            // subscription keys. For example, if you got your subscription keys from
            // westus, replace "westcentralus" in the URL below with "westus".
            const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';

            fs.readFile(user.faceName, async function (err, data) {

                // console.log(data);
                // Request parameters.
                const params = {
                returnFaceId: 'true',
                returnFaceLandmarks: 'false',
                returnFaceAttributes: 'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
                };

                const options = {
                uri: uriBase,
                qs: params,
                body: data,
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Ocp-Apim-Subscription-Key': subscriptionKey
                }
                };

                let response
                try {
                response = await request.post(options, async (error, response, body) => {
                    if (error) {
                        console.log('Error: ', error);
                        return;
                    }
                    const jsonResponse = JSON.parse(body);
                    console.log('JSON Response\n');
                    console.log(jsonResponse[0].faceId,'fghj');

                    return new Promise((resolve,reject) => {
                        conn.query("UPDATE voters SET gender='"+user.gender+"',face_id='"+jsonResponse[0].faceId+"',mobile_no='"+user.mobile_no+"' WHERE voter_id='"+user.voter_id+"';", (error,rows,fields)=>{
                            if(error) {
                                console.log(error);
                                reject(error);
                            }
                            else {
                                console.log(rows, '71,user-model')
                                resolve(rows);
                            }
                        })
                    })
                    
                })
                } catch(err) {
                    console.log(err)
                    return 
                }
            });
		}
    });
}

module.exports = userModel;
