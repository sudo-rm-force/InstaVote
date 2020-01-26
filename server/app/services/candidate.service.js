var candidateModel = require("../models/candidate-model.js");


var candidateService = {
    addCandidate: addCandidate,
    getCandidateById: getCandidateById,
    getCandidateByConstituencyId: getCandidateByConstituencyId
}

function addCandidate(candidateData) {
    return new Promise((resolve,reject) => {
        candidateModel.addCandidate(candidateData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

function getCandidateById(candidateData) {
    return new Promise((resolve,reject) => {
        candidateModel.getCandidateById(candidateData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

function getCandidateByConstituencyId(candidateData) {
    return new Promise((resolve,reject) => {
        candidateModel.getCandidateByConstituencyId(candidateData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports = candidateService;