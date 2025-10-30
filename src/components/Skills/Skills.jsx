import React from "react";
import "./Skills.css";

const skillsData = [
  {
    category: "Programming & Frameworks",
    skills: [".NET Framework", ".NET Core", "C#", "Python", "React", "ASP.NET"]
  },
  {
    category: "Databases & Data",
    skills: ["PostgreSQL", "SQL Server", "Elasticsearch", "SQLite", "ETL Pipelines", "Redis"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "CI/CD", "Docker", "Git"]
  },
  {
    category: "Practices & Methodologies",
    skills: ["Agile/Scrum", "Unit Testing", "System Architecture", "Technical Leadership"]
  },
  {
    category: "AI & Intelligent Systems",
    skills: ["Prompt Engineering", "AI-assisted Content Curation", "Agentic AI Workflows"]
  }
];

const Skills = () => (
  <section id="skills" className="arlo_tm_section">
    <div className="arlo_tm_skills">
      <div className="container">
        <div className="arlo_tm_main_title">
          <span>Technical Proficiency</span>
          <h3>Skills & Expertise</h3>
        </div>
        <div className="skills_wrap">
          {skillsData.map((category, idx) => (
            <div key={idx} className="skill_category">
              <h4 className="category_title">{category.category}</h4>
              <div className="skills_badges">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="skill_badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
