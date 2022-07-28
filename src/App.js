import About from "./components/About";
import AllinOne from "./components/AllinOne";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Support from "./components/Support";
import logo from "./logo.svg";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllinOne />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
