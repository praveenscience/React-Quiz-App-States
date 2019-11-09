import React from "react";
import Logo from "../assets/logo.svg";

const QuizProgress = ({
  Questions,
  CurrentQuestion,
  SelectAnswer,
  NextQuestion,
  UserAnswers
}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 py-5 my-5">
          <div className="my-2 text-center">
            <img src={Logo} alt="React Logo" className="w-25" />
          </div>
          <h3>
            Question {CurrentQuestion + 1} of {Questions.length}
          </h3>
          <h5>{Questions[CurrentQuestion].Question}</h5>
          <ul className="answers">
            {Questions[CurrentQuestion].Answers.map((answer, key) => (
              <li key={key}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    checked={key === UserAnswers[CurrentQuestion]}
                    onChange={SelectAnswer}
                    value={key}
                  />
                  <span>{answer}</span>
                </label>
              </li>
            ))}
          </ul>
          {UserAnswers[CurrentQuestion] && (
            <div className="my-3 text-center">
              <button className="btn btn-success" onClick={NextQuestion}>
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizProgress;
