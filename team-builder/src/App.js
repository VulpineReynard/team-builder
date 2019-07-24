import React, { useState } from 'react';
import logo from './logo.svg';
import Form from './Components/Form';
import TeamMemberContainer from './Components/TeamMemberContainer';
import './App.css';

function App() {
  const [teamList, setTeamList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form setTeamList={setTeamList} teamList={teamList} />
      <TeamMemberContainer teamList={teamList} />
    </div>
  );
}

export default App;
