import React, { Component,Fragment } from 'react'
import Header from '../components/header/header'
import Sidebar from '../components/sidebar/sidebar'
import Candidates from '../components/candidates/candidates'
import Voters from '../components/voters/voters'
import Constituency from '../components/constituency/constituency'
import Results from '../components/results/results'

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            election: props.election,
            route: 'Candidates',
            signout: false
        }

        this.panel = this.panel.bind(this)
        this.signout = this.signout.bind(this)
        this.hidesignout = this.hidesignout.bind(this)
    }

    componentDidMount() {
        this.setState({ route:this.props.match.params.route })
    }

    panel(route) {
        window.location = '/'+this.props.match.params.id+'/'+route;
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

        if(this.props.match.params.route === 'Candidates') {
            return (
                <div>
                    <Header signout={this.state.signout} showsignout={this.signout} handleChange={this.panel}/>
                    <Sidebar hidesignout={this.hidesignout} handleChange={this.panel} active={this.props.match.params.route}/>
                    <Candidates hidesignout={this.hidesignout} onLoading={this.props.onLoading} offLoading={this.props.offLoading}/>
                </div>
            )
        }

        else if(this.props.match.params.route === 'Voters') {
            return (
                <div>
                    <Header signout={this.state.signout} showsignout={this.signout} handleChange={this.panel}/>
                    <Sidebar hidesignout={this.hidesignout} handleChange={this.panel} active={this.props.match.params.route}/>
                    <Voters hidesignout={this.hidesignout} election={this.state.election} onLoading={this.props.onLoading} offLoading={this.props.offLoading}/>
                </div>
            )
        }

        else if(this.props.match.params.route === 'Constituency') {
            return (
                <div>
                    <Header signout={this.state.signout} showsignout={this.signout} handleChange={this.panel}/>
                    <Sidebar hidesignout={this.hidesignout} handleChange={this.panel} active={this.props.match.params.route}/>
                    <Constituency hidesignout={this.hidesignout} onLoading={this.props.onLoading} offLoading={this.props.offLoading}/>
                </div>
            )
        }

        else if(this.props.match.params.route === 'Result') {
            return (
                <div>
                    <Header signout={this.state.signout} showsignout={this.signout} handleChange={this.panel}/>
                    <Sidebar hidesignout={this.hidesignout} handleChange={this.panel} active={this.props.match.params.route}/>
                    <Results hidesignout={this.hidesignout} election={this.state.election} onLoading={this.props.onLoading} offLoading={this.props.offLoading}/>
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

export default AdminPage
