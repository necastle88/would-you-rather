import React from "react";
import { connect } from "react-redux";
import "./result-question.scss";

import ProgressBar from "../ProgressBar/ProgressBar.component";
import selectedChoice from "../../assets/images/SVG/SVG/SVG/yourLike.svg";
import Page404 from "../../pages/404/404Page";

import { useHistory, useLocation,  } from "react-router-dom";

const ResultCard = ({ questionsValues, users, authedUser, isQuestionValid}) => {
  let answers = users[authedUser].answers;
  
  let history = useHistory();
  let location = useLocation();
  let match = location.pathname.slice(11);

  function handleClick() {
    history.push("/");
  }
  
  if (!isQuestionValid) {
    console.log(isQuestionValid)
    return <Page404 />;
  } else {
    return (
      <div>
        {questionsValues
          .filter((id) => id.id === match)
          .map((question) => {
            let questionOneVotes = question.optionOne.votes.length;
            let questionTwoVotes = question.optionTwo.votes.length;
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
                    <div className="your-choice-image">
                      {question.optionOne.votes.includes(authedUser) ===
                      true ? (
                        <img
                          className="your-choice-image-one"
                          src={selectedChoice}
                          width="60px"
                          alt="Your selected poll choice"
                        ></img>
                      ) : null}
                    </div>

                    <ProgressBar
                      done={
                        questionOneVotes > 0
                          ? (questionOneVotes /
                              (questionTwoVotes + questionOneVotes)) *
                            100
                          : 0
                      }
                    />
                    <span className="votes">
                      {`${questionOneVotes}/${
                        questionTwoVotes + questionOneVotes
                      } votes`}
                    </span>
                    <span className="result-text">
                      {question.optionTwo.text}
                    </span>
                    <div>
                      {question.optionTwo.votes.includes(authedUser) ? (
                        <img
                          className="your-choice-image-two"
                          src={selectedChoice}
                          width="60px"
                          alt="Your selected poll choice"
                        ></img>
                      ) : null}
                      <span>
                        <ProgressBar
                          done={
                            questionTwoVotes > 0
                              ? (questionTwoVotes /
                                  (questionTwoVotes + questionOneVotes)) *
                                100
                              : 0
                          }
                        />
                      </span>
                    </div>
                    <span className="votes">
                      {`${questionTwoVotes}/${
                        questionTwoVotes + questionOneVotes
                      } votes`}
                    </span>
                    <br />
                    <button
                      className="view-poll-btn"
                      type="submit"
                      onClick={handleClick}
                    >
                      Questions
                    </button>
                  </div>
                </div>
              </div>
            ) : null;
          })}
      </div>
    );
  } 
};

const mapStateToProps = ({questions, users, authedUser}, props) => {
  const questionsValues = Object.values(questions);

  const { id } = props.match.params;
  const question = questions[id];

  let isQuestionValid;

   if(typeof question === 'undefined' ){
    isQuestionValid = false
     return {
       isQuestionValid,
       users,
        authedUser,
     }
   } else {
    isQuestionValid = true
    return {
      questionsValues,
      users,
      authedUser,
       isQuestionValid: true
     }
   }
 };

export default connect(mapStateToProps)(ResultCard);
