import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredGoal, setEnteredGoal] = useState('');
  const [error, setError] = useState();

  const addUserhandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredGoal.trim().length === 0
    ) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and goal.',
      });
      return;
    }

    // here, we are forwading the data passed in the two input fields via props.onAddUser() in App.jsx.
    props.onAddUser(enteredUserName, enteredGoal);
    setEnteredUserName('');
    setEnteredGoal('');
  };

  const usernameChangehandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const goalChangehandler = (event) => {
    setEnteredGoal(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserhandler}>
          <label htmlFor="username">Full Name</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={usernameChangehandler}
          />
          <label htmlFor="goal">Your Goal</label>
          <input
            id="goal"
            type="text"
            value={enteredGoal}
            onChange={goalChangehandler}
          />
          <Button type="submit">
            Add Goal
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
