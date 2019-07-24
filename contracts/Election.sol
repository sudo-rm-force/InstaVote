pragma solidity ^0.5.0;
import "./Ownable.sol";

contract Election is Ownable{

  address[] public deployedBallots;
  // constructor (bytes32[] memory candidates, bytes32[] memory district, uint hour) public {
  constructor () public {
    bytes32[2] memory candidates = [bytes32("subh"), bytes32("ammm")];
    bytes32[2] memory district = [bytes32("amithi"), bytes32("raibareli")];
    uint hour = uint(1);
    for(uint i = 0; i < district.length; i++){
      address ballot = address(new Ballot(candidates,district[i], msg.sender, hour));
      deployedBallots.push(ballot);
    }
  }
  function getDeployedBallots() public view returns(address[] memory) {
    return deployedBallots;
  }
}

contract Ballot {
  struct Candidates {
    bytes32 name;
    uint voteCount;
    uint creationDate;
    uint expirationDate;
  }
  Candidates[] public candidates;
  address public manager;
  bytes32 public votingDistrict;
  mapping(address => bool) public voters;
  modifier restricted() {
    require(msg.sender == manager);
    _;
  }
  constructor (bytes32[2] memory candidateNames, bytes32 district, address creator, uint amountOfHours) public {
    manager = creator;
    votingDistrict = district;
    for (uint i = 0; i < candidateNames.length; i++) {
      candidates.push(Candidates({ name: candidateNames[i],
                                   voteCount: 0,
                                   creationDate: now,
                                   expirationDate: now + amountOfHours
      }));
    }
  }

  function vote(uint candidate) public{
    require(!voters[msg.sender]);
    if(now > candidates[candidate].expirationDate){
      revert();
    }
    candidates[candidate].voteCount += 1;
    voters[msg.sender] = true;
  }

  function getCandidateName(uint index) public restricted view returns (bytes32) {
    // require(now > candidates[candidate].expirationDate);
    return candidates[index].name;
  }
  function getVoteCount(uint index) public restricted view returns (uint) {
    // require(now > candidates[candidate].expirationDate);
    return candidates[index].voteCount;
  }
}