import React, {useEffect, useState} from "react";

export const UseEffectComponentDidUpdate = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("dhoni");

  //componentDidupate,it will call for only count change
  useEffect(() => {
    console.log(count, "count");
  }, [count]);

  //componentDidUpdate , it will call for all state changes or prop changes
  useEffect(() => {
    alert("name got changed");
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>inc count</button>
      <button onClick={() => setName("sachin")}>change name</button>
    </div>
  );
};
