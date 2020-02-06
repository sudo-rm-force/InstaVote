import React, { Component } from 'react'
import CandidateCard from '../candidate/candidatecard'
import constituencyApi from '../../api/constituencyApi'
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
import { loadWeb3, loadBlockChain } from '../../web3/web3-config'

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
