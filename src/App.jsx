import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import News from "./components/News";
import Contact from "./components/Contact";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import MobileMenu from "./components/layout/MobileMenu";

function App() {
  return (
    <div className="arlo_tm_all_wrap" data-magic-cursor="show">
      <MobileMenu />
      <Sidebar />
      <main className="arlo_tm_mainpart">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <News />
        <Contact />
      </main>
    </div>
  );
}

export default App;
