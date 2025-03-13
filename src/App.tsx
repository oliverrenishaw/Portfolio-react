import React from 'react';
import './App.css';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Resume from './sections/Resume';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="pt-16">
        <section id="Home">
          <Hero />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Resume">
          <Resume />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default App;