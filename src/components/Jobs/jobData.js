// Single source for work experience: rendered by the main site (Jobs.jsx), /console and cv.html.
// `summary` is the short overview shown on /console; when absent, the first `description` paragraph is used.
export const jobData = [
  {
    role: "Senior Software Engineer (Contract)",
    company: "Discount Ninja",
    period: "Jan 2026 – Sep 2026",
    techStack: [
      ".NET 10",
      "ASP.NET Core",
      "Azure Functions",
      "Azure Container Apps",
      "KEDA",
      "Dapr",
      "MediatR",
      "Cosmos DB",
      "Azure Service Bus",
      "Redis",
      "Terraform",
      "Docker",
      "Azure DevOps",
      "xUnit",
      "Playwright",
      "Shopify Admin API",
      "Claude Code (subagents, skills, slash commands, hooks, MCP)",
      "Spec Kit"
    ],
    responsibilities: [
      {
        category: "AI-Augmented Delivery",
        items: [
          "Led the team's move to AI-assisted delivery in Claude Code: spec-driven development (Spec Kit), an independent reviewer agent, and review → fix → re-review loops in isolated git worktrees",
          "Built the tooling that kept it safe and fast: custom skills and slash commands for recurring workflows, hooks that block unsafe actions such as pushes to main, and CLAUDE.md rules that codify the architecture"
        ]
      },
      {
        category: "Architecture & Backend",
        items: [
          "Owned core backend features from start to finish: the price-reduction batch pipeline on Azure Functions, and the integration with the company's shared commerce platform (webhook-driven, queue-based install and uninstall lifecycle)",
          "Raised the system's engineering maturity across data integrity, integration reliability and code structure: idempotent, recoverable workflows over multi-tenant Cosmos DB, zero-downtime schema evolution, resilient Shopify GraphQL batch writes, and explicit dependency-injection registration per host",
          "Brought production-readiness discipline: root-caused flaky end-to-end suites and silent error reporting, isolated tenant data from the legacy app, and defined the branch-to-environment CI/CD strategy",
          "Documented the system as the source of truth for both engineers and AI agents: architecture docs (service map, infrastructure inventory, Shopify pipelines, code patterns) and 250+ engineering notes covering decisions, investigations and runbooks"
        ]
      },
      {
        category: "Cloud Cost & Reliability",
        items: [
          "Traced rising non-production spend to container apps pinned at one replica after deploys, then cut projected spend by 57–69% through right-sizing, KEDA scale-to-zero and a liveness-probe redesign that ended restart loops"
        ]
      }
    ],
    description: [
      "Production SaaS for Shopify merchants (promotions, widgets, analytics) built on CQRS, event-driven .NET microservices (Dapr, multi-tenant Cosmos DB) on Azure. Engaged through to production launch: I delivered core backend features, raised the platform's production readiness, led the team's shift to guarded AI-assisted development, and cut non-production cloud costs by more than half."
    ]
  },
  {
    role: "Senior Software Engineer",
    company: "Qiagen",
    period: "May 2019 – Present",
    summary: "Owned the single-cell analysis framework behind Omicsoft, a cloud NGS analytics product on AWS. Restructured its AWS components, drove technical direction for two greenfield products, built Elasticsearch ETL pipelines, and set up the project’s first unit-testing and CI infrastructure.",
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
        category: "Legacy System Modernization",
        items: [
          "Owned and extended the single-cell data analysis framework, designing storage infrastructure and visualization components for large-scale genomic datasets",
          "Drove integration of bioinformatics tools into cloud-based pipelines and led the restructuring of AWS components",
          "Established the project's first unit testing and CI pipeline infrastructure; managed monitoring across cloud and on-premise deployments"
        ]
      },
      {
        category: "Greenfield Projects",
        items: [
          "Drove technical direction for two new products, including an MVP that evolved into a full solution, while migrating core functionalities from a legacy monolith",
          "Designed Elasticsearch-based data interrogation and ETL pipelines for large-scale data migration and transformation",
          "Implemented caching mechanisms to improve performance and ensured accurate content version tracking",
          "Coordinated across development, QA, and product teams — leading requirement gathering, translating business needs into technical design, and facilitating Scrum ceremonies"
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
    role: ".NET Software Developer and Co-founder",
    company: "RiseTech",
    period: "Sep 2017 – May 2019",
    summary: "Architected RaBit, an objective-focused management product for SMEs, and delivered a custom ERP warehouse tool with Android mobile clients, from client analysis to release.",
    techStack: [
      "ASP.NET MVC",
      "Honeywell Mobility Edge Android",
      "SQL Server",
      "NUnit",
      "Moq"
    ],
    responsibilities: [
      "Primarily focused on technical processes while also actively engaging with clients to provide business analysis, solution design, and support for their digital solutions",
      "Developed and oversaw the architecture of RaBit, a product aimed at small and medium-sized companies to facilitate objective-focused management. Managed project delivery and quality control while contributing to technical and UI/UX vision",
      "Other projects included developing a custom ERP warehouse management tool using Asp.Net Web API and Android mobile solutions, as well as an online consulting platform"
    ]
  },
  {
    role: "Software Developer",
    company: "Pitech+Plus",
    period: "Apr 2015 – Jul 2017",
    summary: "Delivered ASP.NET MVC, Web API and Xamarin projects end to end, designed SQL Server databases, and ran Xamarin workshops for the team.",
    techStack: [
      "ASP.NET MVC",
      "ASP.NET Core Web API",
      "Xamarin",
      "Xamarin.Forms",
      "Xamarin.Android",
      "SQL Server",
      "NUnit",
      "Moq",
      ".NET"
    ],
    responsibilities: [
      "Managed and supported various .NET projects (ASP.NET MVC, ASP.NET/CORE WEBAPI, and Xamarin)",
      "Designed and maintained SQL Server databases",
      "Developed front-end and back-end features, analyzed code, and performed unit testing using NUnit and Moq",
      "Documented applications and conducted Xamarin-Forms and Xamarin-Android workshops"
    ]
  },
];
