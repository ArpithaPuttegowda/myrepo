// import Box from "./Components/Box";
// import "./App.css";
// import {Component} from "react";
// import BoxC from "./Components/BoxC";
// import Players from "./Components/Players";
// import PlayersF from "./Components/PlayersF";
// // import {Parent} from "./Components/ChildToParentF";
// import Count from "./Components/Count";
// import {CountF} from "./Components/CountF";
// import {TakeTheDataFromInput} from "./Components/TakeTheDataFromInput";
// import TakeTheDataC from "./Components/TakeTheDataC";
// import ControllledOnChange from "./Components/ControllledOnChange";
// import ContextExample from "./Components/ContextExample";
// import ContextAPIExample from "./Components/ContextAPI/ContextWithAPI";
// import {MyContext} from "./Components/ContextAPI/ContextApiF";
// import LifeCycleMethod from "./Components/lifeCycleMethodMounting";
// import LifeCycleUpdating from "./Components/LifeCycleUpdating";
// import LifeCycleUnMounting from "./Components/LifeCycleUnMounting";
// import Players1 from "./Components/Players1";
// import ErrorHandling from "./Components/ErrorHandling/ErrorHandling";
// import ReactPureComponent from "./Components/ReactPureComponent";
// import ArgumentsOfSetState from "./Components/ArgumentsOfSetState";
// import ArgumentOfSetStateCB from "./Components/ArgumentOfSetStateCB";
// import {Parent} from "./Components/CustomHooks/Parent";
// import ComponentDidMountAjax from "./Components/ComponentDidMountAjax";
// import {UseEffectComponentDidMount} from "./Components/UseEffectComponentDidMount";
// import {UseEffectComponentDidUpdate} from "./Components/UseEffectComponentDidUpdate";
// import {ComponentWillUnmountUseEffect} from "./Components/ComponentWillUnmountUseEffect";
// import OrderedList from "./Components/ListAndKeys/OrderedList";
// import UnorderedOrdered from "./Components/ListAndKeys/UnorderedOrdered";
// import {DropDown} from "./Components/ListAndKeys/DropDown";
// import {PlayerInfo} from "./Components/ListAndKeys/PlayerInfo";
// import {TableList} from "./Components/ListAndKeys/TableList";
// import {ListKeysComponent} from "./Components/ListAndKeys/ListKeysComponent";
// import {DropDown1} from "./Components/ReusualbeComponents/DropDown1";
// import {DropDown2} from "./Components/ReusualbeComponents/DropDown2";
// import {DropDown3} from "./Components/ReusualbeComponents/DropDown3";
// import {GenericDropDown} from "./Components/ReusualbeComponents/GenericDropDown";
// import GenericResuableClass from "./Components/ReusualbeComponents/GenericResuableClass";
// import {OrderedResualbeComponent} from "./Components/ReusualbeComponents/OrderedResualbeComponent";
// import {InputReusuable} from "./Components/ReusualbeComponents/InputReusuable";
// import InputClassResualbe from "./Components/ReusualbeComponents/InputClassResualbe";
// import TableReusuable from "./Components/ReusualbeComponents/TableReusuable";
// import {ParentComp} from "./Components/REACTMEMO";
// // import Parent from "./Components/HOC/Parent";
// // import {Parent} from "./Components/ChildToParent";
// // import Parent from "./Components/PtoC";

import React from "react";
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";
import {Menu} from "./Components/Menu/Menu";
import "./App.css";

// // const App = () => {
// //   const myName = "StepUp";
// //   return (
// //     <div>
// //       <div>
// //         <Box n="1" l="a" m={myName} />
// //         <Box n="2" />
// //         <Box n="3" />
// //       </div>
// //       <div>
// //         <Box n="4" />
// //         <Box n="5" />
// //         <Box n="6" />
// //       </div>
// //       <div>
// //         <Box n="7" />
// //         <Box n="8" />
// //         <Box n="9" />
// //       </div>
// //     </div>
// //   );
// // };

// // class App extends Component {
// //   render() {
// //     return (
// //       <>
// //         <div>
// //           <BoxC n="1" l="abc" />
// //           <BoxC n="2" />
// //           <BoxC n="3" />
// //         </div>
// //         <div>
// //           <BoxC n="4" />
// //           <BoxC n="5" />
// //           <BoxC n="6" />
// //         </div>
// //         <div>
// //           <BoxC n="7" />
// //           <BoxC n="8" />
// //           <BoxC n="9" />
// //         </div>
// //       </>
// //     );
// //   }
// // }

// // class App extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1>Class Component</h1>
// //         <Players name="Sachin" loc="Mumbai" />
// //         <Players name="Dhoni" loc="Ranchi" />
// //         <Players name="Kohli" loc="Delhi" />
// //         <Players name="Panth" loc="karnataka" />

// //         <h1>Functional Component</h1>
// //         <PlayersF name="Sachin" loc="Mumbai" />
// //         <PlayersF name="Dhoni" loc="Ranchi" />
// //       </div>
// //     );
// //   }
// // }

// const App = () => {
//   return (
//     <div>
//       {/* <Parent />; */}
//       {/* <Parent /> */}
//       {/* <Parent /> */}
//       {/* <Count /> */}
//       {/* <CountF /> */}
//       {/* <TakeTheDataFromInput /> */}
//       {/* <TakeTheDataC /> */}
//       {/* <ControllledOnChange /> */}
//       {/* <ContextExample /> */}
//       {/* <ContextAPIExample /> */}
//       {/* <MyContext /> */}
//       {/* <LifeCycleMethod myName="StepUp" loc="karnataka" /> */}
//       {/* <LifeCycleUpdating color="green" /> */}
//       {/* <LifeCycleUnMounting />
//       <Players1 name="sachin" loc="mumbai" />
//       <Players1 /> <Players1 /> */}
//       {/* <ErrorHandling /> */}
//       {/* <ContextAPIExample /> */}
//       {/* <ReactPureComponent /> */}
//       {/* <ArgumentsOfSetState /> */}
//       {/* <ArgumentOfSetStateCB /> */}
//       {/* <Parent /> */}
//       {/* <Parent /> */}
//       {/* <ComponentDidMountAjax /> */}
//       {/* <UseEffectComponentDidMount /> */}
//       {/* <UseEffectComponentDidUpdate /> */}
//       {/* <ComponentWillUnmountUseEffect /> */}
//       {/* <OrderedList /> */}
//       {/* <UnorderedOrdered /> */}
//       {/* <DropDown /> */}
//       {/* <PlayerInfo /> */}
//       {/* <TableList /> */}
//       {/* <ListKeysComponent /> */}
//       {/* <DropDown /> */}
//       <DropDown1 />
//       <DropDown2 />
//       <DropDown3 />
//       <GenericDropDown data={["India", "Pak", "US"]} />
//       <GenericDropDown data={["Red", "Blue", "Green"]} />
//       <GenericDropDown />
//       <GenericResuableClass data={["Sachin", "Dhoni"]} />
//       <GenericResuableClass data={["React", "Angular"]} />
//       <OrderedResualbeComponent data={["India", "Pak", "US"]} />
//       <OrderedResualbeComponent data={["Red", "Blue", "Green"]} />
//       <InputReusuable label="Name" />
//       <InputReusuable label="PASSWORD" type="password" />
//       <p>
//         <InputClassResualbe type="email" lbl="Email" />
//       </p>
//       <TableReusuable
//         headers={["NAME", "LOC", "RUNS"]}
//         data={[{name: "Sachin", loc: "Mumbai", runs: "10"}]}
//         keys={["name", "loc", "runs"]}
//       />
//       <p>
//         <TableReusuable
//           headers={["sweets", "flowers"]}
//           data={[{sweet: "JAMUN", flower: "ROSE"}]}
//           keys={["sweet", "flower"]}
//         />
//       </p>
//       <ParentComp />
//     </div>
//   );
// };

// export default App;

const App = () => {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
};

export default App;
