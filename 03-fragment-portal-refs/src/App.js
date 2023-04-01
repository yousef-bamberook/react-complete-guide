import React, { Fragment, useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersLists';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userAge) => {
    setUsersList((pervUsersList) => {
      return [
        ...pervUsersList,
        { id: Math.random().toString(), name: username, age: userAge },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
