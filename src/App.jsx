import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
const reactDescriptions = ["Fundamental", "Crucual", "Core"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description =
    reactDescriptions[getRandomInt(reactDescriptions.length - 1)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
function CoreConcept({ title, description, img }) {
  return (
    <li>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
function App() {
  const coreConcepts = CORE_CONCEPTS.map((data) => (
    <CoreConcept
      title={data.title}
      description={data.description}
      img={data.image}
    />
  ));
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>core concepts</h2>
          <ul>{coreConcepts}</ul>
        </section>
      </main>
    </div>
  );
}

export default App;
