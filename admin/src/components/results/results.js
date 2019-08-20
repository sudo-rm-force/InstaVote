import React, { Component } from 'react'
import vote from '../../assets/vote.svg'
import '../../styles/main.scss'

class Results extends Component {
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
    }

    click() {
        this.props.hidesignout()
    }

    render() {
        return(
            <div className='results' onClick={this.click}>
                <div className='results--heading'>Results</div>
                <div className='results--description'>Welcome to the long awaited results section. <br/><br/>The whole of India waits anxiously for this result. Elections are the upholding pillars of Indian democracy. Elections are one of those events which binds the whole country together. Conduting and managing elections is an enormous task in itself and every care shoultd be taken to ensure there is an error free election and its result.<br/><br/> Now you hold the key to declaring this result. Make sure you follow the prescribed instructions from the Election Commission before declaring the results.</div>
                <div className='results--image'><img alt='vote' src={vote}/></div>
                <button type='button' className='results--button'>Declare Results</button>
            </div>
        )
    }
}

export default Results
