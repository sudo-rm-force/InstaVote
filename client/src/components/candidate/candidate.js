import React, { Component } from 'react'
import CandidateCard from '../candidate/candidatecard'
import constituencyApi from '../../api/constituencyApi'
import '../../styles/main.scss'

class Candidate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ConstituencyId: localStorage.getItem('constituencyid'),
            voterId: localStorage.getItem('voterid'),
            candidates: [],
            election: ''
        }
        this.hidesignout = this.hidesignout.bind(this)
    }

    hidesignout() {
        this.props.hidesignout()
    }

    async componentDidMount() {
        const candidates = await constituencyApi(localStorage.getItem('constituencyid'));
        this.setState({ candidates: candidates.rows })
    }

    render() {
        return (
            <div className='candidate' onClick={this.hidesignout} >
                <div className='candidate--heading'>Candidates</div>
                <div className='candidate--list'>
                    {this.state.candidates.map((candidate, index) => (<CandidateCard key={index} name={candidate.name} image={candidate.party} party={candidate.party}/>))}
                </div>
            </div>
        )
    }
}

export default Candidate
