import React, { Component } from 'react'
import election from '../../web3/web3-config'
import close from '../../assets/close.svg'
import '../../styles/main.scss'

class ConstituencyCard extends Component {
    constructor(props) {
        super(props);

        this.close = this.close.bind(this)
    }

    close() {
        this.props.close()
    }

    componentDidMount() {
        // election.methods.generateElectionforConstituency(this.state.ConstituencyId, this.state.AdminId).send((res) => {
        //     console.log(res)
        // })
    }

    render() {
        return(
            <div className='constituency--overlay'>
                <div className='constituency--start'>
                    <div className='constituency--start-heading'>Start Election</div>
                    <img className='constituency--close' src={close} alt='close' onClick={this.close} />
                    <div className='constituency--heading-name'>Roorkee</div>
                    <div className='constituency--heading-id'>12.212.12156</div>
                    <div className='constituency--heading-start'>Start Time</div>
                    <input className='constituency--input-start' value={Date.now()} name='start' />
                    <div className='constituency--heading-duration'>Duration</div>
                    <input className='constituency--input-duration' name='duration' />
                    <button className='constituency--button'>Start</button>
                </div>
            </div>
        )
    }
}

export default ConstituencyCard
