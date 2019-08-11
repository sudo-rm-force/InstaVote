import React, { Component,Fragment } from 'react'
import Header from '../components/header/header'
import Sidebar from '../components/sidebar/sidebar'
import Profile from '../components/profile/profile'
import Vote from '../components/vote/vote'

class VoterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'Profile'
        }

        this.panel = this.panel.bind(this)
    }

    panel(route) {
        this.setState({route:route});
    }

    render() {

        if(this.state.route === 'Profile') {
            return (
                <div>
                    <Header />
                    <Sidebar handleChange={this.panel}/>
                    <Profile />
                </div>
            )
        }

        else if(this.state.route === 'Vote') {
            return (
                <div>
                    <Header />
                    <Sidebar handleChange={this.panel}/>
                    <Vote />
                </div>
            )
        }

        else {
            return(
                <Fragment />
            )
        }
    }
}

export default VoterPage
