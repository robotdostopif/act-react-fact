import React, {Component} from 'react' 
import Skillitem from './Skillitem';
class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'myskills': [
                '.NET CORE C#',
                'Azure Cloud',
                'Docker',
                'Git',
                'HTML/CSS',
                'JavaScript',
                'MongoDB',
                'Python',
                'SQL'
            ]
        };
    }
    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">Färdigheter</h1>
                <ul>{
                    this.state.myskills.map((value) => {
                    return <Skillitem data={value}></Skillitem>
                })
                }</ul>
            </div>
        )
    }
}
export default Skills