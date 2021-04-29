import React, {Component} from 'react' 
class Widecard extends Component {
    render() {
        return (
            <div class="widecard">
                <div>
                    <h3>{
                        this.props.title
                    }</h3>
                    <h4>
                        {
                        this.props.where
                    }</h4>
                    <h4>
                        {
                        this.props.from
                    }
                        - {
                        this.props.to
                    }</h4>
                    <p class="description">{
                        this.props.description
                    }
                    </p>
                    <h4>Kurser</h4>
                    <p>Programmeringsteknik C#</p>
                    <p>Databaser med SQL</p>
                    <p>Webutveckling Frontend</p>
                    <p>Dataåtkomster i .Net</p>
                    <p>Webbutveckling Backend</p>
                    <p>Utveckling av molnbaserade applikationer</p>
                    <p>Producera och leverera mjukvara</p>
                </div>
            </div>
        )
    }
}
export default Widecard
