import React from 'react';

import LoginPanel from '../../components/Login/Login.component';
import Dropdown from '../../components/Dropdown/Dropdown';

import './loginPage.styles.scss'

const items = [
  {
    id: 1,
    value: 'Turkey',
    icon: '../../src/assets/images/4x/jhonDoe.png'
  },
  {
    id: 2,
    value: 'Test',
    icon: '../../src/assets/images/4x/jhonDoe.png'
  },
  {
    id: 3,
    value: 'ham',
    icon: '../../src/assets/images/4x/jhonDoe.png'
  },
]

const LoginPage = () => {
  return (
    <div className='login-container'>
      <div className='color-strip-top'></div>
      <div className='panel-container'>
      <div className='question-box'>
        <h1 className='question-mark'>?</h1>
      </div>
      
      <h1 className='heading'>Would You Rather</h1>
      <p className='copy'>Select a account to sign in</p>
      <Dropdown 
        title='Select User' 
        items={items}
        />
      <button type='submit' className='login-btn'>SIGN IN</button>
      
  </div>
   
    </div>
  )
}

export default LoginPage;