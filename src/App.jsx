import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uGoal) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: uName, goal: uGoal, id: Math.random().toString()}]
    })
  }
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
