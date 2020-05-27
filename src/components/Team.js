import React, { useState, useEffect } from 'react';

import Member from './Member';
import '../styles/Member.css';

const Team = () => {

    const [ members, setMembers ] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(response => response.json())
        .then(data => setMembers(data))
    }, [])

    return (
        <div className="team-members-container">
            {members.map(( member, index) => <Member key={`red-${index}`} member={member}/>)}
        </div>
    )
}

export default Team;