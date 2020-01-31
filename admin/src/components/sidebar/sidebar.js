import React, { Component } from 'react'
import SidePanel from './sidepanel'
import '../../styles/main.scss'
import {loadWeb3, loadBlockChain} from './../../web3/web3-config'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'Candidates',
            AdminId: '',
            election: ''
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
        this.setState({ election: blockchain['election'] })
    }

    handleClick(activeName) {
        this.props.handleChange(activeName)
    }

    onClick() {
        console.log(this.state.election.methods)
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
                    <button className='constituency--submit' type='submit' onClick={this.onClick}>Add Constituency</button>
                </div>
            </div>
        )
    }
}

export default Sidebar
