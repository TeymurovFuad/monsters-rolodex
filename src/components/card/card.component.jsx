import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <div>{props.monster.name}</div>
    </div>
  );
};
