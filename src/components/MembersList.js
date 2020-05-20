import React from 'react';


const MemberList = ({ membersInfo }) => {
    return (
        <>
            
            <div className="members-list">
                Name: {membersInfo.name}
                Description: {membersInfo.description}
                <img src ={membersInfo.image} alt = 'members' />

            </div>

        </>
    )
}

export default MemberList;