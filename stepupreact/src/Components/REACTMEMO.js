import React, {useState} from "react";

export const ParentComp = () => {
  const [count, setCount] = useState(0);
  alert("parent called");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc count</button>
      <h1>{count}</h1>
      <ChildNew />
    </div>
  );
};

const Child = () => {
  alert("child called");
  return <div>Child Component</div>;
};

let ChildNew = React.memo(Child);
