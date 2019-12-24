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
            await election.registerAdmin(123, { from:deployer });
            const admins = await election.admins(0);
            admin = new web3.utils.BN(admins);
        })
        it('makes admin', async () => {
            assert.equal(admin,123);
        })
        it('registers voters', async () => {
            await election.registerVoter(1234,123456,123);
            const voter = await election.idToVoter(1234);
            voterId = new web3.utils.BN(voter._id);
            constituencyId = new web3.utils.BN(voter._constituencyId);
            assert.equal(voterId,1234);
            assert.equal(constituencyId,123456);
            assert.equal(voter._hasVoted,false);
        })
        it('registers candidates', async () => {
            await election.registerCandidate(12345,123);
            const candidate = await election.idToCandidate(12345);
            candidateId = new web3.utils.BN(candidate);
            assert.equal(candidateId,12345);
        })
        it('registers constituency', async () => {
            await election.registerConstituency(123456,123);
            const constituency = await election.idToConstituency(123456);
            constituencyId = new web3.utils.BN(constituency._id);
            assert.equal(constituencyId,123456);
        })
    })
    describe('constituency', async () => {
        let Admin,Voter,Candidate,Constituency;
        before(async () => {
            await election.registerAdmin(123, { from:deployer });
            const admin = await election.admins(0);
            Admin = new web3.utils.BN(admin); 
            await election.registerVoter(1234,123456,123);
            const voter = await election.idToVoter(1234);
            Voter = new web3.utils.BN(voter._id);
            await election.registerCandidate(12345,123);
            const candidate = await election.idToCandidate(12345);
            Candidate = new web3.utils.BN(candidate);
            await election.registerConstituency(123456,123);
            const constituency = await election.idToConstituency(123456);
            Constituency = new web3.utils.BN(constituency._id);
        })
        // it('fetches constituencies', async () => {
        //     const constituencies = await elections.getConstituencies(Admin);
        // })
    })
})