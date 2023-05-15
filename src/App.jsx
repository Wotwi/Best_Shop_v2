import "./styles/main.scss"
import Hero from "./components/Hero.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Benefits from "./components/Benefits.jsx";
import Pricing from "./components/Pricing.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
        <Header />
        <Hero />
        <About />
        <Benefits />
        <Pricing />
        <Contact />
        <Footer />
    </>
  )
}

export default App
