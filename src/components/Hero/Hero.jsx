import React, { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { HERO_INTRO } from "./heroData";

const HERO_NAME = "Ana Ghindariu";
const HERO_TAGLINE = "Senior Software Engineer | .NET & Azure | AI-Augmented Development";
const KEY_SKILLS = [".NET / C#", "Azure", "Microservices", "CQRS", "Terraform", "AI-Assisted Development"];
const CV_LINK = "/cv.html";
const CV_PDF_LINK = "/GhindariuCV.pdf";

const useTypewriter = (text, speed = 30) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      indexRef.current += 1;
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) {
        setDone(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayed, done };
};

const Hero = () => {
  const { displayed, done } = useTypewriter(HERO_INTRO, 15);

  return (
    <section id="home" className="arlo_tm_section">
      <div className={styles.heroContainer}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="arlo_tm_main_title">
              <h3>Hi there! I'm Ana!</h3>
            </div>
            <p className={styles.introText}>
              {displayed}
              {!done && <span className={styles.cursor}>|</span>}
            </p>
            <div className={styles.keySkills}>
              <h4 className={styles.skillsLabel}>Key Skills</h4>
              <div className={styles.skillsBadges}>
                {KEY_SKILLS.map((skill, idx) => (
                  <span key={idx} className={styles.skillBadge}>{skill}</span>
                ))}
              </div>
              <a href="#skills" className={styles.skillsLink}>See full skills breakdown →</a>
            </div>
            <div className={styles.heroButtons}>
              <a className={styles.primaryButton} href="#contact">
                <span>Contact Me</span>
              </a>
              <a className={styles.primaryButton} href={CV_LINK} target="_blank" rel="noopener noreferrer">
                <span>View CV</span>
              </a>
              <a className={styles.primaryButton} href={CV_PDF_LINK} download="Ana-Ghindariu-CV.pdf">
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
