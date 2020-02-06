import React, { Component } from 'react'
import partyImg from './party.json'

class CandidateCard extends Component {
    render() {
        return(
            <div className='candidatecard'>
                <div className='candidatecard--name'>
                    {this.props.name}
                </div>
                <div className='candidatecard--party'>
                {
                    Object.keys(partyImg).map((ind) => {
                        if(partyImg[ind].name==this.props.party) {
                            return <img className='candidatecard--party-icon' src={partyImg[ind].partyImage} alt=''/>
                        }
                    })
                }
                </div>
                { this.props.electionended ? (<div className='candidatecard--result'></div>) : <div /> }
            </div>
        )
    }
}

export default CandidateCard
