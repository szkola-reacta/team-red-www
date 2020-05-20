import React from 'react';


const MemberList = ({ membersInfo }) => {
    return (
        <>
            <div className="members-list">
                Name: {membersInfo.name}
                Description: {membersInfo.description}
                <img src ={membersInfo.image} alt = 'members' />
                <button><a href={membersInfo.githubURL}>GIT HUB</a></button>
                <button><a href={membersInfo.linkedIN}>LinkedIN</a></button>
            </div>
        </>
    )
}

export default MemberList;