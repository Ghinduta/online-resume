
const aboutData = {
  id: "intro",
  title: "About",
  heading: "Hi there! I'm Ana!",
  paragraphs: [
    `Senior .NET engineer with 10+ years designing and building scalable backend systems — from greenfield builds to legacy modernization, across monolithic and cloud-native microservices architectures. Currently pioneering AI-augmented development workflows to ship faster with higher quality, while contributing to team organization and cross-team coordination.`,
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
