var conn = require('../../config/database');
const fs = require('fs')

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
        const params = [user.voter_id, user.name, user.age, user.constituency_id];
        conn.query("INSERT INTO voters (voter_id,name,age,constituency_id) VLAUES (?,?,?,?);", params, (error,rows,fields)=>{
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
    // console.log(user)

    fs.writeFile("uploads/out.png", base64Data, 'base64', function(err) {
		if(err){
			console.log(err);
			}else{
			res.send(JSON.stringify({'status': 1, 'msg': 'Image Uploaded'}));
		}
	});




    return new Promise((resolve,reject) => {
        conn.query("UPDATE voters SET gender='"+user.gender+"',mobile_no='"+user.mobile_no+"' WHERE voter_id='"+user.voter_id+"';", (error,rows,fields)=>{
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
