import React from "react";

export const TableList = () => {
  const myHeaderData = ["Name", "Location", "Runs"];
  const data = [
    {name: "sachin", loc: "mumbai", runs: 10},
    {name: "dhoni", loc: "ranchi", runs: 10},
    {name: "kohli", loc: "delhi", runs: 10},
    {name: "sewag", loc: "delhi", runs: 10}
  ];

  return (
    <div>
      <table border="1px solid">
        <thead>
          <tr>
            {myHeaderData.map((header, i) => {
              return <th>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((obj) => {
            return (
              <tr>
                <td>{obj.name}</td>
                <td>{obj.loc}</td>
                <td>{obj.runs}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
