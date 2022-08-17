import Box from "./Components/Box";
import "./App.css";
import {Component} from "react";
import BoxC from "./Components/BoxC";
import Players from "./Components/Players";
import PlayersF from "./Components/PlayersF";
import {Parent} from "./Components/ChildToParentF";
import Count from "./Components/Count";
import {CountF} from "./Components/CountF";
import {TakeTheDataFromInput} from "./Components/TakeTheDataFromInput";
import TakeTheDataC from "./Components/TakeTheDataC";
import ControllledOnChange from "./Components/ControllledOnChange";
import ContextExample from "./Components/ContextExample";
import ContextAPIExample from "./Components/ContextAPI/ContextWithAPI";
import {MyContext} from "./Components/ContextAPI/ContextApiF";
// import {Parent} from "./Components/ChildToParent";
// import Parent from "./Components/PtoC";

// const App = () => {
//   const myName = "StepUp";
//   return (
//     <div>
//       <div>
//         <Box n="1" l="a" m={myName} />
//         <Box n="2" />
//         <Box n="3" />
//       </div>
//       <div>
//         <Box n="4" />
//         <Box n="5" />
//         <Box n="6" />
//       </div>
//       <div>
//         <Box n="7" />
//         <Box n="8" />
//         <Box n="9" />
//       </div>
//     </div>
//   );
// };

// class App extends Component {
//   render() {
//     return (
//       <>
//         <div>
//           <BoxC n="1" l="abc" />
//           <BoxC n="2" />
//           <BoxC n="3" />
//         </div>
//         <div>
//           <BoxC n="4" />
//           <BoxC n="5" />
//           <BoxC n="6" />
//         </div>
//         <div>
//           <BoxC n="7" />
//           <BoxC n="8" />
//           <BoxC n="9" />
//         </div>
//       </>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Class Component</h1>
//         <Players name="Sachin" loc="Mumbai" />
//         <Players name="Dhoni" loc="Ranchi" />
//         <Players name="Kohli" loc="Delhi" />
//         <Players name="Panth" loc="karnataka" />

//         <h1>Functional Component</h1>
//         <PlayersF name="Sachin" loc="Mumbai" />
//         <PlayersF name="Dhoni" loc="Ranchi" />
//       </div>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      {/* <Parent />; */}
      {/* <Parent /> */}
      {/* <Parent /> */}
      {/* <Count /> */}
      {/* <CountF /> */}
      {/* <TakeTheDataFromInput /> */}
      {/* <TakeTheDataC /> */}
      {/* <ControllledOnChange /> */}
      {/* <ContextExample /> */}
      {/* <ContextAPIExample /> */}
      <MyContext />
    </div>
  );
};

export default App;
