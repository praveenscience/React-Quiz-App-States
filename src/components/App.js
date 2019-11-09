import React, { Component } from "react";
import Questions from "../constants/questions";

class App extends Component {
  state = {
    QuizStatus: "New"
  };
  render() {
    return (
      <>
        {this.state.QuizStatus === "New" ? "Quiz hasn't started yet." : null}
        {this.state.QuizStatus === "Progress"
          ? "Quiz in progress (" + Questions.length + ")."
          : null}
        {this.state.QuizStatus === "Done" ? "Quiz is finished." : null}
      </>
    );
  }
}

export default App;
