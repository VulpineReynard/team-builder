import React, { useState } from 'react';

export default function Form({setTeamList, teamList}) {
  const [teamMember, setTeamMember] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    teamList.push(teamMember);
    setTeamList(teamList);
    setTeamMember({ name: "", email: "", role: "" });
    console.log("TeamList: ", teamList);
  }
  const handleChange = event => {
    const newTeamMember = {...teamMember, [event.target.name]: event.target.value}
    setTeamMember(newTeamMember);
  }

  return (
    <form onSubmit={handleSubmit} className="members-form">
      <label htmlFor="name">
        Name: {" "}
        <input 
        required
        type="text"
        id="name"
        placeholder="Name"
        onChange={event => handleChange(event)}
        name="name"
        value={teamMember.name}
        />
      </label>
      <label htmlFor="email">
        Email: {" "}
        <input 
        required
        type="email"
        id="email"
        placeholder="Email"
        onChange={event => handleChange(event)}
        name="email"
        value={teamMember.email}
        />
      </label>
      <label htmlFor="role">
        Role: {" "}
        <input 
        required
        type="text"
        id="role"
        placeholder="Role"
        onChange={event => handleChange(event)}
        name="role"
        value={teamMember.role}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}