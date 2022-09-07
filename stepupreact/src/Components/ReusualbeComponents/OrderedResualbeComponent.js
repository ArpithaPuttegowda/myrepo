import React from "react";

export const OrderedResualbeComponent = ({data}) => {
  return (
    <div>
      <ol>
        {data?.map((v, i) => {
          return <li>{v}</li>;
        })}
      </ol>
    </div>
  );
};
