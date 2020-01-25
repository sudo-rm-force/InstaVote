import React, { Component } from 'react'

class ConstituencyPanel extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.handleClick(this.props.name[0], this.props.name[1].constituencyId)
    }

    render() {
        return(
            <div className='constituencypanel'>
                <div className='constituencypanel--heading'>{this.props.name[0]}</div>
                <div className='constituencypanel--id'>{this.props.name[1].constituencyId}</div>
                <button className='constituencypanel--start' type='button' onClick={this.handleClick}>Start</button>
            </div>
        )
    }
}

export default ConstituencyPanel
