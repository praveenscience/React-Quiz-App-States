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
          <p>Quiz hasn't started yet.</p>
          <p>Quiz contains {Questions.length} questions in total.</p>
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
