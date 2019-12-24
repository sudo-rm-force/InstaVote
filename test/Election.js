const Election = artifacts.require('Authorizer')
require('chai').use(require('chai-as-promised')).should()

contract('Election', ([deployer,admin,voter,candidate]) => {
    let election;
    before(async () => {
        election = await Election.deployed();
    })
    describe('deployment', async () => {
        it('deploys successfully', async () => {
            const address = await election.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        })
    })
    describe('admin', async () => {
        let admin;
        before(async () => {
            await election.registerAdmin(1234, { from:deployer });
            const admins = await election.admins(0);
            admin = new web3.utils.BN(admins);
        })
        it('makes admin', async () => {
            assert.equal(admin,1234);
        })
        it('registers voters', async () => {
            await election.registerVoter(123,123456,1234);
            const voter = await election.idToVoter(123);
            voterId = new web3.utils.BN(voter._id);
            constituencyId = new web3.utils.BN(voter._constituencyId);
            assert.equal(voterId,123);
            assert.equal(constituencyId,123456);
            assert.equal(voter._hasVoted,false);
        })
        it('registers candidates', async () => {
            await election.registerCandidate(123,1234);
            const candidate = await election.idToCandidate(123);
            candidateId = new web3.utils.BN(candidate);
            assert.equal(candidateId,123);
        })
        it('registers constituency', async () => {
            await election.registerConstituency(123,1234);
            const constituency = await election.idToConstituency(123);
            constituencyId = new web3.utils.BN(constituency._id);
            assert.equal(constituencyId,123);
        })
    })
})