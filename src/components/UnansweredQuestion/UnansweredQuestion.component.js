import React from "react";
import { connect } from "react-redux";

import "./unaswered-question.styles.scss";

const UnansweredQuestion = ({ questionsValues, users, authedUser }) => {
  console.log(questionsValues);
  let answers = users[authedUser].answers;
  console.log(users[authedUser]);
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
        console.log(question.id, Object.keys(answers).includes(question.id));
        return !Object.keys(answers).includes(question.id) ? (
          <div className="card-container" key={question.id}>
            <div className="question-container">
              <div className="user-info-column">
                <div className="avatar-container">
                <p className='author-heading' >Author</p>
                  {
                    <img
                      className='avatar'
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
              <div className='horizontal-divider'></div>
              <div className="question-form-container">
                <h3 className="question-card-title">Would you rather</h3>
                <form>
                  <input type="radio" value="Hi" />
                  {question.optionOne.text}
                  <div className='divider-row'>
                    <span className='line' />
                    <p className='or-text' >or</p>
                    <span className='line' />
                  </div>
                  <input type="radio" value="Hi" />
                  {question.optionTwo.text}
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
