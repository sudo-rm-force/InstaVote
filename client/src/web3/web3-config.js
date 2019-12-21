const Web3 = require('web3');
const rpcURL = "https://mainnet.infura.io/f67e7be592a4468084b16437579bf12f";
const Election = require('../contracts/Authorizer.json');

const loadWeb3 = async () => {
    if(window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable()
    }
    else if(window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
        window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
}

const loadBlockChain = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts()
    const networkId = await web3.eth.net.getId()
    const networkData = Election.networks[networkId];
    if(networkData) {
        const socialNetwork = new web3.eth.Contract(Election.abi, networkData.address);
        return({ 'accounts':accounts, 'socialNetwork':socialNetwork })
    }
}

module.exports = {
    loadWeb3,
    loadBlockChain
}