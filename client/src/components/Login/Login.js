import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './Login.css';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="image">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              className="form-control"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
              value={formState.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              className="form-control"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
              value={formState.password}
            />
          </div>
          {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div>
        <h2 className="signup-link">New User? <Link className="toSignup" to="/signup">Signup here!</Link></h2>
      </div>
      </div>


    </div>


  );
}

export default Login;


