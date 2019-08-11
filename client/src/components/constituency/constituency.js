import React, { Component } from 'react'
import '../../styles/main.scss'

class Constituency extends Component {
    constructor(props) {
        super(props);
        this.hidesignout = this.hidesignout.bind(this)
    }

    hidesignout() {
        this.props.hidesignout()
    }

    render() {
        return(
            <div className='constituency' onClick={this.hidesignout}>
                <div className='constituency--heading'>
                    Constituency: 
                </div>
                <div className='constituency--panel1'>
                    <div className='constituency--panel-data'></div>
                </div>
                <div className='constituency--panel2'>
                    <div className='constituency--panel-data'></div>
                </div>
            </div>
        )
    }
}

export default Constituency
