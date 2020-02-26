import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Card from './Card'
function App() {
  let [members, setMembers] = useState([
  {
    name: 'Dylan',
    email: 'Dylan@collins.com',
    role: 'Front-end developer',
    id: Date.now(),
  }
]);
  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role,
      id: Date.now
    }
    setMembers([...members, newMember])
  }
  return (
    <div className="App">
    <h1>Team Members</h1>
     <Form addNewMember={addNewMember}/>
     <Card member={members}/> 
    </div>
  );
}

export default App;
