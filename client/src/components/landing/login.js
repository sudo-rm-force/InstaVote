import React, { Component } from 'react'
import '../../styles/main.scss'
import { connect } from 'react-redux'
import { voterIdChanged, faceDataChanged, loginUser } from '../../actions'
import Webcam from "react-webcam"

class Login extends Component {

    setRef = webcam => {
        this.webcam = webcam;
      }
     
    onVoterIdChange(text) {
          this.props.voterIdChanged(text);
      }

    onButtonPress(event) {
        event.preventDefault()

        const imageSrc = this.webcam.getScreenshot();
    
        this.props.faceDataChanged(imageSrc)

        const { voterId , faceData } = this.props;

        this.props.loginUser({  voterId }, imageSrc);
    }
    render() {
        const videoConstraints = {
            width: '290',
            height: '290',
            facingMode: "user"
        }

        return(
            <div className='login'>
                <div className='login--heading'>Sign In</div>
             <form onSubmit={this.onButtonPress.bind(this)}>
                <div className='login--photo'>
                 <Webcam
                    audio={false}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width='290px'
                    height='290px'
                    videoConstraints={videoConstraints}
                    />  
                </div>
                <input 
                        className='login--voterid' 
                        type='text' 
                        placeholder='VoterID' 
                        onChangeText = {this.onVoterIdChange.bind(this)}
                        required/>
                <button className='login--button' type='submit'>Sign In</button>
             </form>
            </div>
        )
    }
}

const mapStateToProps = ({ login }) => {
    const { voterId , faceData } = login;
  
    return { voterId , faceData };
  };
  
  export default connect(mapStateToProps, {
   voterIdChanged, faceDataChanged, loginUser
  })(Login);
