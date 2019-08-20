import React, { Component } from 'react'
import RegistrationBar from '../components/registration/registrationbar'
import RegistrationForm from '../components/registration/registrationform';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faceID: '',
            faceName: ''
        }

        this.setFaceID = this.setFaceID.bind(this)
    }

    setFaceID(faceID, faceName) {
        this.setState({ faceID, faceName })
        // console.log(faceName)
    }

    render() {
        return(
            <div>
                <RegistrationBar handleSnap={this.setFaceID} />
                <RegistrationForm faceID={this.state.faceID} faceName={this.state.faceName} />
            </div>
        )
    }
}

export default Registration
