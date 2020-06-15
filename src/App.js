import React from 'react';
import { connect } from 'react-redux';

import LoginPage from './pages/login/loginPage';
import LoadingBar from 'react-redux-loading';

import { handleInitData } from './actions/shared';

import './App.scss';
import Nav from './components/Nav/Nav.component';

class App extends React.Component{

  componentDidMount() {
    this.props.dispatch(handleInitData());
  }

  render() {
    return (
      <div className="App">
      <Nav />
      <LoadingBar style={{
        backgroundColor: '#cb218e', 
        height: '3px',
        position: 'absolute',
        marginTop: '7px'
      }}/>
        <LoginPage />
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
