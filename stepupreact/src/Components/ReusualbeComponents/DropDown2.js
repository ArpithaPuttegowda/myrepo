import React from "react";

export const DropDown2 = () => {
  const colorList = ["Red", "Blue", "Green"];
  return (
    <p>
      <select>
        {colorList.map((v, i) => {
          return <option key={i}>{v}</option>;
        })}
      </select>
    </p>
  );
};
