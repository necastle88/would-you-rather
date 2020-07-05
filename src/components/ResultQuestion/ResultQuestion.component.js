import React, { useState } from "react";
import { connect } from "react-redux";
import "./result-question.scss";
import ProgressBar from '../ProgressBar/ProgressBar.component';

const ResultCard = ({ dispatch, questionsValues, users, authedUser }) => {
  let answers = users[authedUser].answers;
  
  const handleSumbit = (event) => {
    event.preventDefault();
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
        let questionOneVotes = question.optionOne.votes.length
        let questionTwoVotes = question.optionTwo.votes.length
        return Object.keys(answers).includes(question.id) ? (
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
                  <span className="question-text">
                    {question.optionOne.text}
                  </span>
                  <ProgressBar  done={ questionOneVotes > 0
                    ? questionOneVotes / (questionTwoVotes + questionOneVotes) * 100 
                    : 0
                  }/>
                  <div className="divider-row">
                    <span className="line" />
                    <p className="or-text">or</p>
                    <span className="line" />
                  </div>
               
                  <span className="question-text">
                    {question.optionTwo.text}
                  </span>
                  {console.log(questionOneVotes / (questionTwoVotes + questionOneVotes) * 100)}
                  <ProgressBar done={ questionTwoVotes > 0
                    ? questionTwoVotes / (questionTwoVotes + questionOneVotes) * 100 
                    : 0
                  }/>
                  <br />
                  <button className="view-poll-btn" type="submit">
                    View Poll
                  </button>
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

export default connect(mapStateToProps)(ResultCard);
