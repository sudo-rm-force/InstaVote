import React, { Component } from 'react'
import CandidateCard from '../candidate/candidatecard'
import election from '../../web3/web3-config'
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

class Candidate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ConstituencyId:15136168186,
            voterId:18117019
        }
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
                    <CandidateCard name='Subham Sahoo' image={bsp}/>
                    <CandidateCard name='Karanpreet Singh' image={fan}/>
                    <CandidateCard name='Ayan Choudhary' image={bjp}/>
                    <CandidateCard name='Adrij Shikhar' image={aap}/>
                    <CandidateCard name='Manas Chaudhary' image={pen}/>
                    <CandidateCard name='Savita Gupta' image={axe}/>
                    <CandidateCard name='Aniket Kumar' image={cpim}/>
                    <CandidateCard name='Nupur Agarwal' image={banyan}/>
                    <CandidateCard name='Ashutosh Bharambe' image={sp}/>
                    <CandidateCard name='Leshna Balara' image={phone}/>
                </div>
            </div>
        )
    }
}

export default Candidate
