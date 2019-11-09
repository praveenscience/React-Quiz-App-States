import React, { Component } from "react";
import Questions from "../constants/questions";
import QuizStartPage from "./QuizStartPage";

class App extends Component {
  state = {
    QuizStatus: "New"
  };
  StartQuiz = e => {
    e.preventDefault();
    this.setState({
      QuizStatus: "Progress"
    });
  };
  render() {
    return (
      <>
        {this.state.QuizStatus === "New" ? (
          <QuizStartPage Questions={Questions} StartQuiz={this.StartQuiz} />
        ) : null}
        {this.state.QuizStatus === "Progress"
          ? "Quiz in progress (" + Questions.length + ")."
          : null}
        {this.state.QuizStatus === "Done" ? "Quiz is finished." : null}
      </>
    );
  }
}

export default App;
