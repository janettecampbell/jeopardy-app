const Score = (props) => {
  return (
    <div>
      <h2>Score: {props.score}</h2>
      <button onClick={props.handleDecrease} className="Decrease">
        Decrease
      </button>
      <button onClick={props.handleIncrease} className="Increase">
        Increase
      </button>
      <button onClick={props.handleReset} className="Reset">
        Reset
      </button>
    </div>
  );
};

export default Score;
