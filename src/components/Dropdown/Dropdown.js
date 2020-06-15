import React, { useState } from "react";

import { TiArrowSortedDown } from 'react-icons/ti';
import { TiArrowSortedUp } from 'react-icons/ti';
import { FaCheck } from 'react-icons/fa';

import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';

import '../Dropdown/dropdown.styles.scss';

const Dropdown = ( {users = [], authedUser, setAuthedUser} ) => {
  const multiselect = false;
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  
  const handleOnClick = (item) => {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiselect) {
        setSelection([item])
      } else {
        let selectionAfterRemoval = selection;
        selectionAfterRemoval = selectionAfterRemoval.filter(
          current => current.id !== item.id
        );
        setSelection([...selectionAfterRemoval]);
      }
    }
  }
  let selectedUser = ''

  const isItemSelected = (item) => {
    if (selection.find(current => current.id === item.id)) {
      return selectedUser = item.id;
    } else return false
  }
  
  return (
    <div className='dd-wrapper'>
      <div 
        tabIndex={0} 
        className='dd-header' 
        role='button' 
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
      <div className='dd-header__title'>
        <p className='dd-header__title--bold'>Select a user</p>
      </div>
      <div className='dd-header__action'>
        <p>{open 
          ? <TiArrowSortedUp style={{ color: '#5f0a87'}}/> 
          : <TiArrowSortedDown style={{ color: '#5f0a87'}} />}
          </p>
      </div>
      </div>
      {open && (
        <ul className='dd-list'>
          {users.map(user => (
            <li className='dd-list-item' key={user.id}>
              <button type='button' onClick={() => handleOnClick(user)}>
                <span><img className='dd-avatar' src={user.avatarURL} alt='user avatars'/><p className='dd-avatar-name'>{user.name}</p></span>
                <span className='dd-selected'>{isItemSelected(user) && <FaCheck style={{ color: '#6617cb' }} /> 
              }</span>
              </button>
            </li>
          ))}
          
        </ul>
        
      )}
      <button 
        type='submit' 
        className='login-btn'
        onClick={() => setAuthedUser(selectedUser)}
        >SIGN IN</button>
    </div>
  )
}

const mapStateToProps = ({ authedUser, users }, ownProps) => {
  return{
    users: Object.values(users),
    authedUser,
    ownProps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAuthedUser: userId => dispatch(setAuthedUser(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);