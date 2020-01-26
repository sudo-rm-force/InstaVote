import React, { Component } from 'react';
import registerAdminApi from '../api/registerAdminApi'
import '../styles/main.scss'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            election: props.election
        }
        this.register = this.register.bind(this)
    }
    
    async register(event) {
        event.preventDefault();
        const deployer = localStorage.getItem('admin-account')
        const id = event.target['id'].value;
        const email = event.target['mail'].value;
        await registerAdminApi(id, email)
        await this.state.election.methods.registerAdmin(id).send({ from:deployer })
    }

    render() {
        return (
            <div className='register'>
                <form onSubmit={this.register}>
                    <div className='register--id'><input type='number' placeholder='Admin Id' name='id' required/></div>
                    <div className='register--email'><input type='email' placeholder='E-mail' name='mail' required/></div>
                    <div className='register--button'><button type='submit'>Submit</button></div>
                </form>
            </div>
        )
    }
}

export default Register;