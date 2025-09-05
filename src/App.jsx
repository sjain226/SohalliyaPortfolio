import React, { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import LoadingScreen from "./components/LoadingScreen";
import EasterEggs from "./components/EasterEggs";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-800">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
                        {/* Easter Eggs */}
                  <EasterEggs isLoading={isLoading} />

      {/* Fixed Navbar */}
      <Navbar />

      {/* Full-screen Hero Section */}
      <Hero />

        {/* About Section */}
        <div id="about" className="h-full w-full">
          <About />
        </div>

        {/* Technologies Section */}
        <div className="h-full w-full">
          <Technologies />
        </div>

        {/* Experience Section */}
        <div id="experience" className="h-full w-full">
          <Experience />
        </div>

        {/* Projects Section */}
        <div id="projects" className="h-full w-full">
          <Projects />
        </div>

        {/* Contact Section */}
        <div id="contact" className="h-full w-full">
          <Contact />
        </div>
    </div>
  );
}

export default App;
