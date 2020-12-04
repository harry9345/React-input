import React from "react";
import "./App.css";
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
      border: "1px solid black",
      borderRadius: "10px",
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
    }
    return (
      <div className="App">
        <h1>Heloo</h1>
        <button style={style} onClick={this.toggelHandler}>
          switch me
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
