import React from 'react';

import MembersList from './MembersList';
import '../css/content.css';
import '../css/members.css';

class Content extends React.Component {

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

}


export default Content;
