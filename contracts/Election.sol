pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract Election{

  event VoterCreated(uint256 _id, uint256 _voterId);
  event CandidateRegistered(uint256 _id);

  struct Vote {
    bytes32 _voteId;
    uint256 _votedId;
    uint64 _voteTime;
  }

  struct Voter {
    uint256 _id;
    uint256 _constituencyId;
    bool _hasVoted;
    Vote _vote;
  }

  struct Candidate {
    uint256 _id;
  }

  Vote InitialVoteState = Vote(0, 0, 0);
  uint256 StartTime = 0;
  uint256 ElectionDuration = 0; 

  mapping(uint256 => Voter) internal idToVoter;
  mapping(uint256 => Candidate) internal idToCandidate;
  mapping(bytes32 => uint256) internal voteToCandidate;
  mapping(uint256 => uint256) internal candidateToConstituency;
  mapping(uint256 => uint256) internal constituencyCandidateCount;
  mapping(uint256 => uint256) internal candidateVoteCount;

  Voter[] public voters;
  Candidate[] public candidates;

  function createVoter(uint256 _id, uint256 _voterId) external {
    uint id = voters.push(Voter(_id, _voterId, false, InitialVoteState)) - 1;
    idToVoter[_id] = voters[id];
    emit VoterCreated(_id, _voterId);
  }

  function registerCandidate(uint256 _id) external {
    uint id = candidates.push(Candidate(_id)) - 1;
    idToCandidate[_id] = candidates[id];
    emit CandidateRegistered(_id);
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