var candidateModel = require("../models/candidate-model.js");


var candidateService = {
    addCadidate: addCandidate
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

module.exports = candidateService;