import React from "react";
import styles from "./Console.module.css";
import { jobData } from "../Jobs/jobData";
import { HERO_INTRO } from "../Hero/heroData";

const CV_LINK = "/cv.html";
const CV_PDF_LINK = "/GhindariuCV.pdf";
const EMAIL = "ana.ghindariu@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/ghindariu-ana-821a22137/";
const GITHUB = "https://github.com/Ghinduta";

const stats = [
  { value: "10+", label: "years building .NET backends" },
  { value: "7 yrs", label: "building genomics & drug-discovery data platforms" },
  { value: "50%+", label: "cloud costs cut via right-sizing & scale-to-zero" },
  { value: "Idea → prod", label: "hackathon PoC I pitched became today's product; took a SaaS platform to launch" },
  { value: "AI-native", label: "agents, skills, hooks & spec-driven development in daily delivery" },
];

// Decorative commit ids, one per job in jobData order.
const COMMIT_HASHES = ["HEAD → a41f9c2", "7c03e18", "d92b6a0", "1e5f7b4"];

const jobs = jobData.map((job, i) => ({
  ...job,
  hash: COMMIT_HASHES[i] ?? "",
  summary: job.summary ?? job.description?.[0],
}));

const stack = [
  { key: "cloud", items: ["Azure Container Apps", "Azure Functions", "Service Bus", "AWS", "Terraform", "Docker"] },
  { key: "backend", items: [".NET 10", "ASP.NET Core", "C#", "MediatR", "Dapr", "Python"] },
  { key: "architecture", items: ["Microservices", "CQRS", "Event-driven", "System design", "Unit testing"] },
  { key: "data", items: ["Cosmos DB", "Redis", "PostgreSQL", "Elasticsearch", "SQL Server", "ETL"] },
  { key: "ai", items: ["Claude Code", "Agentic workflows", "Spec Kit", "AI governance", "RAG"] },
];

const projects = [
  {
    kind: "Research · Master’s thesis",
    title: "Transcription factor binding prediction",
    desc: "Applied AI/ML to noisy, highly imbalanced biological sequences, designing robust hard-negative sets and context-aware deep learning models.",
    stack: "Deep learning · Bioinformatics · 2019",
    link: "https://drive.google.com/file/d/15db9vlwC6bNzFw7Uhmo8c7DFs6env1wf/view",
  },
  {
    kind: "Personal · AI & RAG",
    title: "Stack Overflow RAG Assistant",
    desc: "A lightweight .NET 8 RAG service that turns Stack Overflow data into a grounded Q&A assistant with streaming answers, citations and tag suggestions.",
    stack: ".NET 8 · RAG",
    link: "https://github.com/Ghinduta/support-docs",
  },
  {
    kind: "Personal · Web & AI",
    title: "AI Budgeting Coach",
    desc: "Full-stack personal finance app: React + TypeScript on a .NET 8 microservices backend (PostgreSQL, RabbitMQ) that auto-categorizes transactions and tracks budgets.",
    stack: "React · .NET 8 · RabbitMQ",
    link: "https://github.com/Ghinduta/ai-budgeting-coach",
  },
  {
    kind: "Family · Web & Mobile",
    title: "ParentPace",
    desc: "A React parenting app delivering AI-curated, research-backed tips and milestones for parents. Live at parentpace.org.",
    stack: "React · AI",
    link: "https://parentpace.org",
  },
];

const education = [
  { years: "2016 – 2019", degree: "MSc Software Engineering", school: "Babeș-Bolyai University, Cluj-Napoca" },
  { years: "2012 – 2015", degree: "BSc Computer Science", school: "Babeș-Bolyai University, Cluj-Napoca" },
];

const courses = ["Neural Networks and Deep Learning", "Genome Sequencing (Bioinformatics II)", "Learn Data Analysis with Pandas"];

const JobDetails = ({ responsibilities = [] }) => {
  if (responsibilities.length === 0) return null;

  // Same two shapes Jobs.jsx supports: [{ category, items }] groups or a flat string list.
  const groups = typeof responsibilities[0] === "string"
    ? [{ category: null, items: responsibilities }]
    : responsibilities;

  return (
    <details className={styles.details}>
      <summary className={styles.detailsToggle}>
        <span className={styles.showLabel}>+ git show --details</span>
        <span className={styles.hideLabel}>− hide details</span>
      </summary>
      <div className={styles.detailsBody}>
        {groups.map((group, i) => (
          <div key={group.category ?? i} className={styles.detailsGroup}>
            {group.category && <div className={styles.detailsCategory}>## {group.category}</div>}
            <ul>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
};

const Prompt = ({ children }) => (
  <div className={styles.prompt}>
    <span className={styles.accent}>$</span> {children}
  </div>
);

const Str = ({ children }) => <span className={styles.accent}>"{children}"</span>;

const Console = () => (
  <div className={styles.page}>
    <nav className={styles.nav}>
      <a href="#top" className={styles.brand}>
        <span className={styles.accent}>~/</span>ana-ghindariu
      </a>
      <div className={styles.navLinks}>
        <a href="#experience">./experience</a>
        <a href="#stack">./stack</a>
        <a href="#projects">./projects</a>
        <a href="#education">./education</a>
        <a href="#contact">./contact</a>
      </div>
      <div className={styles.status}>
        <span className={styles.dot} />
        open to new roles
      </div>
    </nav>

    <main id="top">
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <Prompt>whoami</Prompt>
          <h1 className={styles.name}>Ana Ghindariu</h1>
          <p className={styles.tagline}>Senior Software Engineer — .NET, cloud (Azure &amp; AWS) &amp; AI-augmented delivery.</p>
          <p className={styles.intro}>{HERO_INTRO}</p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href={CV_LINK} target="_blank" rel="noopener noreferrer">View CV →</a>
            <a className={styles.secondaryButton} href={CV_PDF_LINK} download="Ana-Ghindariu-CV.pdf">Download PDF ↓</a>
            <a className={styles.secondaryButton} href="#contact">Get in touch</a>
          </div>
        </div>

        <div className={styles.codeCard}>
          <div className={styles.codeHeader}>
            <span>Program.cs</span>
            <span>.NET 10</span>
          </div>
          <pre className={styles.code}>
            <span className={styles.comment}>// 10+ years, still shipping</span>{"\n"}
            builder.Services{"\n"}
            {"    ."}<span className={styles.type}>AddCqrs</span>(events: <Str>idempotent</Str>){"\n"}
            {"    ."}<span className={styles.type}>AddDapr</span>(pubSub: <Str>Service Bus</Str>){"\n"}
            {"    ."}<span className={styles.type}>AddCosmos</span>(tenancy: <Str>multi</Str>,{"\n"}
            {"        migrations: "}<Str>zero-downtime</Str>){"\n"}
            {"    ."}<span className={styles.type}>AddAzure</span>(host: <Str>Container Apps</Str>,{"\n"}
            {"        scale: "}<Str>to-zero</Str>){"\n"}
            {"    ."}<span className={styles.type}>AddGenomics</span>(years: 7, data: <Str>NGS</Str>){"\n"}
            {"    ."}<span className={styles.type}>AddClaudeCode</span>(agents, skills, hooks);{"\n\n"}
            <span className={styles.keyword}>await</span> builder.<span className={styles.type}>Build</span>().<span className={styles.type}>RunAsync</span>();
          </pre>
        </div>
      </section>

      <section className={styles.stats}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </section>

      <section id="experience" className={styles.section}>
        <header className={styles.sectionHeader}>
          <Prompt>git log --career</Prompt>
          <h2>Experience</h2>
        </header>
        <div>
          {jobs.map((job) => (
            <article key={job.company} className={styles.job}>
              <div className={styles.jobMeta}>
                <span className={styles.accent}>{job.hash}</span>
                <span>{job.period}</span>
              </div>
              <div className={styles.jobBody}>
                <h3>
                  {job.role} <span className={styles.company}>@ {job.company}</span>
                </h3>
                <p>{job.summary}</p>
                <div className={styles.tags}>
                  {job.techStack.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <JobDetails responsibilities={job.responsibilities} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className={styles.section}>
        <header className={styles.sectionHeader}>
          <Prompt>cat stack.json</Prompt>
          <h2>Stack</h2>
        </header>
        <div className={styles.stackGrid}>
          {stack.map((group) => (
            <div key={group.key} className={styles.panel}>
              <div className={styles.jsonKey}>"{group.key}": [</div>
              {group.items.map((item) => (
                <div key={item} className={styles.stackItem}>{item}</div>
              ))}
              <div className={styles.jsonKey}>]</div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className={styles.section}>
        <header className={styles.sectionHeader}>
          <Prompt>ls ~/projects</Prompt>
          <h2>Research &amp; side projects</h2>
        </header>
        <div className={styles.projectGrid}>
          {projects.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className={`${styles.panel} ${styles.project}`}>
              <span className={styles.projectKind}>{p.kind}</span>
              <span className={styles.projectTitle}>{p.title}</span>
              <span className={styles.projectDesc}>{p.desc}</span>
              <span className={styles.projectStack}>{p.stack} ↗</span>
            </a>
          ))}
        </div>
        <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={styles.moreLink}>
          <span className={styles.accent}>→</span> more on github.com/Ghinduta
        </a>
      </section>

      <section id="education" className={styles.section}>
        <header className={styles.sectionHeader}>
          <Prompt>cat education.md</Prompt>
          <h2>Education</h2>
        </header>
        <div>
          {education.map((e) => (
            <div key={e.degree} className={styles.eduRow}>
              <span className={styles.eduYears}>{e.years}</span>
              <span className={styles.eduDegree}>{e.degree}</span>
              <span className={styles.eduSchool}>{e.school}</span>
            </div>
          ))}
          <div className={styles.eduRow}>
            <span className={styles.eduYears}>courses</span>
            <span className={styles.eduCourses}>{courses.join(" · ")}</span>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.contactText}>
          <Prompt>./contact --now</Prompt>
          <h2>Let's build something that scales.</h2>
          <a className={styles.primaryButton} href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
        <dl className={styles.contactList}>
          <div><dt>linkedin</dt><dd><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">/in/ghindariu-ana ↗</a></dd></div>
          <div><dt>github</dt><dd><a href={GITHUB} target="_blank" rel="noopener noreferrer">/Ghinduta ↗</a></dd></div>
          <div><dt>location</dt><dd>Cluj-Napoca, Romania</dd></div>
          <div><dt>cv</dt><dd><a href={CV_LINK} target="_blank" rel="noopener noreferrer">cv.html ↗</a> · <a href={CV_PDF_LINK} download="Ana-Ghindariu-CV.pdf">cv.pdf ↓</a></dd></div>
        </dl>
      </section>
    </main>
  </div>
);

export default Console;
