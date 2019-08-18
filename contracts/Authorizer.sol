pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
import './ResultHelper.sol';

contract Authorizer is ResultHelper {
    function register(uint256 _id, uint256 _constituencyId) external {
        createVoter(_id, _constituencyId);
    }

    function login(uint256 _id) public returns(Voter memory) {
        Voter memory _voter = idToVoter[_id];
        return _voter;
    }
}