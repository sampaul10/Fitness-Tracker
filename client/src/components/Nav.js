import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Auth from "../utils/auth";
import { useMutation } from '@apollo/client';
import '../../src/App.css'

const Nav = () => {
  const location = useLocation();

  const handleLogout = () => {
    // Remove the JWT token from local storage
    localStorage.removeItem('id_token');
    // Execute the logout mutation
    Auth.logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">U-Fit</Link>
        {/* Navbar turns into menu icon in smaller page */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            const navbarNav = document.getElementById('navbarNav');
            navbarNav.classList.toggle('show');
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/" className="nav-link">Dashboard</Link>
            </li>
            {/* if user is logged in show saved books and logout */}
            {Auth.loggedIn() ? (
              <>
                <li className={`nav-item ${location.pathname === '/mypage' ? 'active' : ''}`}>
                  <Link to="/mypage" className="nav-link">My Page</Link>
                </li>
                <li className="nav-item">
                  <Link onClick={handleLogout} className="nav-link">Logout</Link>
                </li>
              </>
            ) : (
              <li className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>
                <Link to="/login" className="nav-link">Login/Sign Up</Link>
              </li>
            )}
            <li className={`nav-item ${location.pathname === '/timer' ? 'active' : ''}`}>
              <Link to="/timer" className="nav-link">Timer</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

