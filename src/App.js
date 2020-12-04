import React from "react";
import "./App.css";
import Radium from "radium";
import Emtehan from "./hamintori/Emtehani.js";

class App extends React.Component {
  state = {
    persons: [
      { id: "jkbf", name: "ali", age: 33 },
      { id: "ldfkjv", name: "mo", age: 2 },
      { id: ";e", name: "so", age: 30 },
    ],
    otherState: "hala harchi ",
    username: "super harry",
    showPerson: false,
  };
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
    const style = {
      backgroundColor: "green",
      color: "white",
      border: "1px solid black",
      padding: "8px",
      margin: "20px",
      borderRadius: "10px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "yellow",
        color: "black",
      },
    };
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Emtehan
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.nameChangeHandlre(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "pink",
        color: "black",
      };
    }
    let classess = [];
    if (this.state.persons.length <= 2) {
      classess.push("red");
    }
    if (this.state.persons.length <= 1) {
      classess.push("bold");
    }

    return (
      <div className="App">
        <h1>Heloo</h1>
        <p className={classess.join(" ")}>
          It is working by dynamic react styling
        </p>
        <button style={style} onClick={this.toggelHandler}>
          switch me
        </button>
        {persons}
      </div>
    );
  }
}
export default Radium(App);

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
