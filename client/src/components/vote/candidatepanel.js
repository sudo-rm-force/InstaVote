import React, { Component } from 'react'
import '../../styles/main.scss'

class CandidatePanel extends Component {
    render() {
        return(
            <div className='candidatepanel'>
                <div className='candidatepanel--name'>
                    Ayan Choudhary
                </div>
                <img className='candidatepanel--icon' src='' alt='icon' />
                <input className='candidatepanel--radio' type='radio' name='vote' value='' /> 
            </div>
        )
    }
}

export default CandidatePanel
