import React, { Component } from 'react'
import '../../styles/main.scss'
import { connect } from 'react-redux'
import { voterIdChanged, faceDataChanged, loginUser } from '../../actions'

class Login extends Component {

    onVoterIdChange(text) {
          this.props.voterIdChanged(text);
      }

    onButtonPress() {
        const { voterId , faceData } = this.props;
    
        this.props.loginUser({  voterId , faceData });
    }
    render() {
        return(
            <div className='login'>
                <div className='login--heading'>Sign In</div>
                <div className='login--photo'>
                    
                </div>
                <input 
                        className='login--voterid' 
                        type='text' 
                        placeholder='VoterID' 
                        onChangeText = {this.onVoterIdChange.bind(this)}
                        required/>
                <button className='login--button' type='submit' onPress = { this.onButtonPress.bind(this) } >Sign In</button>
            </div>
        )
    }
}

const mapStateToProps = ({ login }) => {
    const { voterId , faceData } = login;
  
    return { voterId , faceData };
  };
  
  export default connect(mapStateToProps, {
   voterIdChanged, loginUser
  })(Login);
