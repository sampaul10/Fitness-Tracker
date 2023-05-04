import React, { useState } from 'react'; // from login tutorial
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'; // from login tutorial
// importing pages & components for the routes
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import Login from './components/Login/Login';
import MyPage from './components/pages/MyPage';

import './App.css'   // from login tutorial

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={<Dashboard />}
            />
            <Route
              path='/login'
              element={<Login />}
            />
            <Route
              path='/mypage'
              element={<MyPage />}
            />
            <Route
              path='/timer'
              element={<Timer />}
            />
            <Route
              path='*'
              element={<h1 className='display-2'>Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;