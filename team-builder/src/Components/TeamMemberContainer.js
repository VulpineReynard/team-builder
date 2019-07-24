import React from 'react';
import TeamMember from './TeamMember';

export default function TeamMemberContainer({teamList}) {
  return (
    <div className="member-container">
      {teamList[0]}
    {/* {
      teamList.map((member, index) => {
        console.log(teamList);
        return <TeamMember member={member} key={index}/>
      })
    } */}
    </div>
  );
}