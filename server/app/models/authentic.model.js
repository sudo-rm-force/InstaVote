var db = require('../../config/database');
// var dbFunc = require('../../config/db-function');
// const bcrypt = require('bcrypt');

var authenticModel = {
    authentic: authentic
}

function authentic(authenticData) {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM voters WHERE voter_id ='${authenticData.voter_id}'`, (error, rows, fields) => {
            if (error) {
                reject(error);
            } else {
                // let date = new Date();
                // let timestamp = date.getTime();
                console.log(rows, 'got voter')
                const params = [authenticData.voter_id]
                db.query('INSERT INTO voter_login (voter_id) VALUES (?);', params, (error, rows, fields) => {
                    if (error) {
                        reject(error);
                    } else {
                        console.log(rows, 'inserted')
                        resolve(rows)
                    }
                });
                // need to be updated****************************
                // bcrypt.compare(authenticData.password, rows[0].password, function (err, isMatch) {
                //     if (err) {
                //         reject(error);
                //     } else if (isMatch) {
                //         resolve(rows);
                //     }
                //     else {
                //         reject({"success":false,"message":"password doesnot match"});
                //     }
                // });

            }
        });
    });

}

module.exports = authenticModel;



