import React, { Component } from 'react'
import SidePanel from './sidepanel'
import '../../styles/main.scss'
import {loadWeb3, loadBlockChain} from './../../web3/web3-config'
import constituencies from '../../constituency.json'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'Candidates',
            AdminId: '',
            election: '',
            registered: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.hidesignout = this.hidesignout.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentWillMount() {
        this.setState({ active:this.props.active })
    }

    async componentDidMount() {
        this.setState({ "AdminId": localStorage.getItem("admin_id") })
        await loadWeb3();
        const blockchain = await loadBlockChain()
        this.setState({ election: blockchain['election']})
        for(let i in constituencies) {
            const constituencyTest = await blockchain['election'].methods.idToConstituency(constituencies[i].constituencyId).call()
            if(constituencyTest[0] !== '0')
                this.setState({ registered:true })
            else
                this.setState({ registered:false })
        }
    }

    handleClick(activeName) {
        this.props.handleChange(activeName)
    }

    async onClick() {
        let constituencyIds = [];
        for(let i in constituencies) {
            constituencyIds.push(constituencies[i].constituencyId);
        }
        await this.state.election.methods.registerConstituencies(constituencyIds, localStorage.getItem('admin_id')).send({ from:localStorage.getItem('admin-account') });
        this.setState({ registered:true })
    }

    hidesignout() {
        this.props.hidesignout()
    }

    render() {
        return (
            <div className='sidebar' onClick={this.hidesignout}>
                <div className='sidebar--panel'>
                    <SidePanel name='Candidates' active={this.state.active} handleClick={this.handleClick}/>
                    <SidePanel name='Voters' active={this.state.active} handleClick={this.handleClick}/>
                    <SidePanel name='Constituency' active={this.state.active} handleClick={this.handleClick}/>
                    <SidePanel name='Result' active={this.state.active} handleClick={this.handleClick}/>
                    <button className='constituency--submit' type='submit' style={{ display: this.state.registered ? 'none' : 'block' }} onClick={this.onClick}>Register Constituencies</button>
                </div>
            </div>
        )
    }
}

export default Sidebar
