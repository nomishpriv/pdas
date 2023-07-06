import Profilecard from "./Profilecard";
import Alexaimage from './images/alexa.png';
import Cortanaimage from './images/cortana.png';
import Siriimage from './images/siri.png';
import 'bulma/css/bulma.css';
function App() {

     return <div>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">Personal Digial Assistants</p>
            </div>
        </section>
        <div className="container">
            <div className="section">
                <div className="columns">
                    <div className="column is-4">
                        <Profilecard title="Alexa" handle="@alexa99" image={Alexaimage} alt="Alexa" description="Alexa was created by Amazon and helps you buy things." />
                    </div>
                    <div className="column is-4">
                        <Profilecard title="Cortana" handle="@cortana32" image={Cortanaimage} alt="Cortana" description="Cortana was made by Microsoft. Who knows What it does?"/>
                    </div>
                    <div className="column is-4">
                        <Profilecard title="Siri" handle="@Siri01" image={Siriimage} alt="Siri" description="Siri was made by Apple and is being phased out."/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default App;