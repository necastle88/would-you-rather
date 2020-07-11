import React, { useState } from "react";

import UnansweredQuestion from "../../components/UnansweredQuestion/UnansweredQuestion.component";
import AnsweredCards from "../../components/AnsweredCards/AnsweredCards.component";
import "./dashboard.styles.scss";

const DashboardPage = () => {
  const [answered, setAnswered] = useState(false);
  return (
    <div>
      <div className="btn-container">
        <div className="btn-shadow">
          <button 
            className="answered-btn" 
            onClick={() => setAnswered(true)}
            style={answered ? 
              {background: 'linear-gradient(45deg, #cb218e 0%, #6617cb 74%)',
              color: 'white',
              outline: 'none'} : null}
            >
            Answered
          </button>
          <button
            autoFocus={true}
            className="unanswered-btn"
            onClick={() => setAnswered(false)}
            style={!answered ? 
              {background: 'linear-gradient(45deg, #cb218e 0%, #6617cb 74%)',
              color: 'white',
              outline: 'none'} : null}
          >
            Unanswered
          </button>
        </div>
      </div>
      {answered ? (
        <div>
          <AnsweredCards />
        </div>
      ) : (
        <div>
          <UnansweredQuestion />
        </div>
      )}
      
    </div>
  );
};

export default DashboardPage;
