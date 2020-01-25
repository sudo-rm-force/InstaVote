import React, { Component } from 'react'
import web3 from 'web3'
import registerVoterApi from '../../api/registerVoterApi'
import '../../styles/main.scss'

class Voters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name:'',
            VoterId:'',
            Age:'',
            ConstituencyId:'',
            election: props.election
        }
        
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.hidesignout()
    }

    onChangeName(event) {
        this.setState({Name:event.target.value})
    }

    onChangeVoterId(event) {
        this.setState({VoterId:event.target.value})
    }

    onChangeAge(event) {
        this.setState({Age:event.target.value})
    }

    onChangeConstituencyId(event) {
        this.setState({ConstituencyId:event.target.value})
    }

    async onSubmit(event) {
        event.preventDefault();
        await registerVoterApi(this.state.VoterId,this.state.Name,this.state.Age,this.state.ConstituencyId)
        await this.state.election.methods.registerVoter(this.state.VoterId,this.state.ConstituencyId, localStorage.getItem('admin_id')).send({ from:localStorage.getItem('admin-account') })
        window.alert('Registration successful of '+this.state.Name)
        document.location.reload()

    }

    render() {
        return(
            <div className='voters' onClick={this.handleClick}>
                <div className='voters--heading'>Voter Database Addition</div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className='voters--heading-name'>Name</div>
                    <input className='voters--input-name' name='name' onChange={this.onChangeName.bind(this)} required/>
                    <div className='voters--heading-id'>Voter ID</div>
                    <input className='voters--input-id' name='id' onChange={this.onChangeVoterId.bind(this)} required/>
                    <div className='voters--heading-age'>Age</div>
                    <input className='voters--input-age' name='age' onChange={this.onChangeAge.bind(this)} required/>
                    <div className='voters--heading-constituency'>Constituency ID</div>
                    <input className='voters--input-constituency' onChange={this.onChangeConstituencyId.bind(this)} name='constituency' required/>
                    <button className='voters--submit' type='submit'>Register</button>
                </form>
            </div>
        )
    }
}

export default Voters
