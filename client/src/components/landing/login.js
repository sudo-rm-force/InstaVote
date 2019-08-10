import React, { Component } from 'react'
import '../../styles/main.scss'

class Login extends Component {
    render() {
        return(
            <div className='login'>
                <div className='login--heading'>Sign In</div>
                <div className='login--photo'>
                    
                </div>
                <input className='login--voterid' type='text' placeholder='VoterID' required/>
                <button className='login--button' type='submit'>Sign In</button>
            </div>
        )
    }
}

export default Login
