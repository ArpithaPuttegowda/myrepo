import React, {useState, useCallback} from "react";

export const UseCallbackReact = () => {
  alert("parent called");
  const [count, setCount] = useState(0);
  const myFn = useCallback(() => {}, []);
  return (
    <div>
      <h1>I'm Parent</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h1>{count}</h1>
      <Child fn={myFn} />
    </div>
  );
};

const Child = React.memo(({fn}) => {
  alert("child called");
  return <h1>I'm child</h1>;
});
