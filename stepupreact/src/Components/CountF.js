import React, {useState} from "react";

export const CountF = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Inc</button>
      <h1>Count:{count}</h1>
    </div>
  );
};
