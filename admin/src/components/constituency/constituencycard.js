import React, { Component } from 'react'
import close from '../../assets/close.svg'
import '../../styles/main.scss'

class ConstituencyCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            Id: '',
            duration: ''
        }

        this.close = this.close.bind(this)
    }

    close() {
        this.props.close()
    }

    onButtonPress() {
        console.log()
        const a = this.state.duration.split(':'); // split it at the colons
        const dur = (a[0] * 24 * 60 * 60 + a[1] * 60 * 60 + (+a[2]) * 60 + (+a[3])) * 1000
        window.alert('Election started for ' + this.state.name)
        this.props.close()
        this.props.splice(this.state.name)
    }

    componentDidMount() {
        // election.methods.generateElectionforConstituency(this.state.ConstituencyId, this.state.AdminId).send((res) => {
        //     console.log(res)
        // })
        this.setState({
            name: this.props.name,
            Id: this.props.Id
        })
    }

    componentWillReceiveProps(props) {
        this.setState({ name: props.name })
    }

    handleChange = (e) => {
        this.setState({ duration: e.target.value })
    }

    render() {
        return (
            <div className='constituency--overlay'>
                <div className='constituency--start'>
                    <div className='constituency--start-heading'>Start Election</div>
                    <img className='constituency--close' src={close} alt='close' onClick={this.close} />
                    <div className='constituency--heading-name'>{this.state.name}</div>
                    <div className='constituency--heading-id'>{this.state.Id}</div>
                    <div className='constituency--heading-start'>Start Time</div>
                    <input className='constituency--input-start' value={new Date()} name='start' />
                    <div className='constituency--heading-duration'>Duration</div>
                    <input className='constituency--input-duration' name='duration' value={this.state.duration} onChange={this.handleChange} />
                    <button className='constituency--button' onClick={this.onButtonPress.bind(this)}>Start</button>
                </div>
            </div>
        )
    }
}

export default ConstituencyCard
