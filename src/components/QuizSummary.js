import React from "react";
import Logo from "../assets/logo.svg";

const QuizSummary = ({ Questions, UserAnswers }) => {
  const CorrectAnswers = UserAnswers.reduce((totalCorrect, curAns, index) => {
    if (curAns === Questions[index].Correct) return totalCorrect + 1;
    return totalCorrect;
  }, 0);
  return (
    <div className="container-fluid pb-3">
      <div className="row">
        <div className="col-12">
          <div className="my-2 text-center">
            <img src={Logo} alt="React Logo" className="w-25" />
          </div>
          <h3 className="text-center">Quiz Summary</h3>
          <h5 className="text-center">
            You have got {CorrectAnswers} answers of {Questions.length}{" "}
            questions correct.
          </h5>
          <p className="text-center">
            Here's a detailed split up of right and wrong answers.
          </p>
          <ul className="summary">
            {Questions.map((question, key) => (
              <li
                className={
                  question.Correct === UserAnswers[key] ? "correct" : null
                }
                key={key}
              >
                <p>
                  <strong>{question.Question}</strong>
                </p>
                <p>
                  <i className="fa fa-check-circle"></i>
                  {question.Answers[question.Correct]}
                </p>
                <p className="user">
                  <i className="fa fa-check-circle"></i>
                  <i className="fa fa-times-circle"></i>
                  {question.Answers[UserAnswers[key]]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizSummary;
