import { showLoading, hideLoading } from 'react-redux-loading';


export const GET_QUESTIONS = 'GET_QUESTIONS';

export const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions
  }
}