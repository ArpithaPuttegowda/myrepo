import React, {useEffect, useState} from "react";

export const UseEffectComponentDidMount = () => {
  const [count, setCount] = useState(0);

  //componentDidMount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {method: "get"})
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res, "success res");
      })
      .catch((res) => {
        console.log(res, "failure RES");
      });
  }, []);

  return (
    <div>
      UseEffectComponentDidMount
      <button onClick={() => setCount(count + 1)}>Inc count{count}</button>
    </div>
  );
};
