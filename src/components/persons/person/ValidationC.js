import React from "react";

const Validation = (props) => {
  let validationMsg = "text long enough";
  if (props.inputlength <= 5) {
    validationMsg = "text to short";
  }
  return (
    <div>
      {/* {props.inputlength > 5 ? <p>Text long enough</p> : <p>Text to short </p>}
       */}
      <p>{validationMsg}</p>
      <p>Text lenght: {props.inputlength}</p>
    </div>
  );
};

export default Validation;
