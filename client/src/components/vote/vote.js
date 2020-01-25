import React, { Component } from 'react'
import Candidate from './candidatepanel'
// import election from '../../web3/web3-config'
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
import '../../styles/main.scss'

class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voted: false,
            votingStarted: true,
            election: props.election
        }

        this.hidesignout = this.hidesignout.bind(this)
        this.onVote = this.onVote.bind(this)
    }

    componentWillMount() {
        // if(this.props.voted) {
        //     this.setState({ voted:true })
        // }
        // election.methods.getConstituencyDetails(this.state.ConstituencyId, this.state.voterId).call((res) => {
        //     console.log(res)
        //     if(Date.now() < res._startTime+res._duration && Date.now() > res._startTime) {
        //         this.setState({ votingStarted:true })
        //     }
        // })
    }

    componentDidMount() {
        this.setState({ voted: localStorage.getItem('hasVoted') })
        // election.methods.getCandidatesByConstituency(this.state.ConstituencyId, this.state.voterId).call((res) => {
        //     console.log(res)
        // })
    }

    async onVote(event) {
        event.preventDefault();
        const yo = await this.state.election.methods.transferFrom(localStorage.getItem('voterid'),'1234',localStorage.getItem('voterid')).send({ from:localStorage.getItem('account') })
        console.log(yo)
        const voter = await this.state.election.methods.idToVoter(localStorage.getItem('voterid')).call()
        console.log(voter)
    }

    hidesignout() {
        this.props.hidesignout()
    }

    render() {
        if(this.state.votingStarted) {
            if(this.state.voted) {
                return(
                    <div className='vote' onClick={this.hidesignout}>
                        <div className='vote--heading'>Vote Ballot</div>
                        <div className='vote--ballot'>
                            <Candidate name='Subham Sahoo' image={bsp}/>
                            <Candidate name='Karanpreet Singh' image={fan}/>
                            <Candidate name='Ayan Choudhary' image={bjp}/>
                            <Candidate name='Adrij Shikhar' image={aap}/>
                            <Candidate name='Manas Chaudhary' image={pen}/>
                            <Candidate name='Savita Gupta' image={axe}/>
                            <Candidate name='Aniket Kumar' image={cpim}/>
                            <Candidate name='Nupur Agarwal' image={banyan}/>
                            <Candidate name='Ashutosh Bharambe' image={sp}/>
                            <Candidate name='Leshna Balara' image={phone}/>
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
                            <div className='vote--transaction-time'>Voted On: 15 October 2019 05:00</div>
                            <div className='vote--transaction-candidate'>Voted To: Karanpreet</div>
                            <div className='vote--transaction-candidate_party'>BJP</div>
                            <div className='vote--transaction-id'>TransactionID: 141d1d651dw63f1w6</div>
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
