import React, { useState } from 'react';

import UnansweredQuestion from '../../components/UnansweredQuestion/UnansweredQuestion.component';
import ResultCard from '../../components/ResultQuestion/ResultQuestion.component';

const DashboardPage = () => {
  const [answered, setAnswered] = useState(false);
  return(
    <div>
      <button onClick={() => setAnswered(true)}>Answered</button>
      <button onClick={() => setAnswered(false)}>Unanswered</button>
      {answered 
        ? <div>Hello<ResultCard /></div>
        : <div><UnansweredQuestion /></div>
      }
    </div>
  )
}



export default (DashboardPage);