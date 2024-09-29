import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-800">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Full-screen Hero Section */}
      <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-r from-pink-300 via-purple-200 to-pink-300">
        <Hero />
      </div>

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
