import React from "react";
import "./App.css";
import Emtehan from "./hamintori/Emtehani.js";
import UserInput from "./components/UserInput";
import Button from "react-bootstrap/Button";

class App extends React.Component {
  state = {
    person: [
      { name: "ali", age: 33 },
      { name: "mo", age: 2 },
      { name: "so", age: 30 },
    ],
    otherState: "hala harchi ",
  };

  switchNameHandler = () => {
    // console.log("its working");
    this.setState({
      person: [
        { name: "has", age: 323 },
        { name: "mo", age: 2 },
        { name: "so", age: 0 },
      ],
    });
  };
  switchHandler = () => {
    // console.log("its working");
    this.setState({
      person: [
        { name: "mmmmmmmmmm", age: 323 },
        { name: "ssssssmo", age: 2 },
        { name: "ssssssssso", age: 0 },
      ],
    });
  };
  nameChangeHandlre = (event) => {
    this.setState({
      person: [
        { name: "mmmmmmmmmm", age: 323 },
        { name: event.target.value, age: 2 },
        { name: "ssssssssso", age: 0 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "#c8922b",
      border: "2px solid #c8922b",
      borderRadius: "1000px",
      padding: "3px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>Heloo</h1>
        <Button onClick={this.switchNameHandler} style={style}>
          switch me
        </Button>
        <Emtehan
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Emtehan
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchHandler}
          change={this.nameChangeHandlre}
        />
        <Emtehan
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
        <UserInput />
      </div>
    );
  }
}

export default App;
