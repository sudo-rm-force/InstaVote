// import web3 from './web3'

// const address = '0xbaaD041D4b712CFacB5A9a03E231394285133461';

// const abi= [
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "candidates",
//     "outputs": [
//       {
//         "name": "_id",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "constituencies",
//     "outputs": [
//       {
//         "name": "_id",
//         "type": "uint256"
//       },
//       {
//         "name": "_startTime",
//         "type": "uint256"
//       },
//       {
//         "name": "_duration",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "voters",
//     "outputs": [
//       {
//         "name": "_id",
//         "type": "uint256"
//       },
//       {
//         "name": "_constituencyId",
//         "type": "uint256"
//       },
//       {
//         "name": "_hasVoted",
//         "type": "bool"
//       },
//       {
//         "components": [
//           {
//             "name": "_voteId",
//             "type": "bytes32"
//           },
//           {
//             "name": "_votedId",
//             "type": "uint256"
//           },
//           {
//             "name": "_voteTime",
//             "type": "uint64"
//           }
//         ],
//         "name": "_vote",
//         "type": "tuple"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "name": "_id",
//         "type": "uint256"
//       },
//       {
//         "indexed": false,
//         "name": "_voterId",
//         "type": "uint256"
//       }
//     ],
//     "name": "VoterCreated",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "name": "_id",
//         "type": "uint256"
//       }
//     ],
//     "name": "CandidateRegistered",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "name": "_id",
//         "type": "uint256"
//       }
//     ],
//     "name": "ConstituencyRegistered",
//     "type": "event"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "_id",
//         "type": "uint256"
//       }
//     ],
//     "name": "registerCandidate",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "_id",
//         "type": "uint256"
//       }
//     ],
//     "name": "registerConstituency",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   }
// ];

// export default new web3.eth.Contract(abi, address)
