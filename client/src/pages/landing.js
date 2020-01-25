import React, { Component } from 'react'
import HeaderLanding from '../components/landing/headerlanding'
import Login from '../components/landing/login'
import Carousel from '../components/landing/carousel'

class Landing extends Component {
    render() {
        return(
            <div>
                <HeaderLanding />
                <Carousel />
                <Login loading = { this.props.loading } election={this.props.election}/>
            </div>
        )
    }
}

export default Landing
