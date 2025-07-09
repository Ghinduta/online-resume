import React, { useState } from 'react';
import './JobHistory.css'; // Optional: your styles

const jobData = [
  {
    jobTitle: "Senior Software Engineer, Qiagen (May 2019 – Present)",
    jobDescription: `
      My experience at Qiagen has allowed me to witness the transformative potential of software systems in efficiently processing and visualizing large amounts of data from various sources. As a result, I have gained invaluable insights into the molecular diagnosis and drug discovery fields and recognize the impact that leveraging these insights can have on improving patient outcomes.

      At Omicsoft, I have been a member of the software engineering team and facilitated collaboration between bioinformatics, development, and QA teams while contributing to the Omicsoft's comprehensive cloud-enabled NGS analytics product suite.

      As a senior software engineer, I undertook the task of expanding the framework for single cell data analysis by customizing the storage infrastructure, optimizing processing solutions, and implementing graphical components to facilitate the visualization of large volumes of data.

      Additionally, I was entrusted with the integration of multiple bioinformatics tools into cloud-based analysis pipelines, as well as restructuring the integration with AWS. I also played a critical role in laying the groundwork for unit testing, automated integration pipelines, CI pipelines, and the restructuring and monitoring of the AWS development infrastructure.

      My latest contribution involved leading the development of a public web data search engine that utilized .NET Core, PostgreSQL, and a proprietary Omicsoft Data API. This platform streamlined the visualization of data and client engagement processes.

      Through my work at Qiagen, I was able to enhance my skills in requirement gathering, feature analysis across multidisciplinary teams, architecture and scalability design, systems integration, development of complex solutions, and deployment on different operating systems and, last but not least, the opportunity to work with a wide variety of professionals.

      Tech stack: .NET Core, .NET Framework 4.7, AWS services, Python, Google Collab, Boto3, SQLite, PostgreSQL, custom DB and scripting language
    `,
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
                    <p style={{ whiteSpace: 'pre-line' }}>{item.jobDescription.trim()}</p>
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
