import React from "react";

export const TakeTheDataOnchange = () => {
  let myObj = {};
  const handleSubmit = () => {
    console.log(myObj, "final data");
  };
  const handleChange = (e) => {
    let val = e.target.value;
    let key = e.target.id;
    myObj = {
      ...myObj,
      [key]: val
    };
    console.log(myObj);
  };
  return (
    <div>
      <p>
        NAME
        <input id="name" onChange={handleChange} />
      </p>
      <p>
        LOC <input id="loc" onChange={handleChange} />
      </p>
      <p>
        RUNS
        <input id="runs" onChange={handleChange} />
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
