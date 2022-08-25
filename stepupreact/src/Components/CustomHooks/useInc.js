import {useState} from "react";

export const useInc = () => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  return [count, handleInc];
};
