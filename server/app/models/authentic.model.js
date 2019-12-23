var db = require('../../config/database');
const fs = require('fs');
const request = require('request');
const appDir = process.env.PWD;

var authenticModel = {
    authentic: authentic
}

function authentic(authenticData) {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM voters WHERE voter_id ='${authenticData.voter_id}'`, (error, rows, fields) => {
            if (error) {
                reject(error);
            } else {
                if (rows == ''){
                    return false;
                }
                const log_face_data = authenticData.face_id

                // for face_id extraction of login faceData
                fs.writeFile(`${appDir}/images/${authenticData.face_name}`, log_face_data, 'base64', async function(err) {
                    if(err){
                        console.log(err);
                    } else {
                        // Replace <Subscription Key> with your valid subscription key.
                        const subscriptionKey = 'c3f653ea1d8449d5949a7d6465427dba';
            
                        // You must use the same location in your REST call as you used to get your
                        // subscription keys. For example, if you got your subscription keys from
                        // westus, replace "westcentralus" in the URL below with "westus".
                        const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';
                        const uriBase_verify = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/verify';
            
                        fs.readFile(`${appDir}/images/${authenticData.face_name}`, async function (err, data) {
            
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
                                    reject(error);
                                }
                                const jsonResponse = JSON.parse(body);
                                const login_faceData = jsonResponse[0].faceId
                                // console.log('JSON Response\n');
                                // console.log(login_faceData, rows[0].face_id);

                
                                const match_options = {
                                uri: uriBase_verify,
                                body: { "faceId1": login_faceData, "faceId2": rows[0].face_id },
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Ocp-Apim-Subscription-Key': subscriptionKey
                                },
                                json: true
                                };

                                await request.post(match_options, async (error, response, body) => {
                                    if (error) {
                                        console.log('Error: ', error);
                                    } else {
                                        console.log(body.confidence > 0.70, body.confidence)
                                        fs.unlinkSync(`${appDir}/images/${authenticData.face_name}`);
                                        if(body.confidence > 0.70) {
                                            const params = [authenticData.voter_id, login_faceData]
                                            db.query('INSERT INTO voter_login (voter_id, face_id) VALUES (?,?);', params, (error, rows2, fields) => {
                                                if (error) {
                                                    console.log(error);
                                                    reject(error);
                                                } else {
                                                    resolve(rows)
                                                }
                                            });
                                        } else {
                                            return false
                                        }
                                    }
                                });

                            })
                            } catch(err) {
                                console.log(err)
                                return 
                            }
                        });
                    }
                });
            }
        });
    });

}

module.exports = authenticModel;



