import "./App.css";
import { Component, useState, useEffect } from "react";

import Score from "./components/Score";
import GetQuestion from "./components/GetQuestion";

const App = () => {
  const [allValues, setAllValues] = useState({
    score: 0,
    category: "",
    value: "",
    answer: "",
    question: "",
    isVisible: false,
  });

  useEffect(() => {
    fetch("https://jservice.io/api/random")
      .then((res) => res.json())
      .then((json) => setAllValues(json.data));
  }, []);

  const handleIncrease = (event) => {
    event.preventDefault();
    this.state.score({ score: this.state.score + this.state.value });
  };

  const handleDecrease = (event) => {
    event.preventDefault();
    this.setState({ score: this.state.score - this.state.value });
  };

  const handleChange = (event) => {
    setAllValues(...allValues, [event.target.id]: event.target.value);
  };

  const handleReveal = (event) => {
    event.preventDefault();
    setAllValues({
      isVisible: (this.isVisible = !this.isVisible),
    });
  };

  const handleGetQuestion = (event) => {
    event.preventDefault();
    this.setState(
      {
        questionURL: this.state.baseURL,
        isVisible: false,
      },
      () => {
        fetch(this.state.questionURL)
          .then((res) => res.json())
          .then((json) =>
            this.setState({
              category: json[0].category.title,
              value: json[0].value,
              answer: json[0].answer,
              question: json[0].question,
            })
          );
      }
    );
  };

  const handleReset = () => {
    window.location.reload(false);
  };

  return (
    <div className="App">
      <h1>Welcome to Jeopardy</h1>
      <Score
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        handleReset={handleReset}
        score={score}
      />
      <GetQuestion
        handleGetQuestion={handleGetQuestion}
        handleReveal={handleReveal}
        category={this.state.category}
        value={this.state.value}
        answer={this.state.answer}
        question={this.state.question}
        isVisible={this.state.isVisible}
      />
    </div>
  );
};

export default App;
