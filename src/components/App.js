import React, { Component } from "react";
import Questions from "../constants/questions";
import QuizStartPage from "./QuizStartPage";
import QuizProgress from "./QuizProgress";
import QuizSummary from "./QuizSummary";

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
    if (CurrentQuestion === Questions.length) {
      this.setState({
        QuizStatus: "Done"
      });
    } else {
      this.setState({ CurrentQuestion });
    }
  };

  render() {
    return (
      <div className="App">
        {this.state.QuizStatus === "New" ? (
          <QuizStartPage Questions={Questions} StartQuiz={this.StartQuiz} />
        ) : null}
        {this.state.QuizStatus === "Progress" ? (
          <QuizProgress
            Questions={Questions}
            CurrentQuestion={this.state.CurrentQuestion}
            SelectAnswer={this.SelectAnswer}
            NextQuestion={this.NextQuestion}
            UserAnswers={this.state.UserAnswers}
          />
        ) : null}
        {this.state.QuizStatus === "Done" ? (
          <QuizSummary
            Questions={Questions}
            UserAnswers={this.state.UserAnswers}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
