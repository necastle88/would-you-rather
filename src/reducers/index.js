import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

import authedUser from './authedUser';
import users from './users';


export default combineReducers ({
  users,
  authedUser,
  loadingBar: loadingBarReducer
});