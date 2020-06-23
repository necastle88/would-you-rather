import { showLoading, hideLoading } from 'react-redux-loading';
import { getInitData } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { getUsers } from './users';
import { getQuestions } from './questions';



export function handleInitData () {
  return async ( dispatch ) => {
    dispatch(showLoading());
    return await getInitData()
      .then(({ users, questions }) => {
        dispatch(setAuthedUser(null));
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
        dispatch(hideLoading());
      })
  }
}