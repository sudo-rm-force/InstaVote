import React, { Component } from 'react'
import '../../styles/main.scss'
import partyImg from '../candidate/party.json'

class CandidatePanel extends Component {
    constructor(props) {
        super(props);
        this.setCandidate = this.setCandidate.bind(this)
    }

    setCandidate(e) {
        this.props.setCandidate(e.target.value)
    }

    render() {
        return(
            <div className='candidatepanel'>
                <div className='candidatepanel--name'>
                    {this.props.name}
                </div>
                {
                    Object.keys(partyImg).map((ind) => {
                        if(partyImg[ind].name==this.props.party) {
                            return <img className='candidatepanel--icon' src={partyImg[ind].partyImage} alt='icon' />
                        }
                    })
                }
                <input className='candidatepanel--radio' onChange={this.setCandidate} type='radio' name='vote' value={this.props.id} /> 
            </div>
        )
    }
}

export default CandidatePanel
