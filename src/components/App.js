
import '../assests/App.css';
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Login from './Login'; // Import the 'Login' component
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  return (
    <Fragment>
      <LoadingBar />
      <div className="container">      
        <Routes>
          <Route path="/" exact element={<Login />}/>
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
