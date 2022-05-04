import React from "react";

import classes from "./App.module.css";
import Persons from "../components/Pesrons/Persons";
import Cockpit from "../components/cockpit/Cockpit";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constractor");
    this.state = {
      persons: [
        { id: "jkbf", name: "ali", age: 33 },
        { id: "ldfkjv", name: "mo", age: 2 },
        { id: ";e", name: "so", age: 30 },
        { id: "fd", name: "stgg", age: 23 },
        { id: "vfda", name: "asdferg", age: 305 },
      ],
      otherState: "hala harchi ",
      username: "super harry",
      showPerson: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDrived....", props);
    return state;
  }
  componentDidMount() {
    console.log("componentdidmount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("app.js shouldComponent");
    return true;
  }
  componentDidUpdate() {
    console.log("app.js componentdid moun");
  }

  nameChangeHandlre = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };
  toggelHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); or =>

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    console.log(" App render");
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandlre}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          cliked={this.toggelHandler}
        />
        {persons}
      </div>
    );
  }
}
export default App;

// import Validation from "./hamintori/ValidationC";
// import Char from "./hamintori/CharC";

// class App extends React.Component {
//   state = {
//     userInput: "",
//   };
//   changeHandler = (event) => {
//     this.setState({ userInput: event.target.value });
//   };
//   deleteCharHandler = (index) => {
//     const char = this.state.userInput.split("");
//     char.splice(index, 1);
//     const joinChar = char.join("");
//     this.setState({ userInput: joinChar });
//   };

//   render() {
//     const charList = this.state.userInput.split("").map((ch, index) => {
//       return (
//         <Char
//           character={ch}
//           key={index}
//           click={() => {
//             this.deleteCharHandler(index);
//           }}
//         />
//       );
//     });
//     return (
//       <div>
//         <input
//           type="text"
//           onChange={this.changeHandler}
//           value={this.state.userInput}
//         />
//         <p>{this.state.userInput}</p>
//         <Validation inputlength={this.state.userInput.length} />
//         {charList}
//       </div>
//     );
//   }
// }
// export default App;
