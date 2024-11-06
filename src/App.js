import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
    </div>
  )
}

export default App;