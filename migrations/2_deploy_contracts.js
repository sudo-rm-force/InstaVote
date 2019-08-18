var Authorizer = artifacts.require("./Authorizer.sol");

module.exports = function(deployer) {
  deployer.deploy(Authorizer);
};