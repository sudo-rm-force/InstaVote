const candidateService = require('../services/candidate.service');
// var schema = require('../schema/userValidationSchema.json')

function addCandidate(req,res) {
  var candidateData=req.body;
  candidateService.addCandidate(candidateData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function getCandidateById(req,res) {
  var candidateData=req.body;
  candidateService.getCandidateById(candidateData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

function getCandidateByConstituencyId(req,res) {
  var candidateData=req.body;
  candidateService.getCandidateByConstituencyId(candidateData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
}

module.exports.addCandidate = addCandidate;
module.exports.getCandidateById = getCandidateById;
module.exports.getCandidateByConstituencyId = getCandidateByConstituencyId;
