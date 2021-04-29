import React, {Component} from "react";
class Navitem extends Component {
    render() {
        return (
                <li className="skillitem"> {
                    this.props.data
                } </li>

        );
    }
}
export default Navitem;
