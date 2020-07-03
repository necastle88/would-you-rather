import React, { useState } from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from '../../actions/users';
import "./unaswered-question.styles.scss";

const UnansweredQuestion = ({ dispatch, questionsValues, users, authedUser }) => {
  const [selectedAnswer, setSelectedAnswer] = useState({ authedUser, qid: '', answer: ''});
  let answers = users[authedUser].answers;
  
 

  const handleSumbit = (event) => {
    event.preventDefault();
    dispatch(handleSaveAnswer(selectedAnswer))
    console.log(selectedAnswer)
  }
  

  questionsValues.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      {questionsValues.map((question, idx) => {
        return !Object.keys(answers).includes(question.id) ? (
          <div className="card-container" key={question.id}>
            <div className="question-container">
              <div className="user-info-column">
                <div className="avatar-container">
                  <p className="author-heading">Author</p>
                  {
                    <img
                      className="avatar"
                      src={users[question.author].avatarURL}
                      alt="avatar"
                      width="85"
                    />
                  }
                  <div className="name-container">
                    {users[question.author].name}
                  </div>
                </div>
              </div>
              <div className="horizontal-divider"></div>
              <div className="question-form-container">
                <h3 className="question-card-title">Would you rather</h3>
                <form onSubmit={handleSumbit} >
                  <input
                    type="radio"
                    value={'optionOne'}
                    name="question"
                    onChange={e => setSelectedAnswer({
                      qid: question.id, 
                      answer: e.target.value,
                      authedUser
                    })}
                  />
                  <span className="question-text">
                    {question.optionOne.text}
                  </span>
                  <div className="divider-row">
                    <span className="line" />
                    <p className="or-text">or</p>
                    <span className="line" />
                  </div>
                  <input 
                    type="radio" 
                    value={'optionTwo'}
                    name="question" 
                    onChange={e => setSelectedAnswer({
                      qid: question.id, 
                      answer: e.target.value,
                      authedUser  
                    })}
                    />
                  <span className="question-text">
                    {question.optionTwo.text}
                  </span>
                  <br />
                  <button className="sumbit-Question-btn" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
};

const mapStateToProps = ({ questions, users, authedUser }) => {
  const questionsValues = Object.values(questions);
  return {
    questionsValues,
    users,
    authedUser,
  };
};

export default connect(mapStateToProps)(UnansweredQuestion);
