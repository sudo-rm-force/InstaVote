import React, { Component } from 'react'
import logo from '../assets/logo.png'
import cover from '../assets/cover.jpg'
import '../styles/main.scss'

class Landing extends Component {
    render() {
        return(
            <div className='landing'>
                <div className='landing--sidebar'>
                    <div className='landing--logo'><img src={logo} alt='logo'/></div>
                    <div className='landing--sidebar-name'>InstaVote</div>
                    <div className='landing--sidebar-heading'>Admin Panel</div>
                </div>
                <div className='landing--background'><img className='landing--background-image' src={cover} alt='background'/></div>
                <div className='landing--overlay'>
                    <div className='landing--signin'>
                        <div className='landing--signin-block'>
                            <form>
                                <div className='landing--heading-id'>Admin ID</div>
                                <input className='landing--input-id' name='id' required/>
                                <div className='landing--heading-password'>Password</div>
                                <input className='landing--input-password' name='password' type='password' required/>
                                <button className='landing--submit' type='submit'>Sign In</button>
                            </form>
                        </div>
                        <div className='landing--signin-details'>
                            Welcome to the admin panel of InstaVote.<br/><br/>This portal provides you the access to make elections spectacular.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing
