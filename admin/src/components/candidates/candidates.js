import React, { Component } from 'react'
import registerCandidateApi from '../../api/registerCandidateApi'
import { loadWeb3, loadBlockChain } from '../../web3/web3-config'
import '../../styles/main.scss'

class Candidates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            CandidateId: '',
            ConstituencyId: '',
            AdminId: '',
            election: ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async componentDidMount() {
        this.setState({ "AdminId": localStorage.getItem("admin_id") })
        await loadWeb3();
        const blockchain = await loadBlockChain()
        this.setState({ election: blockchain['election'] })
    }

    handleClick() {
        this.props.hidesignout()
    }

    onChangeName(event) {
        this.setState({ Name: event.target.value })
    }

    onChangeId(event) {
        this.setState({ CandidateId: event.target.value })
    }

    onChangeConstituencyId(event) {
        this.setState({ ConstituencyId: event.target.value })
    }

    async onSubmit(event) {
        event.preventDefault();
        await registerCandidateApi(parseInt(this.state.CandidateId), this.state.Name, parseInt(this.state.ConstituencyId)).then((res) => {
            this.state.election.methods.registerCandidate(parseInt(this.state.CandidateId), parseInt(this.state.AdminId)).send({ from: localStorage.getItem("admin-account") }).then((res) => {
                this.state.election.methods.assignCandidateToConstituency(parseInt(this.state.CandidateId), parseInt(this.state.ConstituencyId), parseInt(this.state.AdminId)).send({ from: localStorage.getItem("admin-account") }).then((res) => {
                    window.alert('Registration successful of ' + this.state.Name)
                    document.location.reload()
                })
            })
        })
    }

    render() {
        return (
            <div className='candidates' onClick={this.handleClick}>
                <div className='candidates--heading'>Candidate Registration</div>
                <form onSubmit={this.onSubmit}>
                    <div className='candidates--heading-name'>Name</div>
                    <input className='candidates--input-name' name='name' onChange={this.onChangeName.bind(this)} required />
                    <div className='candidates--heading-id'>Candidate ID</div>
                    <input className='candidates--input-id' name='id' onChange={this.onChangeId.bind(this)} required />
                    <div className='candidates--heading-constituency'>Constituency ID</div>
                    <input className='candidates--input-constituency' name='constituency' onChange={this.onChangeConstituencyId.bind(this)} required />
                    <button className='candidates--submit' type='submit'>Register</button>
                </form>
            </div>
        )
    }
}

export default Candidates
