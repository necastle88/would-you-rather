import { showLoading } from "react-redux-loading";
import {saveQuestion, saveQuestionAnswer} from '../utils/api.js'

export const GET_QUESTIONS = "GET_QUESTIONS";
export const TOGGLE_QUESTION ='TOGGLE_QUESTION';
export const ADD_QUESTION ='ADD_QUESTION';

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return async (dispatch) => {
    dispatch(showLoading());
    return await saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    }).then((question) => dispatch(addQuestion(question)));
  };
}

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

function toggleQuestion({ authedUser, qid, answer }) {
  return {
    type: TOGGLE_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleToggleQuestion(info) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(toggleQuestion(info));
    return await saveQuestionAnswer({
      authedUser: info.authedUser,
      qid: info.qid,
      answer: info.answer,
    }).catch((e) => {
      console.warn("Error in handleToggleQuestion: ", e);
      dispatch(toggleQuestion(info));
    }).then((res) => res);
  };
}
