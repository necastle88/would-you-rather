import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import LoginPage from './pages/login/loginPage';
import Dashboard from './pages/dashboard/Dashboard.page';

import LoadingBar from 'react-redux-loading';

import { handleInitData } from './actions/shared';

import './App.scss';
import Nav from './components/Nav/Nav.component';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = (props) => {
  useEffect(() => {
    handleInitData()
  }, []); 

    return (
     
      <Router>
        <div className="App">
          <Nav />
          <LoadingBar style={{
            backgroundColor: '#cb218e', 
            height: '6px',
            position: 'absolute',
            marginTop: '-1px'
          }}/>
          {props.loading === true
            ? <LoginPage />
            : <div>
                <Route path='/' exact component={Dashboard}/>
              </div>
          }
       
        </div>
        </Router>
     
      
    );
  }


const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
