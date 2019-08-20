import React, { Component } from 'react'

class CandidateCard extends Component {
    render() {
        return(
            <div className='candidatecard'>
                <div className='candidatecard--name'>
                    {this.props.name}
                </div>
                <div className='candidatecard--party'>
                    <img className='candidatecard--party-icon' src={this.props.image} alt=''/>
                </div>
                { this.props.electionended ? (<div className='candidatecard--result'></div>) : <div /> }
            </div>
        )
    }
}

export default CandidateCard
