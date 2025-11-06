import React, { useState } from 'react';
import './JobHistory.css'; // Optional: your styles

const jobData = [
  {
    jobTitle: "Senior Software Engineer, Qiagen (May 2019 – Present)",
    techStack: [
      ".NET Framework",
      ".NET Core",
      "C#",
      "Python",
      "DevExpress",
      "PostgreSQL",
      "SQLite",
      "Elasticsearch",
      "AWS",
      "CI/CD",
      "ETL",
      "Unit Testing"
    ],
    responsibilities: [
      {
        category: "Legacy System ",
        items: [
          "Expanded frameworks for single-cell data analysis, developing storage infrastructure and visualization components for large datasets",
          "Integrated bioinformatics tools into cloud-based pipelines and restructured AWS components",
          "Laid the groundwork for unit testing, automated integration pipelines, and CI pipelines; monitored cloud and on-premise infrastructure"
        ]
      },
      {
        category: "Greenfield Projects",
        items: [
          "Designed and delivered two new systems, including an MVP that evolved into a full solution, while migrating core functionalities from legacy monoliths",
          "Built Elasticsearch-based data interrogation and ETL pipelines for data migration and transformation",
          "Implemented caching mechanisms to improve performance and ensured accurate content version tracking",
          "Led requirement gathering, translated business needs into technical design, facilitated Scrum ceremonies, and coordinated across development, QA, and product teams"
        ]
      }
    ],
    description: [
      "Qiagen has been a cornerstone in helping me see how software systems can enable efficient understanding of massive data from numerous sources, leveraging new insights in molecular diagnosis and drug discovery fields. My contribution to Omicsoft, a complete cloud-enabled NGS analytics product, has been as an engineering member, while also an active liaison between the processing, development, and QA teams.",
      "As a senior software engineer, I worked on expanding the existing framework for single cell data analysis, developing customized storage infrastructure, improving the efficiency of processing solutions, and implementing graphical components to visualize large volumes of data. I also contributed to integrating numerous bioinformatics tools into cloud-based analysis pipelines and restructuring parts of the AWS integration.",
      "I had the chance to lay the groundwork for unit testing, automated integration pipelines, CI pipelines, and to restructure and monitor the AWS development infrastructure. My experience spans cloud, on-premise, and SaaS deployments, in both Windows and Linux environments.",
      "Building on this experience, I had the opportunity to design and deliver two greenfield projects, including an MVP that evolved into a full solution, while transitioning core functionalities from a legacy monolith system. I set up Elasticsearch-based data interrogation, designed ETL pipelines for migrating and transforming data, and implemented caching mechanisms to improve performance.",
      "Working at Qiagen gave me the opportunity to grow my skills in requirement gathering, feature analysis across multidisciplinary teams, architecture and scalability design, system integration, complex solution development, and deployment on multiple operating systems — and, most importantly, to collaborate with a wide variety of talented professionals."
    ]
  },
  {
    jobTitle: "NET Software Developer and Co-founder, RiseTech (Sep. 2017 – Feb. 2019)",
    jobDescription: `
      Primarily focused on technical processes while also actively engaging with clients to provide business analysis, solution design, and support for their digital solutions.

      Developed and oversaw the architecture of RaBit, a product aimed at small and medium-sized companies to facilitate objective-focused management. Managed project delivery and quality control while contributing to technical and UI/UX vision.

      Other projects included developing a custom ERP warehouse management tool using Asp.Net Web API and Android mobile solutions, as well as an online consulting platform.
    `,
  },
  {
    jobTitle: "Software Developer, Pitech+Plus (Sep 2017 - May 2019)",
    jobDescription: `
      Managed and supported various .NET projects (ASP.NET MVC, ASP.NET/CORE WEBAPI, and Xamarin).

      Designed and maintained SQL Server databases. Developed front-end and back-end features, analyzed code, and performed unit testing using NUnit and Moq.

      Documented applications and conducted Xamarin-Forms and Xamarin-Android workshops.
    `,
  },
];

const JobHistory = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="arlo_tm_section" id="work experience">
      <div className="arlo_tm_faq">
        <div className="container">
          <div className="arlo_tm_main_title">
            <span>Experience</span>
            <h3>My Professional Journey</h3>
          </div>
          <div className="accordion_wrap">
            {jobData.map((item, index) => (
              <div className={`accordion ${activeIndex === index ? 'active' : ''}`} key={index}>
                <div
                  className="accordion_header"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={`plus ${activeIndex === index ? 'open' : ''}`}></span>
                  <p>{item.jobTitle}</p>
                </div>
                {activeIndex === index && (
                  <div className="accordion_content">
                    {item.responsibilities ? (
                      <>
                        <div className="job-section">
                          <h4 className="section-title">Tech Stack</h4>
                          <div className="tech-stack">
                            {item.techStack.map((tech, idx) => (
                              <span key={idx} className="tech-badge">{tech}</span>
                            ))}
                          </div>
                        </div>
                        <div className="job-section">
                          <h4 className="section-title">Responsibilities</h4>
                          {Array.isArray(item.responsibilities) && item.responsibilities.length > 0 && (
                            typeof item.responsibilities[0] === 'object' && item.responsibilities[0].category ? (
                              item.responsibilities.map((respGroup, idx) => (
                                <div key={idx} className="responsibility-group">
                                  <h5 className="responsibility-category">{respGroup.category}</h5>
                                  <ul className="responsibilities-list">
                                    {respGroup.items.map((item, itemIdx) => (
                                      <li key={itemIdx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))
                            ) : (
                              <ul className="responsibilities-list">
                                {item.responsibilities.map((resp, idx) => (
                                  <li key={idx}>{resp}</li>
                                ))}
                              </ul>
                            )
                          )}
                        </div>
                        {item.description && (
                          <div className="job-section">
                            <h4 className="section-title">Overview</h4>
                            {Array.isArray(item.description) ? (
                              item.description.map((paragraph, idx) => (
                                <p key={idx} className="job-description">{paragraph}</p>
                              ))
                            ) : (
                              <p className="job-description">{item.description}</p>
                            )}
                          </div>
                        )}
                      </>
                    ) : (
                      <p style={{ whiteSpace: 'pre-line' }}>{item.jobDescription.trim()}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHistory;
