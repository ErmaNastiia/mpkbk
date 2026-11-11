import CursorLight from "./components/CursorLight";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import News from "./components/News";
import Tournaments from "./components/Tournaments";
import Photos from "./components/Photos";
import Videos from "./components/Videos";
// import Sponsors from "./components/Sponsors"; // temporarily hidden
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <CursorLight />

      <Nav />

      <main>
        <Hero />
        <About />
        <News />
        <Tournaments />
        <Photos />
        <Videos />
        {/* <Sponsors /> temporarily hidden */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
