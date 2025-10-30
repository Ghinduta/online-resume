import React from "react";
import styles from "./Hero.module.css";

const HERO_NAME = "Ana Ghindariu";
const HERO_TAGLINE = "Senior Software Engineer | .NET Specialist";
const HERO_INTRO = "I am a senior .NET developer specializing in full-lifecycle software development, from enhancing legacy systems to architecting greenfield projects. My work spans C#, ASP.NET Core, Python, and Elasticsearch, often integrating AI and agentic frameworks to automate and optimize workflows.";
const KEY_SKILLS = [".NET Core", "C#", "Python", "AWS", "React", "Elasticsearch", "AI Integration"];
const CV_LINK = "/GhindariuCV.pdf";

const Hero = () => {
  return (
    <section id="home" className="arlo_tm_section">
      <div className={styles.heroContainer}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="arlo_tm_main_title">
              <h3>Hi there! I'm Ana!</h3>
            </div>
            <p className={styles.introText}>{HERO_INTRO}</p>
            <div className={styles.keySkills}>
              <h4 className={styles.skillsLabel}>Key Skills</h4>
              <div className={styles.skillsBadges}>
                {KEY_SKILLS.map((skill, idx) => (
                  <span key={idx} className={styles.skillBadge}>{skill}</span>
                ))}
              </div>
            </div>
            <div className={styles.heroButtons}>
              <a className={styles.primaryButton} href="#contact">
                <span>Contact Me</span>
              </a>
              <a className={styles.primaryButton} href={CV_LINK} download>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
