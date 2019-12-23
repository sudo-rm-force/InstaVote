import React, { Component } from 'react'
import SidePanel from './sidepanel'
import '../../styles/main.scss'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'profile'
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
                    <SidePanel name='profile' active={this.state.active} handleClick={this.handleClick}/>
                    <SidePanel name='vote' active={this.state.active} handleClick={this.handleClick}/>
                    <SidePanel name='candidates' active={this.state.active} handleClick={this.handleClick}/>
                    <SidePanel name='results' active={this.state.active} handleClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}

export default Sidebar
