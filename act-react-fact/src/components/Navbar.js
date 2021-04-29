import React, {Component} from 'react';
import Navitem from './Navitem';
import {Link} from 'react-scroll'
class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <Link activeClass="active" to="home" spy={true} smooth={true}><Navitem name="Om" ></Navitem></Link>
                    <Link to="education" spy={true} smooth={true}><Navitem name="Utbildning"></Navitem></Link>
                    <Link to="skills" spy={true} smooth={true}><Navitem name="Kunskaper"></Navitem></Link> 
                    <Link to="contact" spy={true} smooth={true}><Navitem name="Kontakta mig"></Navitem></Link>
                </ul>
            </nav>
        )
    }
}
export default Navbar
