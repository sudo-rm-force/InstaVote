import React, { Component } from 'react'
import vote from '../../assets/vote.svg'
import '../../styles/main.scss'

class Results extends Component {
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
    }

    click() {
        this.props.hidesignout()
    }

    render() {
        return(
            <div className='results' onClick={this.click}>
                <div className='results--heading'>Results</div>
                <div className='results--description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non aliquet elit, quis vulputate velit. Curabitur vitae risus ac eros consectetur interdum. Mauris sapien ante, porta id lobortis sed, egestas ac lectus. Proin sed nunc porta, lacinia dui id, consequat elit. Aliquam condimentum ante eu neque vulputate pharetra. Duis leo turpis, dignissim at odio vitae, cursus pellentesque nibh. Integer imperdiet mattis condimentum. Donec ornare nibh a nisi lacinia semper. Sed felis tortor, tempus ut laoreet non, hendrerit in nulla. Vivamus lobortis dictum faucibus. Nulla facilisi.</div>
                <div className='results--image'><img alt='vote' src={vote}/></div>
                <button type='button' className='results--button'>Declare Results</button>
            </div>
        )
    }
}

export default Results
