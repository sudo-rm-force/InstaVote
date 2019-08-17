import React, { Component } from 'react'
import SidePanel from './sidepanel'
import '../../styles/main.scss'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'Candidates'
        }

        this.handleClick = this.handleClick.bind(this);
        this.hidesignout = this.hidesignout.bind(this)
    }

    componentWillMount() {
        this.setState({ active:this.props.active })
    }

    handleClick(activeName) {
        this.props.handleChange(activeName)
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
                </div>
            </div>
        )
    }
}

export default Sidebar
