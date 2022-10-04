import {useReducer} from "react";
import {useSelector} from "react-redux";
import "./App.css";
import {A} from "./Components/A";
import {B} from "./Components/B";
import {C} from "./Components/C";
import ReduxSampleClass from "./Components/ClassCompRedux/ReduxSampleClass";
import {ctx} from "./Components/ExampleUseReducer/createContex";
import {ExampleUserReducer} from "./Components/ExampleUseReducer/ExampleUserReducer";
import {IncDecCount} from "./Components/ExampleUseReducer/IncDecCount";
import {initData} from "./Components/ExampleUseReducer/initData";
import {NameLoc} from "./Components/ExampleUseReducer/NameLoc";
import {reducer} from "./Components/ExampleUseReducer/reducer";
import {RenderData} from "./Components/ExampleUseReducer/RenderData";
import {GetData} from "./Components/GetData";
import {RenderPosts} from "./Components/RenderPosts";
import {AjaxExample} from "./ReduxToolkit/AjaxExample";
import {ReduxToolKitSample} from "./ReduxToolkit/ReduxToolKitSample";
import {Registration} from "./ReduxToolkit/Registration";
import {UpdateColor} from "./ReduxToolkit/UpdateColor";

function App() {
  // const state = useSelector((state) => state);
  const [state, dispatch] = useReducer(reducer, initData);

  return (
    <div>
      {/* <A />
      <B />
      <C />
      <GetData />
      <RenderPosts /> */}
      {/* <ReduxSampleClass /> */}
      {/* <ReduxToolKitSample /> */}
      {/* <AjaxExample /> */}
      {/* <Registration /> */}
      {/* <UpdateColor /> */}
      {/* <h1>Updated color...{state.updateColorReducer.color}</h1> */}
      {/* <IncDecCount /> */}
      {/* <ExampleUserReducer /> */}
      <ctx.Provider value={[state, dispatch]}>
        <RenderData />
      </ctx.Provider>
    </div>
  );
}

export default App;
