var conn = require('../../config/database');

var userModel = {
   addUser:addUser,
   getUserById:getUserById,
   updateUserById:updateUserById
}

function getUserById(id) {
    return new Promise((resolve,reject) => {
        conn.query("SELECT * FROM voters WHERE voter_id ="+id.id,(error,rows,fields)=>{
            if(error) {
                reject(error);
            } else {
                resolve(rows);
            }
       });
    });  
}

function addUser(user) {
    console.log(user)
    return new Promise((resolve,reject) => {
        const params = [user.voter_id, user.name, user.gender, user.mobile_no];
         conn.query("INSERT INTO voters (voter_id,name,gender,mobile_no) VALUES (?,?,?,?);", params, (error,rows,fields)=>{
            if(error) {
                console.log(error);
                reject(error);
            } else {
                resolve(rows);
            }
        });
    });
}

function updateUserById(user) {
    return new Promise((resolve,reject) => {
        const params = [user.age, user.constituency_id, user.voter_id];
        conn.query("UPDATE voters SET age=(?),constituency_id=(?) WHERE voter_id=(?);", params, (error,rows,fields)=>{
            if(error) {
                console.log(error);
                reject(error);
            }
            else {
                resolve(rows);
            }
        })
    })
}

module.exports = userModel;
