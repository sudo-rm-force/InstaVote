import React, { Component } from 'react'
import '../../styles/main.scss'

class Candidates extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.hidesignout()
    }

    render() {
        return(
            <div className='candidates' onClick={this.handleClick}>
                <div className='candidates--heading'>Candidate Registration</div>
                <form>
                    <div className='candidates--heading-name'>Name</div>
                    <input className='candidates--input-name' name='name' required/>
                    <div className='candidates--heading-id'>Candidate ID</div>
                    <input className='candidates--input-id' name='id' required/>
                    <div className='candidates--heading-constituency'>Constituency ID</div>
                    <input className='candidates--input-constituency' name='constituency' required/>
                    <button className='candidates--submit' type='submit'>Register</button>
                </form>
            </div>
        )
    }
}

export default Candidates
