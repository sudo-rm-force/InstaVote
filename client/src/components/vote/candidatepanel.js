import React, { Component } from 'react'
import '../../styles/main.scss'

class CandidatePanel extends Component {
    render() {
        return(
            <div className='candidatepanel'>
                <div className='candidatepanel--name'>
                    {this.props.name}
                </div>
                <img className='candidatepanel--icon' src={this.props.image} alt='icon' />
                <input className='candidatepanel--radio' type='radio' name='vote' value='' /> 
            </div>
        )
    }
}

export default CandidatePanel
