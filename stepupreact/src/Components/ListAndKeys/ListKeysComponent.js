import React from "react";

export const ListKeysComponent = () => {
  const myRows = [1, 2, 3, 4, 5];
  return (
    <div>
      {myRows.map((count) => {
        return <Box count={count} />;
      })}
    </div>
  );
};

const Box = ({count}) => {
  return <h1>Box...{count}</h1>;
};
