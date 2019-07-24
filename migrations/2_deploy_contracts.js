var Election = artifacts.require("./Election.sol");

module.exports = function(deployer) {
  deployer.deploy(Election);
};

// module.exports = (deployer, network, accounts) => {
//   const userAddress = accounts[3];
//   deployer.deploy(Election, [bytes32("subh"), bytes32("ammm")], [bytes32("amithi"), bytes32("raibareli")], uint(1))
// }