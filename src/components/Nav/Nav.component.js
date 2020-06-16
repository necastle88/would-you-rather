import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';

import './nav.styles.scss';

const Nav = ({ authedUser, users, dispatch }, props) => {
  console.log(props.setAuthedUser)
  return(
    <div className='nav-container'>
      <div className='nav-links-container'>
      </div>
      <div className='user-info-container'>
        {authedUser !== null 
          ? <span className='user-info-container'><p className='user-name'>{users[authedUser].name}<img src={users[authedUser].avatarURL} width='50px' alt='your avatar' /></p></span>
          : 'Sign in'
        }
        <h3 className='login-btn' onClick={() => dispatch(setAuthedUser(null))} >{authedUser ? 'Logout' : ''}</h3>
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