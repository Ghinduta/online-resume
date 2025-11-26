import React from "react";
import "./Projects.css";

const newsItems = [
  {
    date: "2015",
    sortDate: "2015-06-01",
    category: "Research Projects",
    title: "Bachelor's thesis",
    link: "https://drive.google.com/file/d/1iwnmS3eBCoeLfJlNCFY8upSSXVLJYJzL/view",
    description: "Developed an augmented reality motorcycle helmet system with a companion Android app, providing real-time navigation, alerts, and contextual data to enhance rider safety and situational awareness.",
  },
  {
    date: "2019",
    sortDate: "2019-09-01",
    category: "Research Projects",
    title: "Master's thesis",
    link: "https://drive.google.com/file/d/15db9vlwC6bNzFw7Uhmo8c7DFs6env1wf/view",
    description: "Applied AI/ML to noisy, highly imbalanced biological sequences for transcription factor binding prediction, designing robust hard-negative sets and context-aware deep learning models.",
  },
  {
    date: "2025",
    sortDate: "2025-01-15",
    category: "Family Projects | Web & Mobile",
    title: "Parenting millestones",
    link:"https://github.com/nickerman/Parent-Pace",
    description: "A React-based parenting app delivering AI-curated, research-backed tips and insights for parents.",
    liveLink: "https://parentpace.org",
  },
  {
    date: "2025",
    sortDate: "2025-02-01",
    category: "Personal Projects | Web & AI",
    title: "AI Budgeting Coach",
    link: "https://github.com/Ghinduta/ai-budgeting-coach",
    description: "A full‑stack React + TypeScript personal finance app with a .NET 8 microservices backend (PostgreSQL, RabbitMQ) using AI to auto-categorize transactions, track budgets, and provide real-time financial insights.",
  },
  {
    date: "2025",
    sortDate: "2025-02-15",
    category: "Personal Projects | AI & RAG",
    title: "Stack Overflow RAG Assistant",
    link: "https://github.com/Ghinduta/support-docs",
    description: "A lightweight .NET 8 RAG service that transforms Stack Overflow data into a grounded Q&A assistant with streaming answers, citations and tag suggestions",
  },
  {
    date: "...",
    sortDate: "2012-10-20",
    category: "Others",
    link:"https://github.com/Ghinduta",
    title: "See more on Github",
  }
].sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));

const News = () => (
  <div className="arlo_tm_section" id="portfolio">
    <div className="arlo_tm_news">
      <div className="container">
        <div className="arlo_tm_main_title">
          <span>Portfolio</span>
        </div>
        <div className="news_list">
          <ul>
            {newsItems.map((item, index) => (
              <li key={index}>
                <div className="list_inner">
                  <div className="image">
                    <img src={item.thumb} alt="" />
                    <div className="main" data-img-url={item.image}></div>
                    <a className="arlo_tm_full_link" href="#"></a>
                  </div>
                  <div className="details">
                    <div className="meta">
                        <p>
                      {item.date} in {' '}
                      {item.category_link ? (
                        <a
                          className="line_effect clickable"
                          href={item.category_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.category}
                        </a>
                      ) : (
                        <i className="em_color">{item.category}</i>
                      )}
                    </p>
                    </div>
                    <h3 className="title">
                      <a className="line_effect_2" href={item.link} target="_blank">{item.title}</a>
                    </h3>
                    {item.description && (
                      <p className="project-description">
                        {item.description}
                        {item.liveLink && (
                          <>
                            {' ('}
                            <a href={item.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
                              {item.liveLink.replace('https://', '')}
                            </a>
                            {')'}
                          </>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default News;
