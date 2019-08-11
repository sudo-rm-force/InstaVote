import React, { Component } from 'react'
import Candidate from './candidatepanel'
import voted from '../../assets/voted.svg'
import '../../styles/main.scss'

class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voted: false,
            votingStarted: false
        }
    }

    hidesignout() {
        this.props.hidesignout()
    }


    render() {
        if(this.state.votingStarted) {
            if(!this.state.voted) {
                return(
                    <div className='vote' onClick={this.hidesignout}>
                        <div className='vote--heading'>Vote Ballot</div>
                        <div className='vote--ballot'>
                            <Candidate />
                            <Candidate />
                        </div>
                        <button className='vote--clearall' type='button'>Clear All</button>
                        <button className='vote--submit' type='submit'>Vote</button>
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
                        <div className='vote--transaction-constituency'>TransactionID: 141d1d651dw63f1w6</div>
                        <img className='vote--transaction-image' src={voted} alt='' />
                    </div>
                </div>
            )
        }
    }
}

export default Vote
