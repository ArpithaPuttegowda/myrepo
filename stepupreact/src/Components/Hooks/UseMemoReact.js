import React, {useState, useMemo} from "react";

export const UseMemoReact = () => {
  const [count, setCount] = useState(0);
  const delay = useMemo(() => {
    for (let i = 0; i <= 5000000000; i++) {}
    return 10;
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc Count</button>
      <h1>{count}</h1>
      <h1>{delay}</h1>
    </div>
  );
};
