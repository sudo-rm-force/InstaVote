import React, { Component } from 'react'
import '../../styles/main.scss'

class Voters extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.hidesignout()
    }

    render() {
        return(
            <div className='voters' onClick={this.handleClick}>
                <div className='voters--heading'>Voter Database Addition</div>
                <form>
                    <div className='voters--heading-name'>Name</div>
                    <input className='voters--input-name' name='name' required/>
                    <div className='voters--heading-id'>Voter ID</div>
                    <input className='voters--input-id' name='id' required/>
                    <div className='voters--heading-age'>Age</div>
                    <input className='voters--input-age' name='age' required/>
                    <div className='voters--heading-constituency'>Constituency ID</div>
                    <input className='voters--input-constituency' name='constituency' required/>
                    <button className='voters--submit' type='submit'>Register</button>
                </form>
            </div>
        )
    }
}

export default Voters
