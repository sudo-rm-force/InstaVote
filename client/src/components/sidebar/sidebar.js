import React, { Component } from 'react'
import SidePanel from './sidepanel'
import '../../styles/main.scss'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'Profile'
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(activeName) {
        this.setState({ active:activeName })
    }

    render() {
        return (
            <div className='sidebar'>
                <div className='sidebar--panel'>
                    <SidePanel name='Profile' active={this.state.active} handleClick={this.handleClick}/>
                    <SidePanel name='Vote' active={this.state.active} handleClick={this.handleClick}/>
                    <SidePanel name='Candidates' active={this.state.active} handleClick={this.handleClick}/>
                    <SidePanel name='Constituency' active={this.state.active} handleClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}

export default Sidebar
