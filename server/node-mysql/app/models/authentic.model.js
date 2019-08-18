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


// function signup(user) {
//     return new Promise((resolve, reject) => {
//         bcrypt.genSalt(10, function (err, salt) {
//             if (err) {
//                 return next(err);
//             }
//             bcrypt.hash(user.password, salt, function (err, hash) {
//                 if (err) {
//                     return next(err);
//                 }
//                 user.password = hash;
//                 db.query("SELECT * FROM user WHERE username='"+user.username+"'", (error, rows, fields) => {
//                     if (error) {
//                         dbFunc.connectionRelease;
//                         reject(error);
//                     } else if(rows.length>0) {
//                         dbFunc.connectionRelease;
//                         reject({"success":false,"message":"user already exist ! try with different user"});
//                     } else {
//                         db.query("INSERT INTO user(username,password)VALUES('" + user.username + "','" + user.password + "')", (error, rows, fields) => {
//                             if (error) {
//                                 dbFunc.connectionRelease;
//                                 reject(error);
//                             } else {
//                                 dbFunc.connectionRelease;
//                                 resolve(rows);
//                             }
//                         });
//                     }
//                 });
//             })

//         });
//     });
// }

module.exports = authenticModel;



