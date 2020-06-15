import React from 'react';
import { connect } from 'react-redux';

import './nav.styles.scss';

const Nav = ({ authedUser, users }) => {
  console.log(users[authedUser])
  return(
    <div className='nav-container'>
      <div className='nav-links-container'>
        Hello
      </div>
      <div className='user-info-container'>
        {authedUser !== null 
          ? <img src={users[authedUser].avatarURL} width='65px' alt='your avatar' /> 
          : 'Sign in'
        }
        <h3 className='login-btn' onClick={() => console.log('hello')} >Logout</h3>
      </div>
    </div>
  )
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users
  }
}


export default connect(mapStateToProps)(Nav);