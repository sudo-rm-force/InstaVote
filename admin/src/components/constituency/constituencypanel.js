import React, { Component } from 'react'

class ConstituencyPanel extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.handleClick()
    }

    render() {
        return(
            <div className='constituencypanel'>
                <div className='constituencypanel--heading'>Roorkee</div>
                <div className='constituencypanel--id'>1136451132156</div>
                <button className='constituencypanel--start' type='button' onClick={this.handleClick}>Start</button>
            </div>
        )
    }
}

export default ConstituencyPanel
