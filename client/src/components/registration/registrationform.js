import React, { Component } from 'react'
import { connect } from 'react-redux'
import { voterIdChanged_reg, mobileNumChanged, nameChanged, register, genderSelect  } from '../../actions'
import web3 from '../../web3/web3'
import Election from '../../web3/Election'
import back from '../../assets/back.svg'
import '../../styles/main.scss'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            VoterID: '',
            Gender: '',
            MobileNo: ''
        }

        this.return = this.return.bind(this);
        this.onGenderSelect = this.onGenderSelect.bind(this)
    }

    return() {
        window.location = '/'
    }

    onVoterIdChange(text) {
        this.props.voterIdChanged_reg(text);
        this.setState({ VoterID:text.target.value })
    }

    onNameChange(text) {
        this.props.nameChanged(text);
        this.setState({ Name:text.target.value })
    }

    onMobileNumChange(text) {
        this.props.mobileNumChanged(text);
        this.setState({ MobileNo:text.target.value })
    }

    onGenderSelect(text) {
        this.props.genderSelect(text)
        // this.setState({ Gender:text })
    }

    onButtonPress(event) {
        const { voterId, name, mobile_no, gender, pic } = this.props;

        this.props.register({ voterId, name, mobile_no, gender, pic })
        event.preventDefault()
        // this.props.register({ voterId, name, mobile_no, gender });
        Election.methods.register(this.state.VoterID).call().then((res) => {
            Election.methods.assignCandidateToConstituency(this.state.VoterID, this.state.MobileNo).call().then((res) => {
                Election.methods.getCandidateByConstituency(this.state.MobileNo).call().then((res) => {
                    console.log(res)
                })
            })
        }) 
    }

    render() {
        return(
            <div className='registrationform'>
                <div className='registrationform--back' onClick={this.return}>
                    <img className='registrationform--back-image' src={back} alt='back'/>
                    <span className='registrationform--back-text'>Back to Main Menu</span>
                </div>
                <div className='registrationform--form'>
                    <form onSubmit={ this.onButtonPress.bind(this) }>
                        <div className='registrationform--heading-name'>Name:</div>
                        <input 
                            className='registrationform--input-name' 
                            type='text' 
                            onChangeText={ this.onNameChange.bind(this) }
                            required/>
                        <div className='registrationform--heading-voterid'>VoterID:</div>
                        <input 
                            className='registrationform--input-voterid' 
                            type='text' 
                            onChangeText={ this.onVoterIdChange.bind(this) }
                            required/>
                        <div className='registrationform--heading-gender'>Gender:</div>
                        <input 
                            className='registrationform--input-gender_male' 
                            type='radio'
                            name='gender' 
                            checked= {this.onGenderSelect('Male')}
                            required/><span className='registrationform--heading-gender_male'>Male</span>
                        <input 
                            className='registrationform--input-gender_female' 
                            type='radio'
                            name='gender'
                            checked= {this.onGenderSelect('Female')}
                            required/><span className='registrationform--heading-gender_female'>Female</span>
                        <input 
                            className='registrationform--input-gender_other' 
                            type='radio'
                            name='gender' 
                            checked= {this.onGenderSelect('other')}
                            required/><span className='registrationform--heading-gender_other'>Other</span>
                        <div className='registrationform--heading-mobile'>Mobile Number:</div>
                        <input 
                            className='registrationform--input-mobile' 
                            type='text' 
                            onChangeText={ this.onVoterIdChange.bind(this) }
                            required/>
                        <button 
                            className='registrationform--button' 
                            type='submit'>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ register }) => {
    const { name , voterId, mobile_no, gender ,pic } = register;
  
    return { name , voterId, mobile_no, gender,pic };
  };
  
  export default connect(mapStateToProps, {
    voterIdChanged_reg, mobileNumChanged, nameChanged, register, genderSelect
  })(RegistrationForm);
