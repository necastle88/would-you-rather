import React, { useState } from 'react';

import UnansweredQuestion from '../../components/UnansweredQuestion/UnansweredQuestion.component';
import { setAuthedUser } from '../../actions/authedUser';
import { NavLink } from 'react-router-dom';



const DashboardPage = ({ sortedQuestions }) => {
  const [answered, setAnswered] = useState(false);


  return(
    <div>
      <button onClick={() => setAnswered(true)}>Answered</button>
      <button onClick={() => setAnswered(false)}>Unanswered</button>
      {answered 
        ? <div>Answered</div>
        : <div><UnansweredQuestion /></div>}
    </div>
  )
}



export default (DashboardPage);