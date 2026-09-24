
const aboutData = {
  id: "intro",
  title: "About",
  heading: "Hi there! I'm Ana!",
  paragraphs: [
    `Senior .NET engineer with 10+ years turning early-stage and legacy backends into production-ready systems on Azure and AWS, with reliable integrations, clean data and sensible cloud bills. My latest engagement added a team-wide move to guarded, spec-driven, AI-assisted delivery that ships faster without lowering the bar, alongside team organization and cross-team coordination.`,
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
