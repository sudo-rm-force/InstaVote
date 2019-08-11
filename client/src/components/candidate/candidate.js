import React, { Component } from 'react'
import CandidateCard from '../candidate/candidatecard'
import '../../styles/main.scss'

class Candidate extends Component {
    render() {
        return(
            <div className='candidate'>
                <div className='candidate--heading'>Candidates</div>
                <div className='candidate--list'>
                    <CandidateCard />
                    <CandidateCard />
                </div>
            </div>
        )
    }
}

export default Candidate
