var conn = require('../../config/database');
// const faceDetecion = require('../faceRec/facedetection');
const fs = require('fs')
const request = require('request');
const appDir = process.env.PWD;

var userModel = {
   addUser:addUser,
   getUserById:getUserById,
   updateUserById:updateUserById
}

function getUserById(voter_id) {
    return new Promise((resolve,reject) => {
        conn.query("SELECT * FROM voters WHERE voter_id ='"+voter_id+"';",(error,rows,fields)=>{
            if(error) {
                reject({success:false,error});
            } else {
                resolve({success:true,rows});
            }
       });
    });  
}

function addUser(user) {
    return new Promise((resolve,reject) => {
        const params = [user.voter_id, user.name, user.age, user.constituency_id];
        conn.query("INSERT INTO voters (voter_id,name,age,constituency_id) VALUES (?,?,?,?);", params, (error,rows,fields)=>{
            if(error) {
                console.log(error);
                reject({success:false,error});
            } else {
                resolve({success:true,rows});
            }
        });
    });
}

async function updateUserById(user) {
    console.log(appDir)
    fs.writeFile(`${appDir}/images/${user.faceName}`, user.face_id, 'base64', async function(err) {
		if(err){
            console.log(err);
            reject({success:false,err})
        } else {
            const subscriptionKey = process.env.SUBSCRIPTION_KEY;
            const uriBase = 'https://instavote.cognitiveservices.azure.com/face/v1.0/detect';
            fs.readFile(`${appDir}/images/${user.faceName}`, async function (err, data) {
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
                try {
                response = await request.post(options, async (error, response, body) => {
                    if (error) {
                        console.log('Error: ', error);
                        reject({success:false});
                    }
                    const jsonResponse = JSON.parse(body);
                    console.log('JSON Response\n');
                    return new Promise((resolve,reject) => {
                        conn.query("UPDATE voters SET name='"+user.name+"',gender='"+user.gender+"',face_id='"+jsonResponse[0].faceId+"',face_name='"+user.faceName+"',mobile_no='"+user.mobile_no+"' WHERE voter_id='"+user.voter_id+"';", (error,rows,fields)=>{
                            if(error) {
                                console.log(error);
                                reject({success:false,error});
                            }
                            else {
                                resolve({success:true,rows});
                            }
                        })
                    })   
                })
                } catch(err) {
                    console.log(err)
                    reject({success:false})
                }
            });
		}
    });
}

module.exports = userModel;
