import React, { Component,Fragment } from 'react'
import Header from '../components/header/header'
import Sidebar from '../components/sidebar/sidebar'
import Profile from '../components/profile/profile'
import Vote from '../components/vote/vote'
import Candidate from '../components/candidate/candidate'
import Results from '../components/results/results';

class VoterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'Profile',
            signout: false
        }

        this.panel = this.panel.bind(this)
        this.signout = this.signout.bind(this)
        this.hidesignout = this.hidesignout.bind(this)
    }

    componentDidMount() {
        const route = this.props.match.params.route
        this.setState({ route })
    }

    panel(route) {
        window.location = '/'+this.props.match.params.id+'/'+route
    }

    signout() {
        if(!this.state.signout) {
            this.setState({ signout:true })
        }

        else {
            this.setState({ signout: false })
        }
    }

    hidesignout() {
        this.setState({ signout:false })
    }

    render() {

        if(this.state.route === 'Profile') {
            return (
                <div>
                    <Header signout={this.state.signout} showsignout={this.signout} handleChange={this.panel}/>
                    <Sidebar hidesignout={this.hidesignout} handleChange={this.panel} active={this.props.match.params.route}/>
                    <Profile state={this.props.state} hidesignout={this.hidesignout} id={this.props.match.params.id}/>
                </div>
            )
        }

        else if(this.state.route === 'Vote') {
            return (
                <div>
                    <Header signout={this.state.signout} showsignout={this.signout} handleChange={this.panel}/>
                    <Sidebar hidesignout={this.hidesignout} handleChange={this.panel}/>
                    <Vote hidesignout={this.hidesignout} id={this.props.match.params.id}/>
                </div>
            )
        }

        else if(this.state.route === 'Candidates') {
            return (
                <div>
                    <Header signout={this.state.signout} showsignout={this.signout} handleChange={this.panel}/>
                    <Sidebar hidesignout={this.hidesignout} handleChange={this.panel}/>
                    <Candidate hidesignout={this.hidesignout} id={this.props.match.params.id}/>
                </div>
            )
        }

        else if(this.state.route === 'Results') {
            return (
                <div>
                    <Header signout={this.state.signout} showsignout={this.signout} handleChange={this.panel}/>
                    <Sidebar hidesignout={this.hidesignout} handleChange={this.panel}/>
                    <Results hidesignout={this.hidesignout} id={this.props.match.params.id}/>
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
