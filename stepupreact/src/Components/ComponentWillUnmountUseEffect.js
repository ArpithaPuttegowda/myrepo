import React, {useEffect, useState} from "react";

export const ComponentWillUnmountUseEffect = () => {
  const [isChild, setIsChild] = useState(true);
  return (
    <div>
      {isChild && <Child />}
      <button onClick={() => setIsChild(!isChild)}>Toggle</button>
    </div>
  );
};

const Child = () => {
  let id;
  useEffect(() => {
    id = setInterval(() => console.log("StepUp"), 5000);
  }, []);
  useEffect(() => {
    return () => {
      clearInterval(id);
    };
  }, []);
  return <h1>I'm child component</h1>;
};
