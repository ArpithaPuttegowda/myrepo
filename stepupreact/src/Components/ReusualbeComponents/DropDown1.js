import React from "react";

export const DropDown1 = () => {
  const countryList = ["India", "Pak", "US"];
  return (
    <div>
      <select>
        {countryList.map((v, i) => {
          return <option key={i}>{v}</option>;
        })}
      </select>
    </div>
  );
};
