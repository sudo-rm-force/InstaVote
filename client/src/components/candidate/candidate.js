import React, { Component } from 'react'
import CandidateCard from '../candidate/candidatecard'
import election from '../../web3/web3-config'
import '../../styles/main.scss'

class Candidate extends Component {
    constructor(props) {
        super(props);
        this.hidesignout = this.hidesignout.bind(this)
    }

    hidesignout() {
        this.props.hidesignout()
    }

    componentDidMount() {
        // election.methods.getCandidatesByConstituency(this.state.ConstituencyId, this.state.voterId).call((res) => {
        //     console.log(res)
        // })
    }

    render() {
        return(
            <div className='candidate'onClick={this.hidesignout}>
                <div className='candidate--heading'>Candidates</div>
                <div className='candidate--list'>
                    <CandidateCard name='Subham Sahoo'/>
                    <CandidateCard name='Karanpreet Singh'/>
                    <CandidateCard name='Ayan Choudhary'/>
                    <CandidateCard name='Adrij Shikhar'/>
                    <CandidateCard name='Manas Chaudhary'/>
                    <CandidateCard name='Savita Gupta'/>
                    <CandidateCard name='Aniket Kumar'/>
                    <CandidateCard name='Nupur Agarwal'/>
                    <CandidateCard name='Ashutosh Bharambe'/>
                    <CandidateCard name='Leshna Balara'/>
                </div>
            </div>
        )
    }
}

export default Candidate
