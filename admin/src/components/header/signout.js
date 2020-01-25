import React, { Component } from 'react'

class SignOut extends Component {

    onButtonPress() {
        window.location = '/'
    }

    render() {
        return (
            <div className='signout'>
                <div className='signout--heading'>Signed in as</div>
                <div className='signout--data'>Admin <br /><br />{localStorage.getItem("admin_id")}</div>
                <button className='signout--button' onClick={this.onButtonPress.bind(this)}>Sign Out</button>
            </div>
        )
    }
}

export default SignOut
