pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
import './Ownable.sol';

contract Election is Ownable{
  bool public ResultsDeclared = false;

  event VoterCreated(uint256 _id, uint256 _constituencyId);
  event CandidateRegistered(uint256 _id);
  event ConstituencyRegistered(uint256 _id);

  struct Vote {
    uint256 _voteId;
  }

  struct Voter {
    uint256 _id;
    uint256 _constituencyId;
    bool _hasVoted;
    uint256 _voteTime;
    Vote _vote;
  }

  struct Candidate {
    uint256 _id;
  }

  struct Constituency {
    uint256 _id;
    uint256 _startTime;
    uint256 _duration;
  }

  mapping(uint256 => Voter) public idToVoter;
  mapping(uint256 => Candidate) public idToCandidate;
  mapping(uint256 => Constituency) public idToConstituency;
  mapping(uint256 => uint256) public voteToCandidate;
  mapping(uint256 => uint256) public candidateToConstituency;
  mapping(uint256 => uint256) public constituencyCandidateCount;
  mapping(uint256 => uint256) public candidateVoteCount;

  Voter[] public voters;
  Candidate[] public candidates;
  Constituency[] public constituencies;
  uint256[] public admins;

  modifier onlyUser(uint256 _id) {
    require(idToVoter[_id]._id != 0);
    _;
  }

  modifier onlyAdmin(uint256 _id) {
    for(uint i = 0; i < admins.length; i++) {
      if(admins[i] == _id) {
        _;
        }
      else {
        continue;
      }
    }
  }

  modifier declaredResults() {
    require(ResultsDeclared == true);
    _;
  }

  constructor() public {
    ResultsDeclared = false;
  }

  function initializeVote(uint256 _id) internal returns(Vote memory) {
    Vote memory vote = Vote(_id);
    return vote;
  }

  function createVoter(uint256 _id, uint256 _constituencyId) internal {
    Vote memory vote = initializeVote(_id);
    uint id = voters.push(Voter(_id, _constituencyId, false, 0, vote)) - 1;
    idToVoter[_id] = voters[id];
    emit VoterCreated(_id, _constituencyId);
  }

  function registerCandidate(uint256 _id, uint256 _adminId) external onlyAdmin(_adminId) {
    uint id = candidates.push(Candidate(_id)) - 1;
    idToCandidate[_id] = candidates[id];
    emit CandidateRegistered(_id);
  }

  function registerConstituency(uint256 _id, uint256 _adminId) public onlyAdmin(_adminId) {
    uint id = constituencies.push(Constituency(_id, 0, 0)) - 1;
    idToConstituency[_id] = constituencies[id];
    emit ConstituencyRegistered(_id);
  }

  function registerConstituencies(uint256[] calldata _constituencies, uint256 _adminId) external onlyAdmin(_adminId) {
    for(uint i = 0; i < _constituencies.length; i++) {
            registerConstituency(_constituencies[i], _adminId);
        }
  }

  function registerAdmin(uint256 _id) external onlyOwner {
    admins.push(_id);
  }

}