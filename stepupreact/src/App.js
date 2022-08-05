import Box from "./Components/Box";
import "./App.css";
import {Component} from "react";
import BoxC from "./Components/BoxC";

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

class App extends Component {
  render() {
    return (
      <>
        <div>
          <BoxC n="1" l="abc" />
          <BoxC n="2" />
          <BoxC n="3" />
        </div>
        <div>
          <BoxC />
          <BoxC />
          <BoxC />
        </div>
        <div>
          <BoxC />
          <BoxC />
          <BoxC />
        </div>
      </>
    );
  }
}

export default App;
