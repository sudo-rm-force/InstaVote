import React, { Component } from 'react'
import '../../styles/main.scss'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { takePic } from '../../actions'

class RegistrationBar extends Component {

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
        window.open(this.generatedImage);
        this.props.takePic(blob);
    }

    triggerCamera() {
        document.getElementsByClassName("camera")
    }

    render() {
        
        return(
            <div className='registrationbar'>
                <div className="registrationbar--photo">
                    <Camera
                    idealResolution= { { width: 285, height: 285 } }
                    onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri.replace(/^data:image\/(png|jpg);base64,/, '')); } }
                    />
                </div>
                <button className='registrationbar--button' onClick={this.triggerCamera()}>Take Photo</button>
            </div>
        )
    }
}

const mapStateToProps = ({ register }) => {
    const { pic  } = register;
  
    return { pic };
  };
  
  export default connect(mapStateToProps, {
    takePic
  })(RegistrationBar);
