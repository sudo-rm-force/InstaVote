import React, { Component } from 'react';
import { loadBlockChain } from '../web3/web3-config'
import registerAdminApi from '../api/registerAdminApi'
import web3 from 'web3'
import '../styles/main.scss'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            election: ''
        }
        this.register = this.register.bind(this)
    }

    async componentWillMount() {
        const blockchain = await loadBlockChain()
        localStorage.setItem('admin-account',blockchain['accounts'])
        this.setState({ election:blockchain['election'] })
    }
    
    async register(event) {
        event.preventDefault();
        const id = event.target['id'].value;
        const email = event.target['mail'].value;
        await this.state.election.methods.registerAdmin(id).send({ from:localStorage.getItem['admin-account'] })
        // const admin = await this.state.election.methods.admins(0).call()
        // await console.log(new web3.utils.BN(admin))
        // registerAdminApi(id, email)
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