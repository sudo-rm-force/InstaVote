import React, { Component } from 'react'

class CandidateResult extends Component {
    render() {
        return (
            <div className='candidateresult'>
                <div className='candidateresult--name'>
                    {this.props.name}
                </div>
                <div className='candidateresult--votes'>
                    Votes Earned: {this.props.votes}
                </div>
                <div className='candidateresult--voteper'>
                    Vote %:  {this.props.voteper} %
                </div>
                <div className="candidateresult--party">
                    {this.props.party}
                </div>
            </div>
        )
    }
}

export default CandidateResult
