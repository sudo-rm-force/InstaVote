pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
import "./ElectionHelper.sol";

contract VotingTransactions is ElectionHelper {
    event Transfer(uint256 indexed _from, uint256 indexed _to, bytes32 indexed _tokenId);

    // function ownerOf(uint256 tokenId) public view returns (address) {
    //     address owner = _tokenOwner[tokenId];
    //     require(owner != address(0), "ERC721: owner query for nonexistent token");

    //     return owner;
    // }

    function transferFrom(uint256 from, uint256 to, bytes32 tokenId) public onlyUser(from) {
        require(idToVoter[from]._constituencyId == candidateToConstituency[to]);
        Voter memory voter = idToVoter[from];
        voter._hasVoted = true;
        voteToCandidate[voter._vote._voteId] = to;
        candidateVoteCount[to]++;
        emit Transfer(from, to, tokenId);
    }

    function _transferredTo(uint256 _id, uint256 _userId) private view onlyUser(_userId) returns(Candidate memory) {
        uint256 candidateId = voteToCandidate[_id];
        Candidate memory candidate = idToCandidate[candidateId];
        return candidate;
    }
}