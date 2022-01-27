import './css/style.css';
import Intro from './components/intro';
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';
import Footer from './components/footer';
import Contact from './components/contact';
import NavBar from './components/navbar';
import React from 'react';
import WOW from 'wowjs';

class App extends React.Component {

  // Defining WOW 
  componentDidMount() {
    new WOW.WOW({
      live: false,
      mobile: false,    
  }).init();
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>

    );
  }
}

export default App;
