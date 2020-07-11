import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./AnsweredCards.scss";



const AnsweredCards = ({ questionsValues, users, authedUser }) => {
  let answers = users[authedUser].answers;
  
  questionsValues.sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    }
    return 0;
  });

  return (
    <div>
      {questionsValues.map((question, idx) => {
        return Object.keys(answers).includes(question.id) ? (
          <div className="card-container" key={question.id}>
            <div className="result-container">
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
              <div className="result-form-container">
                <h3 className="result-card-title">Would You Rather</h3>
                  <span className="question-text">
                  {question.optionOne.text}
                </span>
                <div className="divider-row">
                  <span className="line" />
                  <p className="or-text">or</p>
                  <span className="line" />
                </div>
                <span className="question-text">
                  {question.optionTwo.text}
                </span>
                  <br />
                  <Link to={`/questions/${question.id}`}>
                  <button className="view-poll-btn-answered" type="submit" >
                    View Poll
                  </button>
                  </Link>
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

export default connect(mapStateToProps)(AnsweredCards);
