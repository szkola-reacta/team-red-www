import React from 'react';


const MemberList = ({ membersInfo }) => {
    return (
        <>
            <img src ={membersInfo.image} alt = 'members' />
            <div className="members-list">
                Name: {membersInfo.name}
                Description: {membersInfo.description}
                {console.log(membersInfo)}
            </div>
            
        </>
    )
}

export default MemberList;