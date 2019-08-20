// 'use strict';

const request = require('request');
const fs = require('fs');

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = 'b5c5cfb44a1c49a3b519d59843c01c21';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';

// const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg';
fs.readFile('1566313638594.9FJTQ.jpeg', function (err, data) {

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

request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  const jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse,'fghj');
  return jsonResponse
});
});