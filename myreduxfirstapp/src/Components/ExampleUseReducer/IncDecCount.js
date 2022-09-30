import React, {useState} from "react";

export const IncDecCount = () => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  return (
    <div>
      Count:{count}
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
};
