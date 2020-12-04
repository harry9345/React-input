import React from "react";
import "./Person.css";

const Emtehan = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        i am {props.name} and i am {props.age}
      </p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};
export default Emtehan;

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
