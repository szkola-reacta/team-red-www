import React from 'react';

import MembersList from './MembersList';
import '../css/members.css';

class Team extends React.Component {

    state = {
        data: []
    }

    componentDidMount(){
        fetch('data.json')
        .then ( response => response.json())
        .then ( data => this.setState({ data }) )
    }

    render(){
        const { data } = this.state
        return (
            <main id='team'>
                <div className="members">
                    {data.map(member => <MembersList membersInfo={member} key = {member.name} /> )}
                </div>
            </main>
        )
    }

}


export default Team;
