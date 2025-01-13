import AboutMe from './components/AboutMe';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Companies from './components/Companies';
import ContactUs from './components/Contact';
import Footer from './components/Footer';
import Skill from './components/Skill';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="home">
        <Home />
      </div>
      <div id="aboutme">
        <AboutMe />
      </div>
      <div id="skills">
        <Skill />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="companies">
        <Companies />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
