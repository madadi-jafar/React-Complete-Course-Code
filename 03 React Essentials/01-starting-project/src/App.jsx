import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/react-core-concepts.png';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const descriptions = reactDescriptions[genRandomInt(2)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {descriptions} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

function CoreConcept() {
    return (
        <li>
            <img src="..." alt="..."/>
            <h3>TITLE</h3>
            <P>DESCRIPTION</P>
        </li>
    )
}


function App() {
    return (
        <div>
            <Header/>

            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        <CoreConcept
                            title="Components"
                            descriptions="The core UI building block."
                            image={componentsImg}
                        />

                        <CoreConcept title={}/>
                        <CoreConcept title={}/>
                        <CoreConcept title={}/>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
