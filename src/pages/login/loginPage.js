import React from 'react';

import Dropdown from '../../components/Dropdown/Dropdown.component';

import './loginPage.styles.scss'

const LoginPage = () => {
  return (
    <div className='login-container'>
      <div className='color-strip-top'></div>
        <div className='panel-container'>
          <div className='question-box'>
            <h1 className='question-mark'>?</h1>
          </div>
        <h1 className='heading'>Would You Rather</h1>
        <p className='copy'>Select an account to sign in</p>
        <Dropdown />
        
      </div>
    </div>
  )
}


export default LoginPage;