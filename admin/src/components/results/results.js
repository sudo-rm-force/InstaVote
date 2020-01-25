import React, { Component } from 'react'
import web3 from 'web3'
import vote from '../../assets/vote.svg'
import party from '../../assets/party.jpg'
import '../../styles/main.scss'

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            declared:false,
            election: props.election
        }

        this.click = this.click.bind(this)
    }

    click() {
        this.props.hidesignout()
    }

    async onButtonPress() {
        await this.state.election.methods.declareResults(localStorage.getItem('admin_id')).send({ from:localStorage.getItem('admin-account') })
        this.setState({ declared:true })
    }

    render() {
        if (!this.state.declared) {
            return(
                <div className='results' onClick={this.click}>
                    <div className='results--heading'>Results</div>
                    <div className='results--description'>Welcome to the long awaited results section. <br/><br/>The whole of India waits anxiously for this result. Elections are the upholding pillars of Indian democracy. Elections are one of those events which binds the whole country together. Conduting and managing elections is an enormous task in itself and every care shoultd be taken to ensure there is an error free election and its result.<br/><br/> Now you hold the key to declaring this result. Make sure you follow the prescribed instructions from the Election Commission before declaring the results.</div>
                    <div className='results--image'><img alt='vote' src={vote}/></div>
                    <button type='button' className='results--button' onClick={this.onButtonPress.bind(this)}>Declare Results</button>
                </div>
            )
        }
        else {
            return(
                <div className='results' onClick={this.click}>
                    <div className='results--heading'>Results</div>
                    <div className='results--description'>Congratulations!! The results have been successfully declared.<br/><br/>This being a blockchain based election system provides for a secure voting and vote counting mechanism while keeping track of vote transfeers to prevent any false accusations.<br/><br/>The voters will be directly able to see the results in their respective accounts.</div>
                    <div className='results--image'><img alt='vote' src={party}/></div>
                </div>
            )
        }
    }
}

export default Results
