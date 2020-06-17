import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';
import { NavLink } from 'react-router-dom';

import './nav.styles.scss';

const Nav = ({ authedUser, users, dispatch }, props) => {
  console.log(props.setAuthedUser)
  return(
    <div className='nav-container'>
    <span className='nav-spacer-left'></span>
      <span className='nav-links-container'>
        <ul className='nav-link-list'>
          <li className='nav-links'>
            <NavLink to='/' exact activeClassName='active'>
              Questions
            </NavLink>
          </li>
          <li className='nav-links'>
            <NavLink to='/add' activeClassName='active'>
              Create
            </NavLink>
          </li>
            <li className='nav-links'>
              <NavLink to='leaderboard' activeClassName='active'>
                Leaderboard
              </NavLink>
            </li>
        </ul>
      </span>
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