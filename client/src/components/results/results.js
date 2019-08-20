import React, { Component } from 'react'
import CandidateResult from './candidateresult'
import result from '../../assets/no-resultfound.jpg'
import '../../styles/main.scss'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            declared:true
        }

        this.hidesignout = this.hidesignout.bind(this)
    }

    hidesignout() {
        this.props.hidesignout()
    }

    render() {
        if (!this.state.declared) {
            return(
                <div className='results' onClick={this.hidesignout}>
                    <div className='results--heading'>
                        Results
                    </div>
                    <div className='results--description'>
                        <div className='results--description-data'>The results have not been declared yet.<br/>Wait for the admin to declare the results before you see them.</div>
                        <img className='results--description-image' src={result} alt='no-result' />
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className='results' onClick={this.hidesignout}>
                    <div className='results--heading'>
                        Results: 
                    </div>
                    <div className='results--panel1'>
                        <div className='results--panel-data'>
                            <div className='results--data-voters'>Number of voters: 20000</div>
                            <div className='results--data-candidates'>Number of candidates: 10</div>
                            <div className='results--data-votes'>Total votes cast: 17523</div>
                            <div className='results--data-females'>Number of female voters: 8563</div>
                        </div>
                    </div>
                    <div className='results--panel2'>
                        <div className='results--candidates-data'>
                            <CandidateResult name='Subham Sahoo' />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Results
