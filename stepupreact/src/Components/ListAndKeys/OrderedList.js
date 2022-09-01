import React, {Component} from "react";

export default class OrderedList extends Component {
  render() {
    let data = ["Dravid", "Sewag", "sachin", "dhoni", "kohli", "Panth"];
    return (
      <div>
        {data.map((v, i) => {
          return <div key={i + v}>{v}</div>;
        })}
      </div>
    );
  }
}
