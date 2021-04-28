import React, {Component} from 'react';
import Navitem from './Navitem';
import NavBar, { ElementsWrapper } from 'react-scrolling-nav';
class Navbar extends Component {
    render() {
        const navbarItems = [{
            label: "Home",
            target: "home"
        }, {
            label: "Education",
            target: "education"
        }, {
            label: "Skills",
            target: "skills"
        }, {
            label: "Contact",
            target: "contact"
        }, {
            label: "Item 5",
            target: "item-5"
        }]
        return (
            <nav>
                <ul>
                    <Navitem name="Home" ></Navitem>
                    <Navitem name="Education"></Navitem>
                    <Navitem name="Skills"></Navitem>
                    <Navitem name="Contact"></Navitem>
                </ul>
            </nav>
        )
    }
}
export default Navbar
