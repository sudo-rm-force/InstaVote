import React, { Component } from 'react'

class SignOut extends Component {
    render() {
        return(
            <div className='signout'>
                <div className='signout--heading'>Signed in as</div>
                <div className='signout--data'>Ayan Choudhary <br/><br/> 1213541651</div>
                <button className='signout--button'>Sign Out</button>
            </div>
        )
    }
}

export default SignOut
