import React from "react";
import styles from "./Hero.module.css";

const HERO_NAME = "Ana Ghindariu";
const HERO_TAGLINE = "Senior Software Engineer | .NET & Azure | AI-Augmented Development";
const HERO_INTRO = "Senior .NET engineer with 10+ years building scalable backend systems — from legacy modernization to cloud-native microservices on Azure. Currently pioneering AI-augmented development workflows to ship faster with higher quality.";
const KEY_SKILLS = [".NET / C#", "Azure", "Microservices", "CQRS", "Terraform", "AI-Assisted Development"];
const CV_LINK = "/cv.html";

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
              <a href="#skills" className={styles.skillsLink}>See full skills breakdown →</a>
            </div>
            <div className={styles.heroButtons}>
              <a className={styles.primaryButton} href="#contact">
                <span>Contact Me</span>
              </a>
              <a className={styles.primaryButton} href={CV_LINK} target="_blank" rel="noopener noreferrer">
                <span>View CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
