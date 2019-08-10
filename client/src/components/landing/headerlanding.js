import React, { Component } from 'react'
import '../../styles/main.scss'

class HeaderLanding extends Component {
    render() {
        return(
            <div className='headerlanding'>
                <div className='headerlanding--logo'>
                    <img className='headerlanding--logo-image' alt='logo'/>
                </div>
                <div className='headerlanding--heading'>
                    InstaVote
                </div>
                <button className='headerlanding--register'>Register</button>
            </div>
        )
    }
}


export default HeaderLanding
