import React from "react";

export const InputReusuable = ({label, type}) => {
  return (
    <div>
      {label}: <input type={type} />
    </div>
  );
};
