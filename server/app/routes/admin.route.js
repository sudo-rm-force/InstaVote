const adminService = require('../services/admin.service');

var adminRoute = {
  addAdmin: addAdmin,
  loginAdmin: loginAdmin
}

function addAdmin(req,res) {
  var adminData=req.body;
  adminService.addAdmin(adminData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });

}

function loginAdmin(req,res) {
  var adminData=req.body;
  adminService.loginAdmin(adminData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });

}

module.exports.adminRoute = adminRoute;
