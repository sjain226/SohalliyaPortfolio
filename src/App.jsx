import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-800">

          <Navbar />
          <div className="container mx-auto px-8">
            <Hero />
            
            {/* Add scroll-margin-top to the About section */}
            <div id="about" className="scroll-mt-20">
              <About />
            </div>
            
            <Technologies />
            
            {/* Add scroll-margin-top to the Experience section */}
            <div id="experience" className="scroll-mt-20">
              <Experience />
            </div>
            
            {/* Add scroll-margin-top to the Projects section */}
            <div id="projects" className="scroll-mt-20">
              <Projects />
            </div>
            
            {/* Add scroll-margin-top to the Contact section */}
            <div id="contact" className="scroll-mt-20">
              <Contact />
            </div>
          </div>
      </div>

    </div>
  
  );
}

export default App;
