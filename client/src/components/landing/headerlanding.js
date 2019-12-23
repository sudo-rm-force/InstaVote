import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/main.scss'

class HeaderLanding extends Component {
    render() {
        return(
            <div className='headerlanding'>
                <div className='headerlanding--logo'>
                    <img className='headerlanding--logo-image' src={logo} alt='logo'/>
                </div>
                <div className='headerlanding--heading'>
                    InstaVote
                </div>
                <Link to='/register'>
                    <button className='headerlanding--register'>Register</button>
                </Link>
            </div>
        )
    }
}


export default HeaderLanding
