import React, { Component } from 'react'

class SignOut extends Component {

    onButtonPress() {
        localStorage.clear()
        window.location = '/'
    }

    render() {
        return(
            <div className='signout'>
                <div className='signout--heading'>Signed in as</div>
                <div className='signout--data'>{localStorage.getItem('name')} <br/><br/>{localStorage.getItem('voterid')}</div>
                <button className='signout--button' onClick={this.onButtonPress.bind(this)}>Sign Out</button>
            </div>
        )
    }
}

export default SignOut
