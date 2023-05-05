import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGOUT_USER } from '../mutations';
import '../../src/App.css'

const Nav = () => {
  const location = useLocation();
  const [logoutUser] = useMutation(LOGOUT_USER);

  const handleLogout = () => {
    // Remove the JWT token from local storage
    localStorage.removeItem('id_token');
    // Execute the logout mutation
    logoutUser();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">My App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/" className="nav-link">Dashboard</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/mypage' ? 'active' : ''}`}>
              <Link to="/mypage" className="nav-link">My Page</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/timer' ? 'active' : ''}`}>
              <Link to="/timer" className="nav-link">Timer</Link>
            </li>
          </ul>
          <button onClick={handleLogout} className="btn btn-outline-primary">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

