import React from "react";

export const PlayerInfo = () => {
  const playerInfo = {
    name: "sachin",
    loc: "mumbai",
    runs: 10,
    pinCode: 123
  };
  return (
    <div>
      {Object.values(playerInfo).map((v, i) => {
        return <h1 key={v + i}>{v}</h1>;
      })}
    </div>
  );
};
