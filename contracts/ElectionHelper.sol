pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
import "./Election.sol";

contract ElectionHelper is Election {

    function getConstituencies(uint256 _adminId) external onlyAdmin(_adminId) returns(Constituency[] memory) {
        Constituency[] memory _constituencies = new Constituency[](constituencies.length);
        uint counter = 0;
        for(uint i = 0; i < constituencies.length; i++) {
            _constituencies[counter] = constituencies[i];
            counter++;
        }
        return _constituencies;
    }

    function generateElectionforConstituency(uint256 _id, uint256 _duration, uint256 _adminId) external onlyAdmin(_adminId) {
        Constituency storage _constituency = idToConstituency[_id];
        _constituency._startTime = block.timestamp;
        _constituency._duration = _duration;
    }

    function getConstituencyDetails(uint256 _id, uint256 _userId) external onlyUser(_userId) returns(Constituency memory) {
        Constituency memory _constituency = idToConstituency[_id];
        return _constituency;
    }

    function getCandidatesByConstituency(uint256 _constituencyId, uint256 _userId) public view onlyUser(_userId) returns(Candidate[] memory) {
        Candidate[] memory _candidates = new Candidate[](constituencyCandidateCount[_constituencyId]);
        uint counter = 0;
        for(uint i = 0; i < candidates.length; i++) {
            if(candidateToConstituency[candidates[i]._id] == _constituencyId) {
            _candidates[counter] = candidates[i];
            counter++;
        }
    }
        return _candidates;
    }
}