import React from "react";

export const DropDown = () => {
  const data = ["India", "pak", "china", "US"];
  return (
    <div>
      <select>
        {data.map((v, i) => {
          return <option key={v + i}>{v}</option>;
        })}
      </select>
    </div>
  );
};
