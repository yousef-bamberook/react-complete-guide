import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredage = ageInputRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredage.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non empty values).',
      });
      return;
    }
    if (+enteredage < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredage);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
