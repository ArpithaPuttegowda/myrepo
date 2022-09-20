import "./App.css";
import {A} from "./Components/A";
import {B} from "./Components/B";
import {C} from "./Components/C";
import {GetData} from "./Components/GetData";
import {RenderPosts} from "./Components/RenderPosts";

function App() {
  return (
    <div>
      <A />
      <B />
      <C />
      <GetData />
      <RenderPosts />
    </div>
  );
}

export default App;
