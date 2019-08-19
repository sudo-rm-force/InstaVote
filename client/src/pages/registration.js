import React, { Component } from 'react'
import RegistrationBar from '../components/registration/registrationbar'
import RegistrationForm from '../components/registration/registrationform';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faceID: ''
        }

        this.setFaceID = this.setFaceID.bind(this)
    }

    setFaceID(faceID) {
        this.setState({ faceID })
    }

    render() {
        return(
            <div>
                <RegistrationBar handleSnap={this.setFaceID} />
                <RegistrationForm faceID={this.state.faceID} />
            </div>
        )
    }
}

export default Registration
