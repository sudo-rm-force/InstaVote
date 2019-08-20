const adminService = require('../services/admin.service');

function loginAdmin(req,res) {
  var adminData=req.body;
  adminService.loginAdmin(adminData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });

}

module.exports.loginAdmin = loginAdmin;
