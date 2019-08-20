pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
import './ResultHelper.sol';

contract Authorizer is ResultHelper {
    function registerVoter(uint256 _id, uint256 _constituencyId, uint256 _adminId) external onlyAdmin(_adminId) {
        createVoter(_id, _constituencyId);
    }

    function loginVoter(uint256 _id) external onlyUser(_id) returns(Voter memory) {
        Voter memory _voter = idToVoter[_id];
        return _voter;
    }
}