import React, { Component } from 'react'

class SignOut extends Component {

    onButtonPress() {
        window.location = '/'
    }

    render() {
        return(
            <div className='signout'>
                <div className='signout--heading'>Signed in as</div>
                <div className='signout--data'>Ayan Choudhary <br/><br/>18117019</div>
                <button className='signout--button' onClick={this.onButtonPress.bind(this)}>Sign Out</button>
            </div>
        )
    }
}

export default SignOut
