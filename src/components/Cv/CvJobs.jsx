import React from 'react'
import { jobData } from '../Jobs/jobData'

const Responsibilities = ({ responsibilities }) => {
  // Same two shapes Jobs.jsx supports: [{ category, items }] groups or a flat string list.
  if (typeof responsibilities[0] === 'string') {
    return (
      <ul>
        {responsibilities.map((item) => <li key={item}>{item}</li>)}
      </ul>
    )
  }

  return responsibilities.map((group) => (
    <div key={group.category}>
      <div className="responsibility-category">{group.category}</div>
      <ul>
        {group.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  ))
}

const CvJobs = () => jobData.map((job) => (
  <div key={job.company} className="job">
    <div className="job-header">
      <div className="job-title">{job.role}, {job.company} ({job.period})</div>
    </div>
    <div className="job-content">
      <div className="job-section-title">Tech Stack</div>
      <div className="tech-tags">
        {job.techStack.map((tech) => <span key={tech} className="tech-tag">{tech}</span>)}
      </div>

      <div className="job-section-title">Responsibilities</div>
      <div className="responsibilities">
        <Responsibilities responsibilities={job.responsibilities} />
      </div>

      {job.description && (
        <>
          <div className="job-section-title">Overview</div>
          <div className="job-description">
            {job.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </>
      )}
    </div>
  </div>
))

export default CvJobs;
