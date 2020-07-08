import React, { useState } from 'react';

import UnansweredQuestion from '../../components/UnansweredQuestion/UnansweredQuestion.component';
import ResultCard from '../../components/ResultQuestion/ResultQuestion.component';
import AnsweredCards from '../../components/AnsweredCards/AnsweredCards.component';
import './dashboard.styles.scss';

const DashboardPage = () => {
  const [answered, setAnswered] = useState(false);
  return(
    <div>
      <div className='btn-container'>
        <div className='btn-shadow'>
          <button className='answered-btn' onClick={() => setAnswered(true)}>Answered</button>
          <button autoFocus={true} className='unanswered-btn' onClick={() => setAnswered(false)}>Unanswered</button>
        
        </div>
        
      </div>
      {answered 
        ? <div><AnsweredCards /></div>
        : <div><UnansweredQuestion /></div>
      }
      <ResultCard />
    </div>
  )
}



export default (DashboardPage);