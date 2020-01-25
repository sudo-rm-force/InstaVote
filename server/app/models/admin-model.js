var conn = require('../../config/database');
var mailer = require('../../common/mailer');
var generator = require('../../common/generatePassword');

var adminModel = {
    addAdmin:addAdmin,
    loginAdmin:loginAdmin
}

function addAdmin(admin) {
    return new Promise((resolve,reject) => {
        const password = generator.generatePassword(32);
        const params = [admin.admin_id, password];
         conn.query("INSERT INTO admin (admin_id,password) VALUES (?,?);", params, (error,rows,fields)=>{
            if(error) {
                console.log(error);
                reject(error);
            } else {
                mailer.mail(password, admin.admin_id, admin.mail)
                resolve(rows);
            }
          });
        });
}

function loginAdmin(admin) {
    return new Promise((resolve,reject) => {
         conn.query("SELECT * FROM admin WHERE admin_id="+admin.admin_id, params, (error,rows,fields)=>{
            if(error) {
                console.log(error);
                reject(error);
            } else {
                resolve(rows);
            }
          });
        });
}

module.exports = adminModel;