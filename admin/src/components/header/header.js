import React, { Component, Fragment } from 'react'
import SignOut from './signout'
import logo from '../../assets/logo.png'
import '../../styles/main.scss'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signout:false
        }

        this.signout = this.signout.bind(this)
    }

    componentWillReceiveProps(props) {
        this.setState({ signout:props.signout })
    }

    signout() {
        this.props.showsignout()
    }

    render() {
        return (
            <div className='header' >
                <div className='header--logo'>
                    <img className='header--logo-image' src={logo} alt='logo'/>
                </div>
                <div className='header--name'>InstaVote</div>
                <div className='header--user' onClick={this.signout}>
                    Admin
                </div>
                <div className='header--user-image' onClick={this.signout}>
                    <img alt='admin'/>
                </div>
                { this.state.signout ? <SignOut /> : <Fragment /> }
            </div>
        )
    }
}

export default Header
