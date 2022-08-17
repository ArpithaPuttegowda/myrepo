import React, {createRef, useRef, useState} from "react";

export const TakeTheDataFromInput = () => {
  const [result, setResult] = useState(100);
  const [cls, setCls] = useState("cr");
  const n1Ref = createRef(null);
  const n2Ref = createRef(null);
  const n3Ref = useRef(null);
  const handleSum = () => {
    let n1 = n1Ref.current.value;
    let n2 = n2Ref.current.value;
    let n3 = n3Ref.current.value;
    n1Ref.current.value = "";
    n2Ref.current.value = "";
    n3Ref.current.value = "";
    let sum = Number(n1) + Number(n2) + Number(n3);
    setResult(sum);
    setCls(sum > 100 ? "cb" : "cp");
  };
  return (
    <div>
      <p>
        <b>No 1:</b>
        <input ref={n1Ref} />
      </p>
      <p>
        <b>No 2:</b>
        <input ref={n2Ref} />
      </p>
      <p>
        <b>No 3:</b>
        <input ref={n3Ref} />
      </p>
      <p>
        <button onClick={handleSum}>Sum</button>
      </p>
      <h1 style={{color: result > 100 ? "red" : "green"}}>SUM :{result}</h1>
      <h1 className={result > 100 ? "cb" : "cp"}>RESULT:{result}</h1>
      <h1 className={cls}>RESULT:{result}</h1>
    </div>
  );
};
