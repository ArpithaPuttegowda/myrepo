import React from "react";

export const DropDown3 = () => {
  const sweetList = ["Jamun", "Jilebi"];
  return (
    <div>
      <select>
        {sweetList.map((v, i) => {
          return <option key={i}>{v}</option>;
        })}
      </select>
    </div>
  );
};
