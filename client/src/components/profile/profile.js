import React, { Component } from 'react'
import '../../styles/main.scss'

class Profile extends Component {
    render() {
        return(
            <div className='profile'>
                <div className='profile--photo'>
                    <img src='' alt='voter' />
                </div>
                <div className='profile--heading-name'>
                    Name:
                </div>
                <div className='profile--name'>
                    Ayan Choudhary
                </div>
                <div className='profile--heading-voterid'>
                    VoterID:
                </div>
                <div className='profile--voterid'>
                    1452365568
                </div>
                <div className='profile--heading-constituencyid'>
                    ConstituencyID:
                </div>
                <div className='profile--constituencyid'>
                    64654s4dsd4f6s5
                </div>
            </div>
        )
    }
}

export default Profile
