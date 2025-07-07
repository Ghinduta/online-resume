import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css"; 

const HERO_NAME = "Ana Ghindariu";
const HERO_TITLES = [
  "Senior Software Engineer (Specializing in .NET Ecosystem)",
  "Data-Driven Development Enthusiast",
  "Python Aficionado",
  "React Explorer",
  "Cloud Technology Advocate"
];

const HERO_BUTTON_TEXT = "Contact Me";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % HERO_TITLES.length);
        setFading(false);
      }, 400); // match fade-out duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="arlo_tm_section arlo_tm_hero">
      <div className="content">
        <h3 className="name" style={{ color: "#348aa7" }}>{HERO_NAME}</h3>
        <div className={styles.animateText}>
          <span className={`${styles.text} ${fading ? styles.fadeOut : styles.fadeIn}`}>
            {HERO_TITLES[index]}
          </span>
        </div>
        <div className="arlo_tm_button" data-position="center">
          <a className="anchor" href="#contact">
            <span>{HERO_BUTTON_TEXT}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
