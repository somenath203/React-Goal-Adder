import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uGoal, uDate) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: uName, goal: uGoal, date:uDate, id: Math.random().toString()}]
    })
  }
  return (
    <>
    <center><h1 style={{color:'white'}}>Your Goal List</h1></center>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
      <center><footer style={{color:'white'}}>Created by Somenath Choudhury</footer></center>
    </>
  );
}

export default App;
