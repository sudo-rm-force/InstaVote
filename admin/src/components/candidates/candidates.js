import React, { Component } from 'react'
import registerCandidateApi from '../../api/registerCandidateApi'
import { loadWeb3, loadBlockChain } from '../../web3/web3-config'
import '../../styles/main.scss'
import constituencies from '../../constituency.json'

class Candidates extends Component {
    constructor(props) {
        super(props);
        this.list = []
        this.state = {
            Name: '',
            CandidateId: '',
            ConstituencyId: '',
            AdminId: '',
            Party: '',
            election: ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async componentDidMount() {
        for(var i in constituencies)
            this.list.push([i, constituencies[i]])
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

    onChangeParty(event) {
        this.setState({ Party: event.target.value })
    }

    onChangeConstituencyId(event) {
        const id = constituencies[event.target.value].constituencyId
        this.setState({ ConstituencyId: id })
    }

    async onSubmit(event) {
        event.preventDefault();
        await registerCandidateApi(parseInt(this.state.CandidateId), this.state.Name, this.state.Party, parseInt(this.state.ConstituencyId)).then((res) => {
            this.state.election.methods.assignCandidateToConstituency(parseInt(this.state.CandidateId), parseInt(this.state.ConstituencyId), parseInt(this.state.AdminId)).send({ from: localStorage.getItem("admin-account") }).then((res) => {
                window.alert('Registration successful of ' + this.state.Name)
                document.location.reload()
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
                    <input className='candidates--input-id' type='number' name='id' onChange={this.onChangeId.bind(this)} required />
                    <div className='candidates--heading-party'>Party</div>
                    <input className='candidates--input-party' name='party' onChange={this.onChangeParty.bind(this)} required />
                    <div className='candidates--heading-constituency'>Constituency</div>
                    <input className='candidates--input-constituency' list="constituency" name='constituency' onChange={this.onChangeConstituencyId.bind(this)} required />
                    <datalist id="constituency">
                        {this.list.map((places) => {
                            return <option key={places[1].constituencyId} value={places[0]}/>
                        })}
                    </datalist>
                    <button className='candidates--submit' type='submit'>Register</button>
                </form>
            </div>
        )
    }
}

export default Candidates
