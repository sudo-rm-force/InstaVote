pragma solidity ^0.5.0;


contract ERC721 {

    // // event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);

    // // Equals to `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`
    // // which can be also obtained as `IERC721Receiver(0).onERC721Received.selector`
    // bytes4 private constant _ERC721_RECEIVED = 0x150b7a02;

    // // Mapping from token ID to owner
    // mapping (uint256 => address) private _tokenOwner;

    // // Mapping from owner to number of owned token
    // mapping (address => Counters.Counter) private _ownedTokensCount;

    // // Mapping from owner to operator approvals
    // mapping (address => mapping (address => bool)) private _operatorApprovals;

    // /*
    //  *     bytes4(keccak256('balanceOf(address)')) == 0x70a08231
    //  *     bytes4(keccak256('ownerOf(uint256)')) == 0x6352211e
    //  *     bytes4(keccak256('approve(address,uint256)')) == 0x095ea7b3
    //  *     bytes4(keccak256('getApproved(uint256)')) == 0x081812fc
    //  *     bytes4(keccak256('setApprovalForAll(address,bool)')) == 0xa22cb465
    //  *     bytes4(keccak256('isApprovedForAll(address,address)')) == 0xe985e9c5
    //  *     bytes4(keccak256('transferFrom(address,address,uint256)')) == 0x23b872dd
    //  *     bytes4(keccak256('safeTransferFrom(address,address,uint256)')) == 0x42842e0e
    //  *     bytes4(keccak256('safeTransferFrom(address,address,uint256,bytes)')) == 0xb88d4fde
    //  *
    //  *     => 0x70a08231 ^ 0x6352211e ^ 0x095ea7b3 ^ 0x081812fc ^
    //  *        0xa22cb465 ^ 0xe985e9c ^ 0x23b872dd ^ 0x42842e0e ^ 0xb88d4fde == 0x80ac58cd
    //  */
    // bytes4 private constant _INTERFACE_ID_ERC721 = 0x80ac58cd;

    // constructor () public {
    //     // register the supported interfaces to conform to ERC721 via ERC165
    //     _registerInterface(_INTERFACE_ID_ERC721);
    // }

    // /**
    //  * @dev Gets the owner of the specified token ID.
    //  * @param tokenId uint256 ID of the token to query the owner of
    //  * @return address currently marked as the owner of the given token ID
    //  */
    // function ownerOf(uint256 tokenId) public view returns (address);

    // function transferFrom(uint256 from, uint256 to, bytes32 tokenId) public;

    // function _exists(uint256 tokenId) internal view returns (bool) {
    //     address owner = _tokenOwner[tokenId];
    //     return owner != address(0);
    // }

    // /**
    //  * @dev Internal function to transfer ownership of a given token ID to another address.
    //  * As opposed to {transferFrom}, this imposes no restrictions on msg.sender.
    //  * @param from current owner of the token
    //  * @param to address to receive the ownership of the given token ID
    //  * @param tokenId uint256 ID of the token to be transferred
    //  */
    // function _transferFrom(address from, address to, uint256 tokenId) internal {
    //     require(ownerOf(tokenId) == from, "ERC721: transfer of token that is not own");
    //     require(to != address(0), "ERC721: transfer to the zero address");

    //     _clearApproval(tokenId);

    //     _ownedTokensCount[from].decrement();
    //     _ownedTokensCount[to].increment();

    //     _tokenOwner[tokenId] = to;

    //     emit Transfer(from, to, tokenId);
    // }

    // /**
    //  * @dev Internal function to invoke {IERC721Receiver-onERC721Received} on a target address.
    //  * The call is not executed if the target address is not a contract.
    //  *
    //  * This function is deprecated.
    //  * @param from address representing the previous owner of the given token ID
    //  * @param to target address that will receive the tokens
    //  * @param tokenId uint256 ID of the token to be transferred
    //  * @param _data bytes optional data to send along with the call
    //  * @return bool whether the call correctly returned the expected magic value
    //  */
    // function _checkOnERC721Received(address from, address to, uint256 tokenId, bytes memory _data)
    //     internal returns (bool)
    // {
    //     if (!to.isContract()) {
    //         return true;
    //     }

    //     bytes4 retval = IERC721Receiver(to).onERC721Received(msg.sender, from, tokenId, _data);
    //     return (retval == _ERC721_RECEIVED);
    // }

    // function _transferredTo (bytes32 _id) private view returns (uint256);
}
