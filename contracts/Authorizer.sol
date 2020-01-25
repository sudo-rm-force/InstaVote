pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
import './ResultHelper.sol';

contract Authorizer is ResultHelper {
    event loginVoterInfo(Voter _voter);

    function registerVoter(uint256 _id, uint256 _constituencyId, uint256 _adminId) external onlyAdmin(_adminId) {
        createVoter(_id, _constituencyId);
    }

    function loginVoter(uint256 _id) external onlyUser(_id) returns(Voter memory) {
        Voter memory _voter = idToVoter[_id];
        emit loginVoterInfo(_voter);
        return _voter;
    }
}