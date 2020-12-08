import React, { Component } from "react";

import classes from "./Person.module.css";

class Person extends Component {
  render() {
    return (
      // <div className="Person" style={style}>
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          i am {this.props.name} and i am {this.props.age}
        </p>
        <input
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </div>
    );
  }
}
export default Person;

// //       *******
//        REACT HOOKS
// const App = (props) => {
//   const [personState, setPersonState] = useState({
//     person: [
//       { name: "ali", age: 33 },
//       { name: "mo", age: 2 },
//       { name: "so", age: 30 },
//     ],
//     otherState: "hala harchi ",
//   });
//   console.log(personState);

//   const switchNameHandler = () => {
//     // console.log("its working");
//     setPersonState({
//       person: [
//         { name: "has", age: 323 },
//         { name: "mo", age: 2 },
//         { name: "so", age: 0 },
//       ],
//       otherState: personState.otherState,
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Heloo</h1>
//       <button onClick={switchNameHandler}>switch name</button>
//       <Emtehan
//         name={personState.person[0].name}
//         age={personState.person[0].age}
//       />
//       <Emtehan
//         name={personState.person[1].name}
//         age={personState.person[1].age}
//       />
//       <Emtehan
//         name={personState.person[2].name}
//         age={personState.person[2].age}
//       />
//       <Login />
//     </div>
//   );
// };

// export default App;
