import React, { Component } from 'react'
import HeaderLanding from '../components/landing/headerlanding'
import Login from '../components/landing/login'

class Landing extends Component {
    render() {
        return(
            <div>
                <HeaderLanding />
                <Login />
            </div>
        )
    }
}

export default Landing
