import React, { Component } from 'react'
import RegistrationBar from '../components/registration/registrationbar'
import RegistrationForm from '../components/registration/registrationform';

class Registration extends Component {
    render() {
        return(
            <div>
                <RegistrationBar />
                <RegistrationForm />
            </div>
        )
    }
}

export default Registration
