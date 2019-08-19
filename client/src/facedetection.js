// 'use strict';

const request = require('request');
const atob = require('atob');

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = 'b5c5cfb44a1c49a3b519d59843c01c21';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
var http = require('http')
var fs = require('fs');
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';

// const imageUrl = '';


// void sendImageRequest(imagePath) {
//   try {
//       HttpClient httpClient = new DefaultHttpClient();

//       File file = new File(imagePath);
//       FileInputStream fileInputStreamReader = new FileInputStream(file);
//       byte[] bytes = new byte[(int)file.length()];
//       fileInputStreamReader.read(bytes);            
//       ByteArrayEntity reqEntity = new ByteArrayEntity(bytes, ContentType.APPLICATION_OCTET_STREAM);
//       request.setEntity(reqEntity);

//       HttpResponse response = httpClient.execute(request);
//       HttpEntity entity = response.getEntity();
//       if (entity != null) {
//           this.responseResult = EntityUtils.toString(entity);
//       }
//   } catch(Exception e) {
//       System.out.println(e.getMessage());
//   }   
// }


fs.readFile('./images/Dagestani_man_and_woman.jpg', function(err, data) {
// Request parameters.

// // Encode to base64
// var encodedImage = new Buffer(data, 'binary').toString('base64');
// ByteArrayEntity reqEntity = new ByteArrayEntity(bytes, ContentType.APPLICATION_OCTET_STREAM);
// // Decode from base64
// var decodedImage = new Buffer(encodedImage, 'base64').toString('binary');



var bin = atob(data);



// console.log(data)
const params = {
  returnFaceId: 'true',
  returnFaceLandmarks: 'false',
  returnFaceAttributes: 'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
};

const options = {
  uri: uriBase,
  qs: params,
  body: `${'{"data": "'}${bin}"}`,
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
  console.log(jsonResponse);
});
});