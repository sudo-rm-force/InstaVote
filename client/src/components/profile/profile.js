import React, { Component } from 'react'
import uerApi from '../../api/userApi'
import ayan from '../../assets/ayan.jpeg'
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
                    <img className='profile--photo-image' src={ayan} alt='voter' />
                </div>
                <div className='profile--heading-name'>
                    Name:
                </div>
                <div className='profile--name'>
                    {this.state.name}Ayan Choudhary
                </div>
                <div className='profile--heading-voterid'>
                    VoterID:
                </div>
                <div className='profile--voterid'>
                    {this.state.voter_id}18117019
                </div>
                <div className='profile--heading-constituencyid'>
                    ConstituencyID:
                </div>
                <div className='profile--constituencyid'>
                    {this.state.constituency_id}5s1g36s51fg35sd1
                </div>
            </div>
        )
    }
}

export default Profile
