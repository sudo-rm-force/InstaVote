import React, { Component } from 'react'

class CandidateCard extends Component {
    render() {
        return(
            <div className='candidatecard'>
                <div className='candidatecard--name'>
                    Subham Sahoo
                </div>
                <div className='candidatecard--party'>
                    <img className='candidatecard--party-icon' src='' alt=''/>
                </div>
                { this.props.electionended ? (<div className='candidatecard--result'></div>) : <div /> }
            </div>
        )
    }
}

export default CandidateCard
