import React, { Component } from 'react'
import '../../styles/main.scss'
// import { voterIdChanged, faceDataChanged, loginUser } from '../../actions'
import Camera from 'react-html5-camera-photo';
import loginApi from '../../api/loginApi';
import { CONFIG } from '../../config/config'
import { loadBlockChain } from '../../web3/web3-config'
import 'react-html5-camera-photo/build/css/index.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            camera: true,
            url: '',
            voterId: '',
            faceID: '',
            faceName: '',
            election:''
        }

        this.onTakePhoto = this.onTakePhoto.bind(this)
    }

    async componentDidMount() {
        const blockchain = await loadBlockChain()
        localStorage.setItem('account',blockchain['accounts'])
        this.setState({ election:blockchain['election'] })
    }

    onTakePhoto (dataUri) {
        const date = new Date().valueOf();
        let text = '';
        const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
        text += possibleText.charAt(Math.floor(Math.random() *    possibleText.length) );
        }
        const imageName = date + text + '.jpeg';
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
        this.setState({ faceID:dataUri })
        this.setState({ faceName:imageName })
    }
     
    onVoterIdChange(event) {
          this.setState({voterId:event.target.value})
      }

    async onButtonPress(event) {
        event.preventDefault();
        this.props.loading();
        loginApi(this.state.voterId, this.state.faceID, this.state.faceName).then((res) => {
            if(res.success) {
                // election.methods.login(this.state.voterId).call((res,err) => {
                //     console.log(res)
                //     //Map user data to global variables
                // })
                const voter = res.data[0]
                localStorage.setItem('name',voter.name)
                localStorage.setItem('voterid',voter.voter_id)
                localStorage.setItem('constituencyid',voter.constituency_id)
                localStorage.setItem('image',`${CONFIG.baseURL}/images/${voter.face_name}`)
                window.location = '/'+this.state.voterId+'/Profile'
                
            }
            else {
                window.alert('You might not be registered.')
                window.location = '/register'
            }
        })
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
                    /> ) : <img src={this.state.url} alt='user'/> }
                </div>
                <input 
                        className='login--voterid' 
                        type='text' 
                        placeholder='VoterID' 
                        onChange = {this.onVoterIdChange.bind(this)}
                        required/>
                <button className='login--button' type='submit'>Sign In</button>
            </form>
            </div>
        )
    }
}

export default Login
