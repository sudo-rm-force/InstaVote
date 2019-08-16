import React, { Component } from 'react'
import '../../styles/main.scss'

class Capture extends Component {
    constructor() {
        super(props);

        this.state = {
            constraints: { audio: false, video: { width: 400, height: 300 } }
        };

        this.handleStartClick = this.handleStartClick.bind(this);
        this.takePicture = this.takePicture.bind(this);
        this.clearPhoto = this.clearPhoto.bind(this);
    }

    componentDidMount() {
        const constraints = this.state.constraints;
        const getUserMedia = (params) => (
        new Promise((successCallback, errorCallback) => {
            navigator.webkitGetUserMedia.call(navigator, params, successCallback, errorCallback);
        }));

        getUserMedia(constraints)
        .then((stream) => {
        const video = document.querySelector('video');
        const vendorURL = window.URL || window.webkitURL;

        video.src = vendorURL.createObjectURL(stream);
        video.play();
        })
        .catch((err) => {
        console.log(err);
        });

        this.clearPhoto();
    }

    clearPhoto() {
        const canvas = document.querySelector('canvas');
        const photo = document.getElementById('photo');
        const context = canvas.getContext('2d');
        const { width, height } = this.state.constraints.video;
        context.fillStyle = '#FFF';
        context.fillRect(0, 0, width, height);

        const data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }

    handleStartClick(event) {
        event.preventDefault();
        this.takePicture();
    }

    takePicture() {
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
        const video = document.querySelector('video');
        const photo = document.getElementById('photo');
        const { width, height } = this.state.constraints.video;

        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);

        const data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }

    render() {
        return (
            <div className="capture"
              style={ styles.capture }
            >
                <div className="camera"
                    style={ styles.box }
                >
                    {/* <video id="video"
                    style={ styles.picSize }
                    ></video>
                    <a id="startButton"
                    onClick={ props.handleStartClick }
                    style={ styles.button }
                    >Take photo</a> */}
                </div>
              <canvas id="canvas"
                style={ styles.picSize }
                hidden
              ></canvas>
            <div className="output"
                style={ styles.box }
            >
                {/* <img id="photo" alt="Your photo"
                style={ styles.picSize }
                />
                <a id="saveButton"
                onClick={ props.handleSaveClick }
                style={ styles.button }
                >Save Photo</a> */}
            </div>
            </div>
        );
    }
}

export default Capture