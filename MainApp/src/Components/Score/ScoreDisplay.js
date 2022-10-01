import Card from "../UI/Card";
import React from "react";

const ScoreDisplay = (props) => {
  return (
    <Card className="score-section">
      <ScoreCircle score={props.score} />
      <h1> {props.name} </h1>
    </Card>
  );
};

export default ScoreDisplay;
