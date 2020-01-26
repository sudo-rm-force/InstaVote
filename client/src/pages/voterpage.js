import React, { Component,Fragment } from 'react';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import Profile from '../components/profile/profile';
import Vote from '../components/vote/vote';
import Candidate from '../components/candidate/candidate';
import Results from '../components/results/results';

class VoterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'profile',
            signout: false,
            election: props.election
        }

        this.panel = this.panel.bind(this)
        this.signout = this.signout.bind(this)
        this.hidesignout = this.hidesignout.bind(this)
    }

    componentDidMount() {
        if(!localStorage.getItem('voterid'))
        window.location = '/'
        const route = this.props.match.params.route !== undefined ? this.props.match.params.route.toLowerCase() : this.props.match.params.route
        this.setState({ route })
    }

    panel(route) {
        window.location = '/'+this.props.match.params.id+'/'+route.toLowerCase()
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
        if(this.state.route === 'profile' || this.state.route === undefined) {
            return (
                <div>
                    <Header signout={this.state.signout} showsignout={this.signout} handleChange={this.panel}/>
                    <Sidebar hidesignout={this.hidesignout} handleChange={this.panel} active={this.props.match.params.route}/>
                    <Profile state={this.props.state} hidesignout={this.hidesignout} id={this.props.match.params.id}/>
                </div>
            )
        }

        else if(this.state.route === 'vote') {
            return (
                <div>
                    <Header signout={this.state.signout} showsignout={this.signout} handleChange={this.panel}/>
                    <Sidebar hidesignout={this.hidesignout} handleChange={this.panel}/>
                    <Vote hidesignout={this.hidesignout} id={this.props.match.params.id} election={this.state.election}/>
                </div>
            )
        }

        else if(this.state.route === 'candidates') {
            return (
                <div>
                    <Header signout={this.state.signout} showsignout={this.signout} handleChange={this.panel}/>
                    <Sidebar hidesignout={this.hidesignout} handleChange={this.panel}/>
                    <Candidate hidesignout={this.hidesignout} id={this.props.match.params.id}/>
                </div>
            )
        }

        else if(this.state.route === 'results') {
            return (
                <div>
                    <Header signout={this.state.signout} showsignout={this.signout} handleChange={this.panel}/>
                    <Sidebar hidesignout={this.hidesignout} handleChange={this.panel}/>
                    <Results hidesignout={this.hidesignout} id={this.props.match.params.id} election={this.state.election}/>
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
