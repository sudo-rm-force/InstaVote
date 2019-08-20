import React, { Component } from 'react'

class CandidateResult extends Component {
    render() {
        return(
            <div className='candidateresult'>
                <div className='candidateresult--name'>
                    {this.props.name}
                </div>
                <div className='candidateresult--votes'>
                    Votes Earned: 5513
                </div>
                <div className='candidateresult--voteper'>
                    Vote %: 34.7%
                </div>
            </div>
        )
    }
}

export default CandidateResult
