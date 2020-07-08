import React, { useState } from "react";
import { connect } from "react-redux";
import "./result-question.scss";
import ProgressBar from '../ProgressBar/ProgressBar.component';
import selectedChoice from '../../assets/images/SVG/SVG/SVG/yourLike.svg';

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
                <h3 className="result-card-title">Poll Results</h3>
                  <span className="question-text">
                    {question.optionOne.text}
                  </span>
                  <div className='your-choice-image'>
                    { question.optionOne.votes.includes(authedUser) === true
                      ? <img 
                        className='your-choice-image-one' 
                        src={selectedChoice} 
                        width='60px' 
                        alt='Your selected poll choice'>
                      </img>
                    : null}
                  </div> 
                 
                  <ProgressBar  done={ questionOneVotes > 0
                    ? questionOneVotes / (questionTwoVotes + questionOneVotes) * 100 
                    : 0
                  }/>
                  <span className='votes'>
                    {`${questionOneVotes}/${questionTwoVotes + questionOneVotes} votes`}
                  </span>
                  <span className="result-text">
                    {question.optionTwo.text}
                  </span>
                  <div>
                  { question.optionTwo.votes.includes(authedUser)
                    ?<img 
                      className='your-choice-image-two' 
                      src={selectedChoice} 
                      width='60px' 
                      alt='Your selected poll choice'>
                      </img>
                  : null}
                  <span>
                  <ProgressBar done={ questionTwoVotes > 0
                    ? questionTwoVotes / (questionTwoVotes + questionOneVotes) * 100 
                    : 0
                  }/>
                  </span>
                  </div>
                  <span className='votes'>
                    {`${questionTwoVotes}/${questionTwoVotes + questionOneVotes} votes`}
                  </span>
                  <br />
                  <button className="view-poll-btn" type="submit">
                    Questions
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
