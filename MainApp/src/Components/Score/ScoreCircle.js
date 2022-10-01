import Card from "../UI/Card";
import React from "react";

const ScoreCircle = (props) => {
  const result = "good";
  const color = "green";

  if (props.score < 4.0) {
    result = "POOR";
    color = "red";
  } else if (props.score < 7.0 && props.score >= 4.0) {
    result = "AVERAGE";
    color = "yellow";
  } else {
    result = "GOOD ";
    color = "green";
  }

  return (
    <div className="background-tile">
      <h1 color={color}>{props.score}</h1>
      <h2>{result}</h2>
    </div>
  );
};

export default ScoreCircle;
