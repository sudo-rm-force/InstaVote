var conn = require('../../config/database');

var adminModel = {
   loginAdmin:loginAdmin
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