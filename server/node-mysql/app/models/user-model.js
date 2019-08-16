var db = require('../../config/database');
var dbFunc = require('../../config/db-function');

var userModel = {
   addUser:addUser,
   getUserById:getUserById
}

// function getAllUser() {
//     return new Promise((resolve,reject) => {
//         db.query(`CALL get_user()`,(error,rows,fields)=>{
//             if(!!error) {
//                 dbFunc.connectionRelease;
//                 reject(error);
//             } else {
//                 dbFunc.connectionRelease;
//                 resolve(rows[0]);
//             }
//        });
//     });
// }

function getUserById(id) {
    return new Promise((resolve,reject) => {
        db.query("SELECT * FROM voters WHERE voter_id ="+id.id,(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
       });
    });  
}

function addUser(user) {
    return new Promise((resolve,reject) => {
         db.query("INSERT INTO voters(voter_id,name,gender,face_id,mobile_no)VALUES('"+user.voter_id+"','"+user.name+"','"+user.gender+"','"+user.face_id+"','"+user.mobile_no+"')",(error,rows,fields)=>{
            if(error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
          });
        });
}


// function updateUser(id,user) {
//     return new Promise((resolve,reject) => {
//         db.query("UPDATE test set name='"+user.name+"',age='"+user.age+"',state='"+user.state+"',country='"+user.country+"' WHERE id='"+id+"'",(error,rows,fields)=>{
//             if(!!error) {
//                 dbFunc.connectionRelease;
//                 reject(error);
//             } else {
//                 dbFunc.connectionRelease;
//                 resolve(rows);
//             }
//        });    
//     })
// }

// function deleteUser(id) {
//    return new Promise((resolve,reject) => {
//         db.query("DELETE FROM test WHERE id='"+id+"'",(error,rows,fields)=>{
//             if(!!error) {
//                 dbFunc.connectionRelease;
//                 reject(error);
//             } else {
//                 dbFunc.connectionRelease;
//                 resolve(rows);
//             }
//        });    
//     });
// }


module.exports = userModel;

