import React, { Component } from 'react'
import back from '../../assets/back.svg'
import '../../styles/main.scss'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.return = this.return.bind(this);
    }

    return() {
        window.location = '/'
    }

    render() {
        return(
            <div className='registrationform'>
                <div className='registrationform--back' onClick={this.return}>
                    <img className='registrationform--back-image' src={back} alt='back'/>
                    <span className='registrationform--back-text'>Back to Main Menu</span>
                </div>
                <div className='registrationform--form'>
                    <form>
                        <div className='registrationform--heading-name'>Name:</div>
                        <input className='registrationform--input-name' type='text' required/>
                        <div className='registrationform--heading-voterid'>VoterID:</div>
                        <input className='registrationform--input-voterid' type='text' required/>
                        <div className='registrationform--heading-gender'>Gender:</div>
                        <input className='registrationform--input-gender_male' type='radio' name='gender' required/><span className='registrationform--heading-gender_male'>Male</span>
                        <input className='registrationform--input-gender_female' type='radio' name='gender' required/><span className='registrationform--heading-gender_female'>Female</span>
                        <input className='registrationform--input-gender_other' type='radio' name='gender' required/><span className='registrationform--heading-gender_other'>Other</span>
                        <div className='registrationform--heading-mobile'>Mobile Number:</div>
                        <input className='registrationform--input-mobile' type='text' required/>
                        <button className='registrationform--button' type='submit'>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegistrationForm
