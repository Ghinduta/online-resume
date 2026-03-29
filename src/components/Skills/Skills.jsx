import React from "react";
import "./Skills.css";

const skillsData = [
  {
    category: "Cloud & DevOps",
    skills: ["Terraform", "Azure Container Apps", "Azure Functions", "Azure Service Bus", "AWS", "Docker", "CI/CD", "Git"]
  },
  {
    category: "Programming & Frameworks",
    skills: [".NET 10", "ASP.NET Core", "C#", ".NET Core", ".NET Framework", "Python", "MediatR", "FluentValidation", "Dapr"]
  },
  {
    category: "Practices & Methodologies",
    skills: ["Microservices", "CQRS", "Event-Driven Architecture", "System Architecture", "Agile/Scrum", "Unit Testing", "Technical Leadership"]
  },
  {
    category: "Databases & Data",
    skills: ["Cosmos DB", "Redis", "PostgreSQL", "Elasticsearch", "SQL Server", "SQLite", "ETL Pipelines"]
  },
  {
    category: "AI & Intelligent Systems",
    skills: ["AI-Assisted Development", "Claude Code", "Prompt Engineering", "AI Governance", "Agentic AI Workflows"]
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
