var db = require('../../config/database');

var authenticModel = {
    authentic: authentic
}

function authentic(authenticData) {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM voters WHERE voter_id ='${authenticData.voter_id}'`, (error, rows, fields) => {
            if (error) {
                reject(error);
            } else {
                const params = [authenticData.voter_id]
                db.query('INSERT INTO voter_login (voter_id) VALUES (?);', params, (error, rows, fields) => {
                    if (error) {
                        console.log(error);
                        reject(error);
                    } else {
                        resolve(rows)
                    }
                });
                return rows;
            }
        });
    });

}

module.exports = authenticModel;



