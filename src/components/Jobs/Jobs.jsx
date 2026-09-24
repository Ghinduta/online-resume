import React, { useState } from 'react';
import './JobHistory.css'; // Optional: your styles
import { jobData } from './jobData';


const JobHistory = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="arlo_tm_section" id="experience">
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
                  <p>{item.role}, {item.company} ({item.period})</p>
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
