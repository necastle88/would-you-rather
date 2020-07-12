import { hideLoading } from "react-redux-loading";

export const GET_USERS = "GET_USERS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

function saveQuestion({ authedUser, question }) {
  return {
    type: SAVE_QUESTION,
    id: authedUser,
    questionId: question.id,
  };
}

export function handleSaveQuestion(info) {
  return (dispatch) => {
    dispatch(saveQuestion(info));
    dispatch(hideLoading());
  };
}

function saveAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    qid,
    authedUser,
    answer,
  };
}

export function handleSaveAnswer(info) {
  return (dispatch) => {
    dispatch(saveAnswer(info));
    dispatch(hideLoading());
  };
}
