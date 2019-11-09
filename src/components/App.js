import React, { Component } from "react";
import Questions from "../constants/questions";
import QuizStartPage from "./QuizStartPage";
import QuizProgress from "./QuizProgress";

class App extends Component {
  state = {
    QuizStatus: "New"
  };
  StartQuiz = e => {
    e.preventDefault();
    this.setState({
      QuizStatus: "Progress",
      CurrentQuestion: 0,
      UserAnswers: []
    });
  };
  SelectAnswer = e => {
    const UserAnswers = [...this.state.UserAnswers];
    UserAnswers[this.state.CurrentQuestion] = +e.target.value;
    this.setState({ UserAnswers });
  };
  NextQuestion = e => {
    e.preventDefault();
    const CurrentQuestion = this.state.CurrentQuestion + 1;
    this.setState({ CurrentQuestion });
  };
  render() {
    return (
      <>
        {this.state.QuizStatus === "New" ? (
          <QuizStartPage Questions={Questions} StartQuiz={this.StartQuiz} />
        ) : null}
        {this.state.QuizStatus === "Progress" ? (
          <QuizProgress
            Questions={Questions}
            CurrentQuestion={this.state.CurrentQuestion}
            SelectAnswer={this.SelectAnswer}
            NextQuestion={this.NextQuestion}
          />
        ) : null}
        {this.state.QuizStatus === "Done" ? "Quiz is finished." : null}
      </>
    );
  }
}

export default App;
