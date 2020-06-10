import React from 'react';
import LoginPanel from '../../components/Login/Login.component';

import './loginPage.styles.scss'

const LoginPage = () => {
  return (
    <div className='login-container'>
      <div className='color-strip-top'></div>
      <div className='panel-container'>
      <h1 className='question-mark'>?</h1>
      <h1 className='heading'>Would You Rather</h1>
      <p className='copy'>Select a account to sign in</p>
      <form>
        <label>
        <select required={true}>
          <option value='user1'>user1</option>
          <option value='user2'>user2</option>
          <option value='user3'>user3</option>
        </select>
        </label>
      </form>
      <button type='submit' className='login-btn'>SIGN IN</button>
      
  </div>
   
    </div>
  )
}

export default LoginPage;