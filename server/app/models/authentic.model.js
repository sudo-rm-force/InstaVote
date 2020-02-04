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
                reject({success:false,error});
            } else {
                if (rows == ''){
                    reject({success:false});
                }
                const log_face_data = authenticData.face_id
                fs.writeFile(`${appDir}/images/${authenticData.face_name}`, log_face_data, 'base64', async function(err) {
                    if(err){
                        console.log(err);
                        reject({success:false})
                    } else {
                        const subscriptionKey = process.env.SUBSCRIPTION_KEY;
                        const uriBase = 'https://instavote.cognitiveservices.azure.com/face/v1.0/detect';
                        const uriBase_verify = 'https://instavote.cognitiveservices.azure.com/face/v1.0/verify';
                        fs.readFile(`${appDir}/images/${authenticData.face_name}`, async function (err, data) {
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
                                    reject({success:false,error});
                                }
                                const jsonResponse = JSON.parse(body);
                                const login_faceData = jsonResponse[0].faceId
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
                                                    reject({success:false,error});
                                                } else {
                                                    resolve({success:true,rows})
                                                }
                                            });
                                        } else {
                                            reject({success:false})
                                        }
                                    }
                                });

                            })
                            } catch(err) {
                                console.log(err)
                                reject({success:false})
                            }
                        });
                    }
                });
            }
        });
    });

}

module.exports = authenticModel;



