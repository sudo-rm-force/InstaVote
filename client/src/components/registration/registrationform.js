import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { loadBlockChain } from '../../web3/web3-config'
import registerApi from '../../api/registerApi'
import loader from '../common/loader'
import back from '../../assets/back.svg'
import '../../styles/main.scss'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            Name: '',
            VoterID: '',
            Gender: '',
            MobileNo: '',
            FaceID: props.faceID
        }
    }

    async componentDidMount() {
        await loadBlockChain;
        this.setState({ loading:false })
    }

    onVoterIdChange(event) {
        //this.props.voterIdChanged_reg(event);
        this.setState({ VoterID:event.target.value })
    }

    onNameChange(event) {
        //this.props.nameChanged(text);
        this.setState({ Name:event.target.value })
    }

    onMobileNumChange(event) {
        //this.props.mobileNumChanged(text);
        this.setState({ MobileNo:event.target.value })
    }

    onGenderSelect(event) {
        //this.props.genderSelect(text)
        this.setState({ Gender:event.target.value })
    }

    onButtonPress(event) {
        event.preventDefault()
        registerApi(this.state.VoterID, this.state.Gender, this.state.MobileNo, this.state.FaceID, this.props.faceName).then((res) => {
            window.alert('Registration complete for '+this.state.Name)
            window.location = '/'
        })

    }

    componentWillReceiveProps(props) {
        if(props.faceID !== this.state.FaceID) {
            this.setState({ FaceID:props.faceID })
        }
    }

    render() {
        if(this.state.loading)
            return loader()
        else 
            return(
                <div className='registrationform'>
                    <Link to='/'>
                        <div className='registrationform--back'>
                            <img className='registrationform--back-image' src={back} alt='back'/>
                            <span className='registrationform--back-text'>Back to Home</span>
                        </div>
                    </Link>
                    <div className='registrationform--form'>
                        <form onSubmit={ this.onButtonPress.bind(this) }>
                            <div className='registrationform--heading-name'>Name:</div>
                            <input 
                                className='registrationform--input-name' 
                                type='text' 
                                onChange={ this.onNameChange.bind(this) }
                                required/>
                            <div className='registrationform--heading-voterid'>VoterID:</div>
                            <input 
                                className='registrationform--input-voterid' 
                                type='number' 
                                onChange={ this.onVoterIdChange.bind(this) }
                                required/>
                            <div className='registrationform--heading-gender'>Gender:</div>
                            <input 
                                className='registrationform--input-gender_male' 
                                type='radio'
                                name='gender'
                                value='Male'
                                onChange= {this.onGenderSelect.bind(this)}
                                required/><span className='registrationform--heading-gender_male'>Male</span>
                            <input 
                                className='registrationform--input-gender_female' 
                                type='radio'
                                name='gender'
                                value='Female'
                                onChange= {this.onGenderSelect.bind(this)}
                                required/><span className='registrationform--heading-gender_female'>Female</span>
                            <input 
                                className='registrationform--input-gender_other' 
                                type='radio'
                                name='gender' 
                                value='Other'
                                onChange= {this.onGenderSelect.bind(this)}
                                required/><span className='registrationform--heading-gender_other'>Other</span>
                            <div className='registrationform--heading-mobile'>Mobile Number:</div>
                            <input 
                                className='registrationform--input-mobile' 
                                type='number'
                                onChange={ this.onMobileNumChange.bind(this) }
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

export default RegistrationForm
