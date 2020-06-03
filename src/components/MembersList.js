import React from 'react';
import githubIcon from '../images/github-mark.png';
import linekdinIcon from '../images/linkedin-icon.png';

const MemberList = ({ membersInfo }) => {
    return (
        <>
            <div className="members-list">
                <h2 className="member-name">{membersInfo.name}</h2>
                <p className="member-description">{membersInfo.description}</p>
                {/* <img src ={membersInfo.image} alt = 'member' /> */}
                <a className="github-link" href={membersInfo.githubURL}><img src={githubIcon} alt="github icon"/></a>
                <a className="linkedin-link" href={membersInfo.linkedIN}><img src={linekdinIcon} alt="linkedin icon"/></a>
            </div>
        </>
    )
}

export default MemberList;