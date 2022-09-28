const Score = (props) => {
  const { score, handleDecrease, handleIncrease, handleReset } = props;
  return (
    <div>
      <h2>Score: {score}</h2>
      <button onClick={handleDecrease} className="decrease">
        Decrease
      </button>
      <button onClick={handleIncrease} className="increase">
        Increase
      </button>
      <button onClick={handleReset} className="reset">
        Reset
      </button>
    </div>
  );
};

export default Score;
