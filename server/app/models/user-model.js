var conn = require('../../config/database');

var userModel = {
   addUser:addUser,
   getUserById:getUserById
}

function getUserById(id) {
    return new Promise((resolve,reject) => {
        conn.query("SELECT * FROM voters WHERE voter_id ="+id.id,(error,rows,fields)=>{
            if(!!error) {
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
        console.log('hihihih');
        const params = [user.voter_id, user.name, user.gender, user.mobile_no];
         conn.query("INSERT INTO voters (voter_id,name,gender,mobile_no) VALUES (?,?,?,?);", params, (error,rows,fields)=>{
            if(error) {
                console.log(error);
                reject(error);
            } else {
                console.log(rows);
                resolve(rows);
            }
          });
        });
}

module.exports = userModel;
