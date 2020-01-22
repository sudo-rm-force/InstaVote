var adminModel = require("../models/admin-model.js");


var adminService = {
    addAdmin: addAdmin,
    loginAdmin: loginAdmin
}

function addAdmin(adminData) {
    return new Promise((resolve,reject) => {
        adminModel.addAdmin(adminData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
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