import React, { Component } from 'react'
import '../../styles/main.scss'
import { connect } from 'react-redux'
import { voterIdChanged, faceDataChanged, loginUser } from '../../actions'
import Camera from 'react-html5-camera-photo';
import loginApi from '../../api/loginApi'
import 'react-html5-camera-photo/build/css/index.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            camera: true,
            url: ''
        }

        this.onTakePhoto = this.onTakePhoto.bind(this)
    }

    componentDidMount() {
        loginApi("1234").then((res) => {console.log(res)})
    }

    onTakePhoto (dataUri) {
        // Naming the image
        const date = new Date().valueOf();
        let text = '';
        const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
        text += possibleText.charAt(Math.floor(Math.random() *    possibleText.length) );
        }
        // Replace extension according to your media type like this 
        const imageName = date + '.' + text + '.jpeg';
        console.log(imageName);
        // call method that creates a blob from dataUri
        let imageBlob;
        const byteString = window.atob(dataUri);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: 'image/jpeg' });
        imageBlob = blob;
        const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' });
        this.generatedImage =  window.URL.createObjectURL(imageFile);
        this.setState({ url:this.generatedImage })
        this.setState({ camera:false })
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
        return(
            <div className='login'>
                <div className='login--heading'>Sign In</div>
             <form onSubmit={this.onButtonPress.bind(this)}>
                <div className='login--photo'>
                { this.state.camera ? ( <Camera
                    idealResolution= { { width: 285, height: 285 } }
                    onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri.replace(/^data:image\/(png|jpg);base64,/, '')); } }
                    /> ) : <img src={this.state.url}/> }
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
