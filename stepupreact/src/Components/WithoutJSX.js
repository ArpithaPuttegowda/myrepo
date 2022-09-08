import React from "react";

export const WithoutJSX = () => {
  return React.createElement(
    "div",
    {id: "myName", className: "name"},
    "Sachin Tendulkar"
  );
};

export const WithoutJSX1 = () => {
  return React.createElement(WithoutJSX, {name: "dhoni"}, "Ranchi");
};

//<div id="myName" className="name">Sachin Tendulkar</div>
