import React from "react";

import classes from "./Cockpit.module.css";

const cockpit = (props) => {
  let assClassess = [];
  let btnClass = "";

  if (props.showPerson) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assClassess.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assClassess.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Heloo</h1>
      <p className={assClassess.join(" ")}>
        It is working by dynamic react styling
      </p>
      <button className={btnClass} onClick={props.clicked}>
        switch me
      </button>
    </div>
  );
};

export default cockpit;
