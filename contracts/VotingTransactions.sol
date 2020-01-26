pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
import "./ElectionHelper.sol";

contract VotingTransactions is ElectionHelper {
    event Transfer(uint256 indexed _from, uint256 indexed _to, uint256 indexed _tokenId);

    function transferFrom(uint256 from, uint256 to, uint256 tokenId) public onlyUser(from) {
        require(idToVoter[from]._constituencyId == candidateToConstituency[to]);
        Voter storage voter = idToVoter[from];
        voter._hasVoted = true;
        voter._voteTime = block.timestamp;
        voteToCandidate[from] = to;
        candidateVoteCount[to]++;
        emit Transfer(from, to, tokenId);
    }

    function _transferredTo(uint256 _id, uint256 _userId) private view onlyUser(_userId) returns(Candidate memory) {
        uint256 candidateId = voteToCandidate[_id];
        Candidate memory candidate = idToCandidate[candidateId];
        return candidate;
    }
}