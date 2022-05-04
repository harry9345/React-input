import React, { useEffect } from "react";

import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("cockpit.js useeffect");
    setTimeout(() => {
      alert("settimeout");
    }, 1000);
  }, []);

  const assignClasses = [];
  let btnClass = "";
  if (props.showPerson) {
    btnClass = classes.red;
  }
  if (props.persons.length <= 2) {
    assignClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Heloo</h1>
      <p className={assignClasses.join(" ")}>
        It is working by dynamic react styling
      </p>
      <button className={btnClass} onClick={props.cliked}>
        switch me
      </button>
    </div>
  );
};

export default Cockpit;
