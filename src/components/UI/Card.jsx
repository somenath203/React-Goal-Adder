import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
  return (
    <>
      {/* accessing the whole content wrapped inside <Card></Card> in AddUser.jsx using {props.children}.*/}
      <div className={`${classes.card} ${props.className} `}>
      {/* ${props.className} is coming from AddUser.jsx via props. */}
        {props.children}
      </div>
    </>
  );
};

export default Card;
