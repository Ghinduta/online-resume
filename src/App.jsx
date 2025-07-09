import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import JobHistory from "./components/Jobs/Jobs";
import News from "./components/Projects";
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
        <JobHistory />
        <Education />
        <News />
        <Contact />
      </main>
    </div>
  );
}

export default App;
