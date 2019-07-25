import React from 'react';
import TeamMember from './TeamMember';

export default function TeamMemberContainer({editMember, memberToEdit, setMemberToEdit, teamList}) {
  return (
    <div className="member-container">
    {
      teamList.map((member, index) => {
        // console.log(teamList);
        return <TeamMember editMember={editMember} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit} member={member} key={index}/>
      })
    }
    </div>
  );
}