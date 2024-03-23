
import '../assests/App.css';
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav'; // Import the 'Nav' component
import LoadingBar from './LoadingBar'; // Import the 'LoadingBar' component
import { Routes } from 'react-router-dom';

const App = () =>{
  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav />
     
          <Routes>
         
            <Route  />
          </Routes>
     
      </div>
    </Fragment>
  );
}

export default App;
