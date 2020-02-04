import React, { Component } from 'react'
import loginAdminApi from '../api/loginAdminApi'
import logo from '../assets/logo.png'
import cover from '../assets/cover.jpg'
import '../styles/main.scss'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
            election: ''
        }
    }

    componentDidMount() {
        if(localStorage.getItem("admin_id")) {
            window.location = '/' + localStorage.getItem("admin_id") + '/Candidates';
        }
    }

    onChangeId(event) {
        this.setState({ id: event.target.value })
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value })
    }

    onButtonPress(event) {
        event.preventDefault()
        loginAdminApi(this.state.id, this.state.password).then((res, err) => {
            if (res.success) {
                localStorage.setItem("admin_id", this.state.id);
                window.location = '/' + this.state.id + '/Candidates'
            }
            else {
                window.alert('You are not registered as an admin!')
            }
        })
    }

    render() {
        return (
            <div className='landing'>
                <div className='landing--sidebar'>
                    <div className='landing--logo'><img src={logo} alt='logo' /></div>
                    <div className='landing--sidebar-name'>InstaVote</div>
                    <div className='landing--sidebar-heading'>Admin Panel</div>
                </div>
                <div className='landing--background'><img className='landing--background-image' src={cover} alt='background' /></div>
                <div className='landing--overlay'>
                    <div className='landing--signin'>
                        <div className='landing--signin-block'>
                            <form onSubmit={this.onButtonPress.bind(this)}>
                                <div className='landing--heading-id'>Admin ID</div>
                                <input className='landing--input-id' name='id' onChange={this.onChangeId.bind(this)} required />
                                <div className='landing--heading-password'>Password</div>
                                <input className='landing--input-password' name='password' type='password' onChange={this.onChangePassword.bind(this)} required />
                                <button className='landing--submit' type='submit'>Sign In</button>
                            </form>
                        </div>
                        <div className='landing--signin-details'>
                            Welcome to the admin panel of InstaVote.<br /><br />This portal provides you the access to make elections spectacular.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing
