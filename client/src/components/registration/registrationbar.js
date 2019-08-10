import React, { Component } from 'react'
import '../../styles/main.scss'

class RegistrationBar extends Component {
    render() {
        return(
            <div className='registrationbar'>
                <div className='registrationbar--photo'>

                </div>
                <button className='registrationbar--button'>Take Photo</button>
            </div>
        )
    }
}

export default RegistrationBar
