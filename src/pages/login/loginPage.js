import React from 'react';
import { connect } from 'react-redux';

import Dropdown from '../../components/Dropdown/Dropdown';

import './loginPage.styles.scss'

const LoginPage = ({ authedUser, users }) => {

  return (
    
    <div className='login-container'>
    {console.log(users)}
      <div className='color-strip-top'></div>
      <div className='panel-container'>
      <div className='question-box'>
        <h1 className='question-mark'>?</h1>
      </div>

      <h1 className='heading'>Would You Rather</h1>
      <p className='copy'>Select a account to sign in</p>
      <Dropdown 
        title='Select User' 
        items={users}
        authedUser={authedUser}
        />
      <button type='submit' className='login-btn'>SIGN IN</button>
      
  </div>
   
    </div>
  )
}
const mapStateToProps = ({ authedUser, users }) => {
  return{
    users: Object.values(users),
    authedUser
  }
}


export default connect(mapStateToProps)(LoginPage);