import React from "react";
import Logo from "../assets/logo.svg";

const QuizStartPage = ({ Questions, StartQuiz }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center py-5">
          <div className="my-2">
            <img src={Logo} alt="React Logo" />
          </div>
          <h3>Quiz hasn't started yet.</h3>
          <h5 className="my-3">
            Quiz contains {Questions.length} questions in total.
          </h5>
          <p>
            <button className="btn btn-success" onClick={StartQuiz}>
              Start Quiz
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizStartPage;
