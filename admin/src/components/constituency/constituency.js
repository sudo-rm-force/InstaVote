import React, { Component, Fragment } from 'react'
import ConstituencyPanel from './constituencypanel'
import ConstituencyCard from './constituencycard'
import search from '../../assets/search.svg'
import '../../styles/main.scss'
import contents from '../../constituency.json'

class Constituency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            active: '',
            activeId: '',
            search: '',
            election: props.election
        }

        this.list = []
        this.items = []

        this.close = this.close.bind(this)
        this.start = this.start.bind(this)
        this.click = this.click.bind(this)
    }

    close() {
        window.location.reload()
        this.setState({ start:false })
    }

    start(active, activeId) {
        this.setState({ start:true })
        this.setState({
            active:active,
            activeId:activeId
        })
    }

    click() {
        this.props.hidesignout()
        if(!this.state.search)
        this.items = this.list
        this.forceUpdate()
    }

    search(event) {
        this.setState({ search:event.target.value })
        this.items = []
        this.list.forEach(place => {
            if (place[0].toLowerCase() == event.target.value.toLowerCase())
            this.items.push(place)
        })
        if(!event.target.value)
        this.items = this.list
        this.forceUpdate()
    }

    async componentDidMount() {
        for(var i in contents) {
            var constituency = await this.state.election.methods.idToConstituency(contents[i].constituencyId).call()
            if(constituency['_duration'] == 0)
                this.list.push([i, contents[i]])
        }
        this.items = this.list;
        this.forceUpdate()
    }

    render() {
        return(
            <div className='constituency' onClick={this.click}>
                <div className='constituency--heading'>Constituency</div>
                <div className='constituency--search'>
                    <input className='constituency--search-input' placeholder='Search' onChange={this.search.bind(this)}/>
                    <img className='constituency--search-icon' src={search} alt='search' />
                </div>
                <div className='constituency--list'>
                    {this.items.map((place) => (<ConstituencyPanel key={place} name={place} handleClick={this.start}/>))}
                </div>
                { this.state.start ? (<ConstituencyCard name={this.state.active} Id={this.state.activeId} close={this.close} items={this.items} election={this.state.election}/>) : (<Fragment />) } 
            </div>
        )
    }
}

export default Constituency
