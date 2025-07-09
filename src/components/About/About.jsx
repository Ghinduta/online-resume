
const aboutData = {
  id: "intro",
  title: "About",
  heading: "Hi there! I'm Ana!",
  paragraphs: [
    `I’m passionate about building safe, trustworthy systems that make a real difference. 
     I’ve spent my career honing my skills to contribute to projects that align with my values—especially those 
     that help advance human understanding or tackle meaningful, real-world challenges.`,

    `I care deeply about designing systems that are reliable, fault-tolerant, and efficient—no matter the scale of the data. 
     I love staying up to date with the latest technologies and using them to create solutions that are not only innovative but built to last.`,
  ],
  cvLink: "/GhindariuCV.pdf",
  cvText: "Download CV",
};

const About = () => (
  <section id={aboutData.id} className="arlo_tm_section">
    <div className="arlo_tm_about">
      <div className="container">
        <div className="about_inner">
          <div className="center">
            <div className="arlo_tm_main_title">
              <span>{aboutData.title}</span>
              <h3>{aboutData.heading}</h3>
            </div>
            <div className="text">
              {aboutData.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            <div className="arlo_tm_button" data-position="left">
              <a href={aboutData.cvLink} download>
                <span>{aboutData.cvText}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
