const candidateService = require('../services/candidate.service');
// var schema = require('../schema/userValidationSchema.json')

function addCandidate(req,res) {
  var candidateData=req.body;
  // console.log(userData);
  
  // //Validating the input entity
  //  var json_format = iValidator.json_schema(schema.postSchema, userData, "voters");
  //  if (json_format.valid == false) {
  //    return res.status(422).send(json_format.errorMessage);
  //  }

  candidateService.addCandidate(candidateData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });

}

module.exports.addCandidate = addCandidate;
