import React, { Component } from 'react'
import CandidateResult from './candidateresult'
import result from '../../assets/no-resultfound.jpg'
import constituencyApi from '../../api/constituencyApi'
import '../../styles/main.scss'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            declared: false,
            election: props.election,
            totalVotes: '',
            numberOfCandidates: '',
            candidates: [],
            winner: {},
            voterCount: ''
        }
        this.hidesignout = this.hidesignout.bind(this)
    }

    async componentDidMount() {
        const declared = await this.state.election.methods.ResultsDeclared().call();
        const voterCount = await this.state.election.methods.constituencyVoterCount(localStorage.getItem('constituencyid')).call()
        this.setState({ voterCount: voterCount })
        this.setState({ declared });
        if (declared) {
            const totalVotes = await this.state.election.methods.retreiveConstituencyVoteCount(localStorage.getItem('constituencyid'), localStorage.getItem('voterid')).call()
            const numberOfCandidates = await this.state.election.methods.constituencyCandidateCount(localStorage.getItem('constituencyid')).call()
            const res = await constituencyApi(localStorage.getItem('constituencyid'))
            const candidatesInfo = res.rows;
            let candidates = []
            let max = 0
            candidatesInfo.forEach(async (candidate) => {
                const votes = await this.state.election.methods.candidateVoteCount(candidate.candidate_id).call()
                const voteper = votes / totalVotes * 100
                const obj = {
                    ...candidate,
                    votes: votes,
                    voteper: voteper
                }
                if (votes > max) {
                    this.setState({ winner: obj })
                    max = votes;
                }
                candidates.push(obj)
                this.setState({ candidates: candidates })
            })
            this.setState({ numberOfCandidates: candidates.length })
            this.setState({ totalVotes, numberOfCandidates })
        }
    }

    hidesignout() {
        this.props.hidesignout()
    }

    render() {
        if (!this.state.declared || !this.state.candidates) {
            return (
                <div className='results' onClick={this.hidesignout}>
                    <div className='results--heading'>
                        Results
                    </div>
                    <div className='results--description'>
                        <div className='results--description-data'>The results have not been declared yet.<br />Wait for the admin to declare the results before you see them.</div>
                        <img className='results--description-image' src={result} alt='no-result' />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className='results' onClick={this.hidesignout}>
                    <div className='results--heading'>
                        Results:
                    </div>
                    <div className='results--panel1'>
                        <div className='results--panel-data'>
                            <div className='results--data-voters'>Number of voters: {this.state.voterCount}</div>
                            <div className='results--data-candidates'>Number of candidates: {this.state.numberOfCandidates}</div>
                            <div className='results--data-votes'>Total votes cast: {this.state.totalVotes}</div>
                        </div>
                    </div>
                    <div className='results--winner'><b>Winner:</b>
                        <CandidateResult name={this.state.winner.name} votes={this.state.winner.votes} voteper={this.state.winner.voteper} party={this.state.winner.party} />
                    </div>
                    <div className='results--panel2'><b>Stats:</b>
                        <div className='results--candidates-data'>
                            {this.state.candidates.map((candidate, index) => (<CandidateResult name={candidate.name} votes={candidate.votes} voteper={candidate.voteper} party={candidate.party} />))}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Results
