import React from "react";
import Logo from "../assets/logo.svg";

const QuizProgress = ({ Questions, CurrentQuestion, SelectAnswer }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 py-5 my-5">
          <div className="my-2 text-center">
            <img src={Logo} alt="React Logo" className="w-25" />
          </div>
          <h3>Question</h3>
          <h5>{Questions[CurrentQuestion].Question}</h5>
          <ul className="answers">
            {Questions[CurrentQuestion].Answers.map((answer, key) => (
              <li key={key}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    onChange={SelectAnswer}
                    value={key}
                  />
                  <span>{answer}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizProgress;
