import React, { Component } from 'react'
import CandidateCard from '../candidate/candidatecard'
import '../../styles/main.scss'

class Candidate extends Component {
    constructor(props) {
        super(props);
        this.hidesignout = this.hidesignout.bind(this)
    }

    hidesignout() {
        this.props.hidesignout()
    }

    render() {
        return(
            <div className='candidate'onClick={this.hidesignout}>
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
