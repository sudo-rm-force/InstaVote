var conn = require('../../config/database');
var mailer = require('../../common/mailer');
var generator = require('../../common/generatePassword');
var bcrypt = require('bcryptjs')

var adminModel = {
    addAdmin:addAdmin,
    loginAdmin:loginAdmin
}

async function addAdmin(admin) {
    return new Promise((resolve,reject) => {
        const password = generator.generatePassword(32);
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password,salt);
        const params = [admin.admin_id, hash];
         conn.query("INSERT INTO admin (admin_id,password) VALUES (?,?);", params, (error,rows,fields)=>{
            if(error) {
                console.log(error);
                reject({success:false,error});
            } else {
                mailer.mail(password, admin.admin_id, admin.mail)
                resolve({success:true,rows});
            }
          });
        });
}

function loginAdmin(admin) {
    return new Promise((resolve,reject) => {
         conn.query("SELECT * FROM admin WHERE admin_id ='"+admin.admin_id+"';",async (error,rows,fields)=>{
            const match = await bcrypt.compare(admin.password,rows[0].password)
            if (match) {
                if(error) {
                    console.log(error);
                    reject({success:false,error});
                } else {
                    resolve({success:true,rows});
                }
            }
            else
                resolve({success:false})
          });
        });
}

module.exports = adminModel;