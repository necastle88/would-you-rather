import React from 'react';
import { connect } from 'react-redux';

import LoginPage from './pages/login/loginPage';

import LoadingBar from 'react-redux-loading';

import { handleInitData } from './actions/shared';

import './App.scss';
import Nav from './components/Nav/Nav.component';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends React.Component{

  componentDidMount() {
    this.props.dispatch(handleInitData());
  }

  render() {
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
         {
           this.props.loading === true 
           ? null
           : <div>
              <Route path='/' exact component={''}/>
              <Route path='login' exact component={LoginPage}/>
              
             </div>

         }
          <LoginPage />
          </div>
        </Router>
     
      
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
