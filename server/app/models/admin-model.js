var conn = require('../../config/database');

var adminModel = {
    addAdmin:addAdmin,
    loginAdmin:loginAdmin
}

function addAdmin(admin) {
    return new Promise((resolve,reject) => {
        const params = [admin.admin_id, admin.password];
         conn.query("INSERT INTO admin (admin_id,password) VALUES (?,?);", params, (error,rows,fields)=>{
            if(error) {
                console.log(error);
                reject(error);
            } else {
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