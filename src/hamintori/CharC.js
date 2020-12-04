import React from "react";

const Char = (props) => {
  const style = {
    padding: "16px",
    textAlignr: "center",
    display: "inline-block",
    margin: "16px",
    border: "1px solid red",
  };
  return (
    <div style={style} onClick={props.click}>
      {props.character}
    </div>
  );
};
export default Char;
