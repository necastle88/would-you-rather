import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from './_DATA';

export function getInitData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export const saveQuestionAnswer = (info) => {
  return _saveQuestionAnswer(info)
};

export const saveQuestion = (info) => {
  return _saveQuestion(info)
}