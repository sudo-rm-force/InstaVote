import React, { Component, Fragment } from 'react'
import ConstituencyPanel from './constituencypanel'
import search from '../../assets/search.svg'
import close from '../../assets/close.svg'
import '../../styles/main.scss'

class Constituency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false
        }

        this.close = this.close.bind(this)
        this.start = this.start.bind(this)
        this.click = this.click.bind(this)
    }

    close() {
        this.setState({ start:false })
    }

    start() {
        this.setState({ start:true })
    }

    click() {
        this.props.hidesignout()
    }

    render() {
        return(
            <div className='constituency' onClick={this.click}>
                <div className='constituency--heading'>Constituency</div>
                <div className='constituency--search'>
                    <input className='constituency--search-input' placeholder='Search' />
                    <img className='constituency--search-icon' src={search} alt='search' />
                </div>
                <div className='constituency--list'>
                    <ConstituencyPanel handleClick={this.start}/>
                    <ConstituencyPanel handleClick={this.start}/>
                </div>
                { this.state.start ? (<div className='constituency--overlay'>
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
                </div>) : (<Fragment />) } 
            </div>
        )
    }
}

export default Constituency
