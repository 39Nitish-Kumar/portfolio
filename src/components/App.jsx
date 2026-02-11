import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  console.log("App component rendered");
  return (
    <div className="bg-[#1a1b26] min-h-screen text-[#a9b1d6] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      {/* Footer is now inside Contact component for better layout flow */}
    </div>
  );
}

export default App;
