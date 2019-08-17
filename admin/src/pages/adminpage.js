import React, { Component,Fragment } from 'react'
import Header from '../components/header/header'
import Sidebar from '../components/sidebar/sidebar'

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'Candidates',
            signout: false
        }

        this.panel = this.panel.bind(this)
        this.signout = this.signout.bind(this)
        this.hidesignout = this.hidesignout.bind(this)
    }

    componentDidMount() {
        const route = this.props.match.params
    }

    panel(route) {
        this.setState({route:route});
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

        if(this.state.route === 'Candidates') {
            return (
                <div>
                    <Header signout={this.state.signout} showsignout={this.signout} handleChange={this.panel}/>
                    <Sidebar hidesignout={this.hidesignout} handleChange={this.panel}/>
                    {/* <Profile hidesignout={this.hidesignout}/> */}
                </div>
            )
        }

        else if(this.state.route === 'Voters') {
            return (
                <div>
                    <Header signout={this.state.signout} showsignout={this.signout} handleChange={this.panel}/>
                    <Sidebar hidesignout={this.hidesignout} handleChange={this.panel}/>
                    {/* <Vote hidesignout={this.hidesignout}/> */}
                </div>
            )
        }

        else if(this.state.route === 'Constituency') {
            return (
                <div>
                    <Header signout={this.state.signout} showsignout={this.signout} handleChange={this.panel}/>
                    <Sidebar hidesignout={this.hidesignout} handleChange={this.panel}/>
                    {/* <Candidate hidesignout={this.hidesignout}/> */}
                </div>
            )
        }

        else if(this.state.route === 'Result') {
            return (
                <div>
                    <Header signout={this.state.signout} showsignout={this.signout} handleChange={this.panel}/>
                    <Sidebar hidesignout={this.hidesignout} handleChange={this.panel}/>
                    {/* <Constituency hidesignout={this.hidesignout}/> */}
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
