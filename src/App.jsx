import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <div className="w-full pb-[100px]">
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <About />
    </div>
  );
}

export default App;
