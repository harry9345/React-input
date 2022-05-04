import React, { Component } from "react";

import Person from "./Person/Person";

// const Persons = (props) =>
class Persons extends Component {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("persons.js getderei....", props);
  //     return state;
  //   }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("persons.js shouldComponent");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("persons.js getSnapshot..");
    return null;
  }
  componentDidUpdate() {
    console.log("person.js componentdid moun");
  }

  render() {
    console.log("persons render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          change={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default Persons;
