import React, {Component} from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
    render() {
        return (
            <div id="education" className="condiv">
                <h1 className="subtopic">Utbildning</h1><Widecard title=".Netutvecklare" where="Teknikhögskolan, Göteborg" from="Augusti 2019" to="Nuvarande" description="Två-årig Yrkeshögskoleutbildning inom systemutveckling med inriktning på .Net där vi har arbetat med C#, SQL, JS, Docker och molntjänster."/>
                </div>
        )
    }
}
export default Education
