import React from "react";
import aboutBg from './images/ana.jpg';


const About = () => (
  <section id="intro" className="arlo_tm_section">
    <div className="arlo_tm_about">
      <div className="container">
        <div className="about_inner">
        
          <div className="center">
            <div className="arlo_tm_main_title">
              <span>About</span>
              <h3>Hi there! I'm Ana!</h3>
            </div>
          <div className="text">
  <p>
    I’m passionate about building safe, trustworthy systems that make a real difference. 
    I’ve spent my career honing my skills to contribute to projects that align with my values—especially those 
    that help advance human understanding or tackle meaningful, real-world challenges.
  </p>
  <p>
    I care deeply about designing systems that are reliable, fault-tolerant, and efficient—no matter the scale of the data. 
    I love staying up to date with the latest technologies and using them to create solutions that are not only innovative but built to last.
  </p>
</div>
            <div className="arlo_tm_button" data-position="left">
              <a href="/img/cv/1.jpg" download>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;