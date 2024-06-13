import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Collaborations from "./components/Collaborations";

function App() {
  return (
    <div className="w-full pb-[50px]">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Collaborations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
