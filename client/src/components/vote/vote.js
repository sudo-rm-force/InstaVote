import React, { Component } from 'react'
import Candidate from './candidatepanel'
import voted from '../../assets/voted.svg'
import bjp from '../../assets/bjp.jpg'
import bsp from '../../assets/bsp.jpg'
import cpim from '../../assets/cpim.jpg'
import banyan from '../../assets/banyan.png'
import aap from '../../assets/aap.jpg'
import axe from '../../assets/axe.png'
import fan from '../../assets/fan.png'
import pen from '../../assets/pen.png'
import phone from '../../assets/phone.png'
import sp from '../../assets/sp.jpg'
import candidateApi from '../../api/candidateApi'
import constituencyApi from '../../api/constituencyApi'
import '../../styles/main.scss'

class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voted: false,
            votingStarted: false,
            votingEnded: false,
            candidate: {},
            voter: {},
            candidates: [],
            election: props.election
        }

        this.hidesignout = this.hidesignout.bind(this)
        this.onVote = this.onVote.bind(this)
    }

    async componentDidMount() {
        const constituency = await this.state.election.methods.idToConstituency(localStorage.getItem('constituencyid')).call()
        if(constituency['_startTime']) {
            this.setState({ votingStarted:true })
            const candidates = await constituencyApi(localStorage.getItem('constituencyid'))
            this.setState({ candidates })
        }
        this.setState({ voted: JSON.parse(localStorage.getItem('hasVoted')) })
        if(JSON.parse(localStorage.getItem('hasVoted'))) {
            this.setState({ voted: JSON.parse(localStorage.getItem('hasVoted')) })
            const voter = await this.state.election.methods.idToVoter(localStorage.getItem('voterid')).call()
            const vote = await this.state.election.methods.voteToCandidate(localStorage.getItem('voterid')).call()
            const candidate = await candidateApi(vote)
            this.setState({ candidate: candidate[0], voter })
        }
        if(Date.now() > (parseInt(constituency['_startTime'])+parseInt(constituency['_duration']))*1000)
            this.setState({ votingEnded: true })
    }

    async onVote(event) {
        event.preventDefault();
        await this.state.election.methods.transferFrom(localStorage.getItem('voterid'),'12345',localStorage.getItem('voterid')).send({ from:localStorage.getItem('account') })
        const voter = await this.state.election.methods.idToVoter(localStorage.getItem('voterid')).call()
        localStorage.setItem('hasVoted',voter['_hasVoted'])
        this.setState({ voted:true })
        const vote = await this.state.election.methods.voteToCandidate(localStorage.getItem('voterid')).call()
        const candidate = await candidateApi(vote)
        this.setState({ candidate: candidate[0], voter })
    }

    hidesignout() {
        this.props.hidesignout()
    }

    render() {
        if(this.state.votingStarted && !this.state.votingEnded) {
            if(!this.state.voted) {
                return(
                    <div className='vote' onClick={this.hidesignout}>
                        <div className='vote--heading'>Vote Ballot</div>
                        <div className='vote--ballot'>
                            {this.state.candidates.map((candidate) => (<Candidate name={candidate.name} image={bsp}/>))}
                        </div>
                        <button className='vote--clearall' type='button'>Clear All</button>
                        <button className='vote--submit' type='submit' onClick={this.onVote}>Vote</button>
                    </div>
                )
            }
    
            else {
                return(
                    <div className='vote' onClick={this.hidesignout}>
                        <div className='vote--heading'>Congratulations!! Your all important vote has been recorded</div>
                        <div className='vote--transaction'>
                            <div className='vote--transaction-time'>Voted On: {new Date(this.state.voter['_voteTime']*1000).toString()}</div>
                            <div className='vote--transaction-candidate'>Voted To: {this.state.candidate['name']}</div>
                            <div className='vote--transaction-candidate_party'>BJP</div>
                            <div className='vote--transaction-id'>CandidateID: {this.state.candidate['candidate_id']}</div>
                            <img className='vote--transaction-image' src={voted} alt='' />
                        </div>
                    </div>
                )
            }
        }
        
        else {
            return (
                <div className='vote' onClick={this.hidesignout}>
                    <div className='vote--heading'>Voting yet to start</div>
                    <div className='vote--transaction'>
                        <div className='vote--transaction-date'>Election Date: 15 October 2019</div>
                        <div className='vote--transaction-start'>Start Time: 05:00</div>
                        <div className='vote--transaction-duration'>Duration: 18 Hours</div>
                        <div className='vote--transaction-constituency'>Constituency: Roorkee</div>
                        <img className='vote--transaction-image' src={voted} alt='' />
                    </div>
                </div>
            )
        }
    }
}

export default Vote
