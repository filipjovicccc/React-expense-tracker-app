import React from "react";

function Card(props) {
  const classes = ".card " + props.className; // zapamtiti ovo
  return <div className={classes}>{props.children}</div>;
}

export default Card;
