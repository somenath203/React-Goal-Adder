import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <b>Name:-</b> <i>{user.name}</i> <br/> <b>Goal:-</b> <i>{user.goal}</i> <br /> <b>Deadline to achieve your Goal:-</b> <i>{user.date}</i>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
