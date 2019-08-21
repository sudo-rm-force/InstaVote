var conn = require('../../config/database');

var candidateModel = {
   addCandidate:addCandidate,
   getCandidateByConstituteId:getCandidateByConstituteId
}

function addCandidate(candidate) {
    return new Promise((resolve,reject) => {
        const params = [candidate.name, candidate.candidate_id, candidate.constituency_id];
         conn.query("INSERT INTO candidates (candidate_id,name,constituency_id) VALUES (?,?,?);", params, (error,rows,fields)=>{
            if(error) {
                console.log(error);
                reject(error);
            } else {
                resolve(rows);
            }
          });
        });
}

function getCandidateByConstituteId(constituency_id) {
    return new Promise((resolve,reject) => {
        // const params = [constituency_id];
         conn.query("SELECT * FROM candidates WHERE constituency_id='"+constituency_id+"';", (error,rows,fields)=>{
            if(error) {
                console.log(error);
                reject(error);
            } else {
                resolve(rows);
            }
          });
        });
}

module.exports = candidateModel;