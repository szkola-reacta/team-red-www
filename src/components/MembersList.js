import React from 'react';


const MemberList = ({ membersInfo }) => {
    return (
        <>
            <image src={membersInfo.image} />
            <div className="membersList">
                Name: {membersInfo.name}
                Description: {membersInfo.description}
            </div>
        </>
    )
}

export default MemberList;