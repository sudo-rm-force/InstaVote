var conn = require('../../config/database');

var candidateModel = {
   addCandidate:addCandidate,
   getCandidateById:getCandidateById,
   getCandidateByConstituencyId:getCandidateByConstituencyId
}

function addCandidate(candidate) {
    return new Promise((resolve,reject) => {
        const params = [candidate.name, candidate.candidate_id, candidate.party, candidate.constituency_id];
         conn.query("INSERT INTO candidates (name,candidate_id,party,constituency_id) VALUES (?,?,?,?);", params, (error,rows,fields)=>{
            if(error) {
                console.log(error);
                reject({success:false,error});
            } else {
                resolve({success:true,rows});
            }
          });
        });
}

function getCandidateById(candidate) {
    return new Promise((resolve,reject) => {
         conn.query("SELECT * FROM candidates WHERE candidate_id='"+candidate.candidate_id+"';", (error,rows,fields)=>{
            if(error) {
                console.log(error);
                reject({success:false,error});
            } else {
                resolve({success:true,rows});
            }
          });
        });
}


function getCandidateByConstituencyId(candidate) {
    return new Promise((resolve,reject) => {
         conn.query("SELECT * FROM candidates WHERE constituency_id='"+candidate.constituency_id+"';", (error,rows,fields)=>{
            if(error) {
                console.log(error);
                reject({success:false,error});
            } else {
                resolve({success:true,rows});
            }
          });
        });
}

module.exports = candidateModel;