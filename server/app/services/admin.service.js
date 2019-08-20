var adminModel = require("../models/admin-model.js");


var adminService = {
    loginAdmin: loginAdmin
}

function loginAdmin(adminData) {
    return new Promise((resolve,reject) => {
        adminModel.loginAdmin(adminData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports = adminService;