pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "./VotingTransactions.sol";

contract ResultHelper is VotingTransactions{

    function declareResults(uint256 _adminId) external onlyAdmin(_adminId) {
        ResultsDeclared = true;
    }

    function retreiveConstituencyVoteCount(uint256 _constituencyId) external view declaredResults returns(uint32) {
        Candidate[] memory _candidates = getCandidatesByConstituency(_constituencyId);
        uint32 _votes;
        for (uint i = 0; i < _candidates.length; i++) {
            _votes = _votes + uint32(candidateVoteCount[_candidates[i]._id]);
        }

        return _votes;
    }
}