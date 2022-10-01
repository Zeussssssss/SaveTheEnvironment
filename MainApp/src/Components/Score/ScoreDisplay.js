import Card from "../UI/Card";
import React, { useState } from "react";

const ScoreDisplay = (props) => {
  return (
    <Card className="scoreSection">
      <ScoreCircle score={props.score} />
      <h1>{props.name}</h1>
    </Card>
  );
};

export default ScoreDisplay;
