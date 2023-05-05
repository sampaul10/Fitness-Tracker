import React from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { LOGOUT_USER } from '../graphql/mutations';

const Nav = () => {
  const history = useHistory();

  const [logoutUser] = useMutation(LOGOUT_USER, {
    onCompleted() {
      localStorage.removeItem('id_token');
      history.push('/login');
    },
    onError(error) {
      console.error(error);
    },
  });

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <nav>
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/mypage">My Page</a></li>
        <li><a href="/timer">Timer</a></li>
        <li><button onClick={handleLogout}>Log out</button></li>
      </ul>
    </nav>
  );
};

export default Nav;
