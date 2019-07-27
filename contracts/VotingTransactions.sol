pragma solidity ^0.5.0;
import "./Election.sol";
import "./ERC721.sol";

contract VotingTransactions is Election, ERC721 {

    function ownerOf(uint256 tokenId) public view returns (address) {
        address owner = _tokenOwner[tokenId];
        require(owner != address(0), "ERC721: owner query for nonexistent token");

        return owner;
    }
}