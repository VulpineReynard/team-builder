import React, { useState } from 'react';
import logo from './logo.svg';
import Form from './Components/Form';
import TeamMemberContainer from './Components/TeamMemberContainer';
import './App.css';

function App() {
  const [teamList, setTeamList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});

  const editMember = (member) => {
    setMemberToEdit(member);
    console.log(memberToEdit);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form setTeamList={setTeamList} teamList={teamList} />
      <TeamMemberContainer editMember={editMember} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit} teamList={teamList} />
    </div>
  );
}

export default App;
