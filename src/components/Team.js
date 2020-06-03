import React from 'react';

import MembersList from './MembersList';
import '../css/content.css';
import '../css/members.css';

class Team extends React.Component {

    state = {
        data: []
    }

    componentDidMount(){
        fetch('data.json')
<<<<<<< HEAD
        .then(response => response.json())
        .then(data => setMembers(data))
    }, [])

    return (
        <div id="team-members-container">
            {members.map(( member, index) => <Member key={`red-${index}`} member={member}/>)}
        </div>
    )
=======
        .then ( response => response.json())
        .then ( data => this.setState({ data }) )
    }

    render(){
        const { data } = this.state
        return (
            <main>
                <div className="app-description">
                    <h2>About App</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget libero nunc. Vestibulum sit amet tempor risus. Nulla quis odio.</p>
                </div>
                <div className="members">
                    <h2>Team Red members:</h2>
                    {data.map(member => <MembersList membersInfo={member} key = {member.name} /> )}
                </div>
            </main>
        )
    }

>>>>>>> master
}


export default Team;
