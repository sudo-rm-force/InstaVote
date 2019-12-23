import React, { Component } from 'react'
import '../../global'
import '../../styles/main.scss'
import userApi from '../../api/userApi';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            voter_id: '',
            constituency_id: ''
        }

        this.hidesignout = this.hidesignout.bind(this)
    }

    hidesignout() {
        this.props.hidesignout()
    }

    componentDidMount() {
        userApi(this.props.id).then((res) => {
            console.log(res)
            // const voter = res.data[0]
            // console.log(voter)
            // this.setState({
            //     name:voter.name,
            //     voter_id:voter.voter_id,
            //     constituency_id:voter.constituency_id
            // })
        })
    }

    render() {
        return(
            <div className='profile' onClick={this.hidesignout}>
                <div className='profile--photo'>
                    <img className='profile--photo-image' src={localStorage.getItem('image')} alt='voter' />
                </div>
                <div className='profile--heading-name'>
                    Name:
                </div>
                <div className='profile--name'>
                    {localStorage.getItem('name')}
                </div>
                <div className='profile--heading-voterid'>
                    VoterID:
                </div>
                <div className='profile--voterid'>
                    {localStorage.getItem('voterid')}
                </div>
                <div className='profile--heading-constituencyid'>
                    ConstituencyID:
                </div>
                <div className='profile--constituencyid'>
                    {localStorage.getItem('constituencyid')}
                </div>
            </div>
        )
    }
}

export default Profile
