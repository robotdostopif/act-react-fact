import React, {Component} from "react";
class Navitem extends Component {
    render() {
        return (
                <li> {
                    this.props.data
                } </li>

        );
    }
}
export default Navitem;
