import React from "react";
import { connect } from "react-redux";

import goldMedal from '../../assets/images/SVG/SVG/SVG/GoldMedal.svg';
import silverMedal from '../../assets/images/SVG/SVG/SVG/silverMedal.svg';
import bronzeMedal from '../../assets/images/SVG/SVG/SVG/bronzeMedal.svg';

import "./score-card.styles.scss";

const ScoreCards = ({ userValues }) => {
  let pointsArray = [];

  return (
    <div>
      {userValues.map((user) => {
        let answerdQuestions = Object.keys(user.answers).length;
        let askedQuestions = user.questions.length * 2;
        let totalPoints = (answerdQuestions + askedQuestions) * 20;

        pointsArray.push(totalPoints);

        pointsArray.sort((a, b) => {
          if (a < b) {
            return 1;
          } else if (a > b) {
            return -1;
          }
          return 0;
        });

        return user.id ? (
          <div className="card-container" key={user.id}>
            <div className="question-container">
              <div className="user-info-column">
                <div className="avatar-container">
                  <p className="author-heading">Author</p>
                  {
                    <img
                      className="avatar"
                      src={user.avatarURL}
                      alt="avatar"
                      width="85"
                    />
                  }
                  <div className="name-container">{user.name}</div>
                </div>
              </div>
              <div className="avatar-horizontal-divider"></div>
              <div className="score-container">
                <div className='total-container'>
                <div className="total-points">
                <span className="user-trophy">
                { pointsArray[0] === totalPoints &&
                (pointsArray[1] !== totalPoints ||
                  pointsArray[2] !== totalPoints) &&
                pointsArray[1] !== pointsArray[0]
                  ? <img src={goldMedal} alt='gold medal' size='20px'/>
                  : pointsArray[1] === totalPoints &&
                    (pointsArray[0] !== totalPoints ||
                      pointsArray[2] !== totalPoints) &&
                    pointsArray[1] !== pointsArray[2]
                  ? <img src={silverMedal} alt='silver medal'/>
                  : pointsArray[2] === totalPoints &&
                    (pointsArray[1] !== totalPoints ||
                      pointsArray[1] !== totalPoints)
                  ? <img src={bronzeMedal} alt='bronze medal'/>
                  : "Place Contested" }
              </span>
                  <h1 className='scores-text'>{totalPoints}</h1>
                  <p className='score-copy'>Total points</p>
                </div>
                </div>
                <div className="avatar-vertical-divider"></div>
                <div className="answered-asked-question-container">
                  <div className="answered-questions">
                    <h1 className='scores-text'>{answerdQuestions}</h1>
                    <p className='score-copy'>Answered</p>
                  </div>
                  <div className="asked-horizontal-divider"></div>
                  <div className="asked-questions">
                    <h1 className='scores-text'>{askedQuestions}</h1>
                    <p className='score-copy'>Asked</p>
                  </div>
                </div>
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
  const userValues = Object.values(users);

  console.log(userValues);

  userValues.sort((a, b) => {
    let questionA = a.questions.length + Object.keys(a.answers).length;
    let questionB = b.questions.length + Object.keys(b.answers).length;

    if (questionA < questionB) {
      return 1;
    } else if (questionA > questionB) {
      return -1;
    }
    return 0;
  });

  return {
    questionsValues,
    userValues,
    authedUser,
  };
};

export default connect(mapStateToProps)(ScoreCards);
