import React, { Component } from 'react'
import '../../styles/main.scss'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='header--logo'>
                    <img className='header--logo-image' alt='logo'/>
                </div>
                <div className='header--user'>
                    Ayan Choudhary
                </div>
                <div className='header--user-image'>
                    <img alt='user'/>
                </div>
            </div>
        )
    }
}

export default Header
