const userService = require('../services/user.service');
var schema = require('../schema/userValidationSchema.json')
var iValidator = require('../../common/iValidator');

// function init(router) {
//   router.route('/user')
//       .post(addUser);
//   router.route('/user/:id')
//       .get(getUserById)
// }

function getUserById(req,res) {

  let userId = req.params;

  // var json_format = iValidator.json_schema(schema.getSchema,userId,"voters");
  // if (json_format.valid == false) {
  //   return res.status(422).send(json_format.errorMessage);
  // }

  userService.getUserById(userId).then((data) => {
      res.send(data);
    }).catch((err) => {
      // mail.mail(err);
      res.send(err);
    });
}

function addUser(req,res) {
  var userData=req.body;
  // console.log(userData);
  
  // //Validating the input entity
  //  var json_format = iValidator.json_schema(schema.postSchema, userData, "voters");
  //  if (json_format.valid == false) {
  //    return res.status(422).send(json_format.errorMessage);
  //  }

  userService.addUser(userData).then((data) => {
    res.json(data);
  }).catch((err) => {
    // mail.mail(err);
    res.json(err);
  });

  userService.updateUserById(userData).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });

}

module.exports.addUser = addUser;
module.exports.getUserById = getUserById;
module.exports.updateUserById = updateUserById;



