import React, { Component } from 'react'
import '../../styles/main.scss'

class HeaderLanding extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        window.location = '/register'
    }

    render() {
        return(
            <div className='headerlanding'>
                <div className='headerlanding--logo'>
                    <img className='headerlanding--logo-image' alt='logo'/>
                </div>
                <div className='headerlanding--heading'>
                    InstaVote
                </div>
                <button className='headerlanding--register' onClick={this.handleClick}>Register</button>
            </div>
        )
    }
}


export default HeaderLanding
