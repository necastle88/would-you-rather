import React from 'react';
import { connect } from 'react-redux';

const UnansweredQuestion = ({ questionsValues, users }) => {
  console.log(users)
  questionsValues.sort((a, b) => {
    if(a < b) {
      return 1
    } else if (a > b) {
      return -1
    } return 0
  });


  return (
    <div>
      {questionsValues.map((question, idx) => {
        return <div key={question.id}>{console.log(users.id)}</div>
      })}
    </div>
  )
}

const  mapStateToProps = ({ questions, users }) => { 
  const questionsValues = Object.values(questions);
  return {
    questionsValues,
    users
  }
}

export default connect(mapStateToProps)(UnansweredQuestion);