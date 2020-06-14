import { showLoading, hideLoading } from 'react-redux-loading';
import { getInitData } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { getUsers } from './users';

const AUTHED_ID = "tylermcginnis";

export function handleInitData () {
  return async ( dispatch ) => {
    dispatch(showLoading());
    return await getInitData()
      .then(({ users, tweets }) => {
        dispatch(getUsers(users));
        dispatch(setAuthedUser(AUTHED_ID));
        dispatch(hideLoading());
      })
  }
}