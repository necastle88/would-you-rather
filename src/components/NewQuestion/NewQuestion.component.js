import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../../actions/questions";
import { useHistory } from "react-router-dom";
import "./new-question.styles.scss";

const NewQuestion = ({ dispatch, questionsValues, users, authedUser }) => {
  const [createdQuestion, setCreatedQuestion] = useState({
    author: authedUser,
    optionOneText: '',
    optionTwoText: '',
  });
  
  let history = useHistory();
  
  const handleClick = () => {
    dispatch(handleAddQuestion(createdQuestion))
  
    history.push(`/`);
    
  };

  const handleChangeOptionOne = (event) => {
    setCreatedQuestion({ 
      author: authedUser, 
      optionOneText: event.target.value, 
      optionTwoText: createdQuestion.optionTwoText
    });
  }

  const handleChangeOptionTwo = (event) => {
    setCreatedQuestion({ 
      author: authedUser, 
      optionOneText: createdQuestion.optionOneText,
      optionTwoText: event.target.value, 
    });;
  }
  console.log(createdQuestion)
  return (
    <div>
      <div className="new-question-container">
        <div className="question-container">
          <div className="question-form-container">
            <h3 className="new-question-card-title">Would You Rather</h3>
            <br />
            <form className="new-question-form">
              <input
                type="text"
                className="form__field-one"
                placeholder="Option One"
                name="option-one"
                id="option-one"
                value={createdQuestion.optionOneText}
                onChange={handleChangeOptionOne}
                required={true}
                autoComplete='off'
              />
              <label htmlFor="option-one" className="form__label-option-one">
                Option One
              </label>
              <input
                type="text"
                className="form__field-two"
                placeholder="Option Two"
                name="option-two"
                id="option-two"
                value={createdQuestion.optionTwoText}
                onChange={handleChangeOptionTwo}
                required={true}
                autoComplete='off'
              />
              <label htmlFor="option-one" className="form__label-option-two">
                Option Two
              </label>
              <br />
              <button
                className="create-question-btn"
                type="button"
                onClick={handleClick}
                disabled={!createdQuestion.optionOneText || !createdQuestion.optionTwoText 
                  ? true : false
                }
              > 
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NewQuestion);
