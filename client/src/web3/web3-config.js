const Web3 = require('web3')
const rpcURL = "https://mainnet.infura.io/f67e7be592a4468084b16437579bf12f"
const web3 = new Web3(rpcURL)
const contract = require('truffle-contract')
const election_artifact = require('../contracts/Authorizer.json')
const Election = contract(election_artifact)
const election = new web3.eth.Contract(Election.abi, "0xbaaD041D4b712CFacB5A9a03E231394285133461")

export default election