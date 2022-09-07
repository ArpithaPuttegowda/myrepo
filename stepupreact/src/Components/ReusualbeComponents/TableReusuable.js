import React, {Component} from "react";

export default class TableReusuable extends Component {
  render() {
    return (
      <div>
        <table border="1px solid">
          <thead>
            <tr>
              {this.props.headers?.map((v, i) => {
                return <th>{v}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.data?.map((obj) => {
              return (
                <tr>
                  {this.props.keys?.map((k) => {
                    return <td>{obj[k]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
