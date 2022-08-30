import React, {Component} from "react";

export default class ComponentDidMountAjax extends Component {
  render() {
    return <div>mount 5000lines</div>;
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts", {method: "get"})
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res, "success res");
      })
      .catch((res) => {
        console.log(res, "failure RES");
      });
  }
}
