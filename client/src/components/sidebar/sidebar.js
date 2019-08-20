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
        this.hidesignout = this.hidesignout.bind(this)
    }

    handleClick(activeName) {
        this.props.handleChange(activeName)
    }

    hidesignout() {
        this.props.hidesignout()
    }

    componentDidMount() {
        this.setState({ active:this.props.active })
    }

    render() {
        return (
            <div className='sidebar' onClick={this.hidesignout}>
                <div className='sidebar--panel'>
                    <SidePanel name='Profile' active={this.state.active} handleClick={this.handleClick}/>
                    <SidePanel name='Vote' active={this.state.active} handleClick={this.handleClick}/>
                    <SidePanel name='Candidates' active={this.state.active} handleClick={this.handleClick}/>
                    <SidePanel name='Results' active={this.state.active} handleClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}

export default Sidebar
