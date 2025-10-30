
const aboutData = {
  id: "intro",
  title: "About",
  heading: "Hi there! I'm Ana!",
  paragraphs: [
    `I am a senior .NET developer specializing in full-lifecycle software development, from enhancing legacy systems to architecting greenfield projects. My work spans C#, ASP.NET Core, Python, and Elasticsearch, often integrating AI and agentic frameworks to automate and optimize workflows. I also contribute to team organization, acting as a liaison between multiple teams and implementing Scrum practices to drive project efficiency. I focus on building scalable, fault-tolerant systems that are maintainable and high-performing.`,
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
