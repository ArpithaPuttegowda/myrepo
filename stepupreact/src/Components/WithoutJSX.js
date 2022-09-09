import React, {createElement} from "react";

export const WithoutJSX = () => {
  return createElement(
    "div",
    {id: "myName", className: "name"},
    "Sachin Tendulkar"
  );
};

export const WithoutJSX1 = () => {
  return React.createElement(WithoutJSX, {name: "dhoni"}, "Ranchi");
};

//<div id="myName" className="name">Sachin Tendulkar</div>
