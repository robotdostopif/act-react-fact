import React, { Component } from "react";
class Navitem extends Component {
  render() {
    return (
      <li id={this.props.name}>
          {this.props.name}
      </li>
    );
  }
}
export default Navitem;
