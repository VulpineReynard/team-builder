import React from 'react';

export default function TeamMember({editMember, memberToEdit, setMemberToEdit, member}) {
  return(
    <div className="member-card">
      <h3>{member.name}</h3>
      <p>Email: {member.email}</p>
      <p>Role: {member.role}</p>
      <button onClick={()=> {
        setMemberToEdit(member);
        console.log(memberToEdit);
        }}
        >Edit</button>
    </div>
  );
}