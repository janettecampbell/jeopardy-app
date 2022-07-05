const GetQuestion = (props) => {
  const { question, value, answer, category } = props;
  return (
    <div>
      <h2>Let's Play</h2>
      <button onClick={props.handleGetQuestion} className="get-question">
        Get Question
      </button>
      <div className="category">
        <h3>Category:</h3> <p>{category}</p>
      </div>

      <div className="points">
        <h4>Points:</h4> <p>{value}</p>
      </div>

      <div className="question">
        <h4>Question:</h4>
        <p>{question}</p>
      </div>

      <button onClick={props.handleReveal} className="reveal">
        Click to Reveal Answer
      </button>
      <div className="answer">
        <h3>Answer:</h3> <h4>{answer}</h4>
      </div>
    </div>
  );
};

export default GetQuestion;
