import React from 'react';

import '../styles/Member.css';

const Member = ({ member }) => {
    return (
        <>
            <div className="members-list">
                <img src ={member.image} alt = 'member' />
                <h2 className="member-name">{member.name}</h2>
                <p className="member-description">{member.description}</p>
                <a className="github-link" href={member.githubURL}><img src='#' alt="github icon"/></a>
                <a className="linkedin-link" href={member.linkedIN}><img src='#' alt="linkedin icon"/></a>
            </div>
        </>
    )
}

export default Member;