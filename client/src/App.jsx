


import AboutMe from './components/AboutMe';
import  Home  from './components/Home';
import NavBar from './components/NavBar';
import Companies from './components/Companies';
import ContactUs from './components/Contact';
import Footer from './components/Footer';
import Skill from './components/Skill'
import  Portfolio  from './components/Portfolio';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Skill/>
      <Portfolio />
      <Companies/>
      <ContactUs/>
      <Footer/>
      
    
    
    </div>
  );
}

export default App;
