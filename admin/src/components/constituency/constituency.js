import React, { Component, Fragment } from 'react'
import ConstituencyPanel from './constituencypanel'
import ConstituencyCard from './constituencycard'
import election from '../../web3/web3-config'
import search from '../../assets/search.svg'
import close from '../../assets/close.svg'
import '../../styles/main.scss'

class Constituency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
        }

        this.close = this.close.bind(this)
        this.start = this.start.bind(this)
        this.click = this.click.bind(this)
    }

    close() {
        this.setState({ start:false })
    }

    start() {
        this.setState({ start:true })
    }

    click() {
        this.props.hidesignout()
    }

    // componentDidMount() {
    //     election.methods.getConstituencies(this.state.AdminId).call((res) => {
    //         console.log(res)
    //     })
    // }

    render() {
        return(
            <div className='constituency' onClick={this.click}>
                <div className='constituency--heading'>Constituency</div>
                <div className='constituency--search'>
                    <input className='constituency--search-input' placeholder='Search' />
                    <img className='constituency--search-icon' src={search} alt='search' />
                </div>
                <div className='constituency--list'>
                    <ConstituencyPanel handleClick={this.start}/>
                    <ConstituencyPanel handleClick={this.start}/>
                </div>
                { this.state.start ? (<ConstituencyCard close={this.close} />) : (<Fragment />) } 
            </div>
        )
    }
}

export default Constituency
