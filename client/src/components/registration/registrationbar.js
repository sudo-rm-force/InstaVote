import React, { Component } from 'react'
import Webcam from 'react-webcam'
import '../../styles/main.scss'

class RegistrationBar extends Component {
    constructor(props) {
        super(props)
        this.onSnap = this.onSnap.bind(this)
    }

    setRef = webcam => {
        this.webcam = webcam;
      }

    onSnap(event) {
        event.preventDefault();
        const imageSrc = this.webcam.getScreenshot()
        console.log(imageSrc)
    }

    render() {
        const videoConstraints = {
            height: '290',
            width: '290',
            facingMode: 'user'
        }

        return(
            <div className='registrationbar'>
                <div className='registrationbar--photo'>
                    <Webcam 
                    audio={false}
                    ref={this.setRef}
                    screenshotFormat='image/jpeg'
                    videoConstraints={videoConstraints}
                    width='284px'
                    height='284px'
                    />
                </div>
                <button className='registrationbar--button' onClick={this.onSnap}>Take Photo</button>
            </div>
        )
    }
}

export default RegistrationBar
