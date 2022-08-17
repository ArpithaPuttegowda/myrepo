import React, {Component} from "react";

export default class ControllledOnChange extends Component {
  constructor() {
    super();
    this.myData = {};
  }
  handleClick = () => {
    console.log(this.myData);
  };
  handleChange = (e) => {
    let k = e.target.id;
    let v = e.target.value;
    this.myData = {
      ...this.myData,
      [k]: v
    };
  };
  render() {
    return (
      <div>
        <p>
          <b>Name:</b>
          <input id="name" onChange={this.handleChange} />
        </p>
        <p>
          <b>Password:</b>
          <input id="pwd" type="password" onChange={this.handleChange} />
        </p>
        <p>
          <b>Email:</b>
          <input id="email" onChange={this.handleChange} />
        </p>
        <p>
          <input
            onClick={this.handleClick}
            type="button"
            value="Registration"
          />
        </p>
      </div>
    );
  }
}
