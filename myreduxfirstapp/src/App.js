import "./App.css";
import {A} from "./Components/A";
import {B} from "./Components/B";
import {C} from "./Components/C";
import ReduxSampleClass from "./Components/ClassCompRedux/ReduxSampleClass";
import {GetData} from "./Components/GetData";
import {RenderPosts} from "./Components/RenderPosts";
import {AjaxExample} from "./ReduxToolkit/AjaxExample";
import {ReduxToolKitSample} from "./ReduxToolkit/ReduxToolKitSample";
import {Registration} from "./ReduxToolkit/Registration";

function App() {
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
      <Registration />
    </div>
  );
}

export default App;
