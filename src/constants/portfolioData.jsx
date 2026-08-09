import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Cloud,
  Database,
  Landmark,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  ShieldCheck,
  TestTube2,
  Zap,
  Wrench,
  Brain,
  Coffee,
  FileSearch,
  Leaf,
  Network,
  Radio,
  Server,
  CreditCard,
  Atom,
  CirclePlay,
  RadioTower,
} from "lucide-react";
export const RESUME_PATH = "/Sumit_Kumar_Resume.pdf";

export const NAV_ITEMS = [
  "About",
  "Projects",
  "Case Studies",
  "Experience",
  "Let's Connect",
];

export const INTENT_OPTIONS = [
  "Freelance",
  "Remote Work",
  "Full-Time",
  "Collaboration",
  "Just Connect",
];

export const ORBIT_ITEMS = [
  {
    label: "Java",
    icon: Coffee,
    className: "orbit-java",
  },
  {
    label: "Spring Boot",
    icon: Leaf,
    className: "orbit-spring",
  },
  {
    label: "React",
    icon: Atom,
    className: "orbit-react",
  },
  {
    label: "TypeScript",
    icon: Code2,
    className: "orbit-typescript",
  },
  {
    label: "Kafka",
    icon: Radio,
    className: "orbit-kafka",
  },
  {
    label: "AWS",
    icon: Cloud,
    className: "orbit-aws",
  },
  {
    label: "Redis",
    icon: Database,
    className: "orbit-redis",
  },
  {
    label: "AI / RAG",
    icon: Brain,
    className: "orbit-ai",
  },
];
export const DOMAIN_EXPERIENCE = [
   {
    label: "Telecom",
    icon: Radio,
  },
  {
    label: "Banking & FinTech",
    icon: CreditCard,
  },
  {
    label: "Compliance",
    icon: ShieldCheck,
  },
  {
    label: "Enterprise Analytics",
    icon: Database,
  },
  {
    label: "GenAI & RAG",
    icon: Brain,
  },
];

export const SKILLS = [
  {
    title: "Backend Engineering",
    subtitle:
      "Java 8/11/17/21 · Spring Boot · Spring Security · Hibernate · JPA · REST",
    description:
      "Building scalable enterprise backend services with modern Java, Spring Boot, Spring Security, Hibernate, JPA, and high-performance REST APIs using microservice architecture.",
    details: [
      "Java 8 / 11 / 17 / 21",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "JPA",
      "REST APIs",
      "Microservices",
      "Swagger / OpenAPI",
      "Design Patterns",
      "SOLID Principles",
    ],
    color: "#ff5bb2",
    icon: Server,
  },

  {
    title: "Frontend Engineering",
    subtitle:
      "React.js · TypeScript · JavaScript · Redux · Next.js · Responsive UI",
    description:
      "Developing responsive enterprise dashboards and user interfaces with React, TypeScript, modern JavaScript, reusable component architecture, and state management.",
    details: [
      "React.js",
      "TypeScript",
      "JavaScript ES6+",
      "Next.js",
      "Redux",
      "Context API",
      "React Hooks",
      "Component Architecture",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
    ],
    color: "#2fb8ff",
    icon: MonitorSmartphone,
  },

  {
    title: "Distributed Systems",
    subtitle:
      "Kafka · Redis · Event-Driven Architecture · Async Processing · Resilience",
    description:
      "Designing fault-tolerant distributed systems using Kafka-based event-driven architecture, asynchronous processing, Redis caching, retry mechanisms, and resilient microservices.",
    details: [
      "Apache Kafka",
      "Event-Driven Architecture",
      "Kafka Producers / Consumers",
      "Partitions & Consumer Groups",
      "Retry Mechanisms",
      "Dead Letter Queues",
      "Redis",
      "Caching",
      "Asynchronous Processing",
      "Multithreading",
      "Fault Tolerance",
      "Resilience Patterns",
    ],
    color: "#ff654d",
    icon: Network,
  },

  {
    title: "Cloud & DevOps",
    subtitle:
      "AWS · Docker · Kubernetes · Jenkins · GitLab CI/CD · Cloud-Native",
    description:
      "Building and deploying cloud-native applications using AWS services, containerization, Kubernetes orchestration, and automated CI/CD pipelines.",
    details: [
      "AWS EC2",
      "AWS S3",
      "AWS RDS",
      "AWS SQS",
      "AWS SNS",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitLab CI/CD",
      "Linux",
      "Maven",
      "Cloud-Native Architecture",
    ],
    color: "#25c99c",
    icon: Cloud,
  },

  {
    title: "Data & Quality Engineering",
    subtitle:
      "PostgreSQL · MySQL · Neo4j · JUnit · Mockito · JMeter · TDD",
    description:
      "Working with relational and graph databases while applying query optimization, indexing, automated testing, performance testing, and test-driven development.",
    details: [
      "PostgreSQL",
      "MySQL",
      "Neo4j",
      "Redis",
      "Database Indexing",
      "Query Optimization",
      "JUnit",
      "Mockito",
      "Integration Testing",
      "JMeter",
      "Test-Driven Development",
      "Code Reviews",
    ],
    color: "#f7b500",
    icon: Database,
  },

  {
    title: "AI & GenAI Engineering",
    subtitle:
      "OpenAI · Llama 3/3.3 · Claude · LangChain · RAG · Vector Databases",
    description:
      "Building AI-powered enterprise applications using LLM APIs, prompt engineering, embeddings, vector databases, semantic search, and Retrieval-Augmented Generation pipelines.",
    details: [
      "OpenAI API",
      "Claude",
      "Llama 3 / 3.3",
      "LangChain",
      "RAG",
      "Vector Databases",
      "Embeddings",
      "Semantic Search",
      "Prompt Engineering",
      "AI Application Development",
      "AI Test Automation",
      "LLM Integration",
    ],
    color: "#9b6cff",
    icon: Brain,
  },
];

export const SKILL_LEVELS = [
  { name: "Java", level: 92, color: "#ff654d" },
  { name: "Spring Boot", level: 90, color: "#25c99c" },
  { name: "Microservices", level: 88, color: "#2fb8ff" },
  { name: "Apache Kafka", level: 86, color: "#7f5cff" },
  { name: "React.js", level: 84, color: "#61dafb" },
  { name: "TypeScript", level: 78, color: "#3178c6" },
  { name: "JavaScript", level: 84, color: "#f7b500" },
  { name: "REST APIs", level: 90, color: "#14bf8c" },
  { name: "PostgreSQL", level: 84, color: "#336791" },
  { name: "Redis", level: 82, color: "#dc2626" },
  { name: "AWS", level: 82, color: "#ff9900" },
  { name: "Docker", level: 80, color: "#2496ed" },
  { name: "Kubernetes", level: 74, color: "#326ce5" },
  { name: "Neo4j", level: 72, color: "#00bfa5" },
  { name: "Spring Security", level: 82, color: "#6db33f" },
  { name: "Hibernate / JPA", level: 86, color: "#59666c" },
  { name: "JUnit / Mockito", level: 82, color: "#25c99c" },
  { name: "Git / GitLab", level: 86, color: "#f05032" },
  { name: "GenAI / RAG", level: 78, color: "#ff5bb2" },
  { name: "LangChain", level: 74, color: "#7f5cff" },
];

export const PROJECTS = [
  {
    name: "BT Compass — Telecom Governance Platform",
    status: "Production",
    description:
      "Enterprise telecom governance platform built with Spring Boot microservices to manage network operational metrics, compliance controls, NMS/CMS workflows, and enterprise analytics.",
    tags: [
      "Java 17",
      "Spring Boot",
      "Microservices",
      "Kafka",
      "Neo4j",
      "PostgreSQL",
      "AWS",
      "Kubernetes",
    ],
    impact:
      "Supported 10,000+ operational metrics and 5,000+ compliance controls across enterprise telecom governance workflows.",
    contents: [
      "Problem & Solution",
      "Microservice Architecture",
      "NMS / CMS Integration",
      "Event Processing",
      "Data & Analytics",
    ],
    problem:
      "Telecom governance teams needed a centralized platform to monitor thousands of operational metrics and compliance controls across Network Management Systems (NMS), Compliance Management Systems (CMS), and enterprise data sources. Fragmented workflows made it difficult to identify operational and compliance issues quickly.",
    table: [
      [
        "Platform Architecture",
        "Monolithic and tightly coupled workflows",
        "5+ independently deployable Spring Boot microservices",
      ],
      [
        "Event Processing",
        "Synchronous processing and limited fault recovery",
        "Kafka-based event-driven processing with retry and DLQ handling",
      ],
      [
        "Network Governance",
        "Operational data distributed across systems",
        "Centralized NMS/CMS governance and analytics workflows",
      ],
      [
        "Graph Relationships",
        "Complex relationship queries were expensive",
        "Neo4j-based relationship modelling and query optimization",
      ],
      [
        "Data Storage",
        "Multiple data sources and inconsistent access patterns",
        "PostgreSQL and optimized data-access strategies",
      ],
    ],
    capabilities: [
      "Architected and owned 5+ Spring Boot microservices across telecom governance, NMS, CMS, and analytics domains.",
      "Implemented Kafka producers and consumers for asynchronous event-driven workflows.",
      "Designed retry and dead-letter queue mechanisms for failed event processing.",
      "Worked with Neo4j to model and query complex relationships between network and compliance entities.",
      "Built REST APIs and backend services supporting 10,000+ operational metrics and 5,000+ compliance controls.",
      "Containerized services using Docker and deployed cloud-native workloads using Kubernetes and AWS.",
    ],
    icon: Network,
  },

  {
    name: "Control Tower — Enterprise Compliance & Operations",
    status: "Production",
    description:
      "Centralized enterprise Control Tower providing real-time visibility into compliance controls, operational metrics, network assets, and governance issues.",
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "Kafka",
      "PostgreSQL",
      "Neo4j",
      "AWS",
      "RBAC",
    ],
    impact:
      "Adopted by 400+ enterprise users and improved visibility into operational and compliance issues.",
    contents: [
      "Problem & Solution",
      "Architecture",
      "Compliance Workflows",
      "Analytics Dashboard",
      "Security & RBAC",
    ],
    problem:
      "Leadership and compliance teams lacked a single view of operational health and compliance status across multiple enterprise systems. Teams depended on fragmented reports and manual investigation to identify issues.",
    table: [
      [
        "Visibility",
        "Information spread across multiple systems",
        "Centralized Control Tower dashboard",
      ],
      [
        "Compliance",
        "Manual control tracking",
        "5,000+ compliance controls surfaced through centralized workflows",
      ],
      [
        "Operations",
        "Delayed issue identification",
        "Real-time operational metrics and status visibility",
      ],
      [
        "Access Control",
        "Different stakeholder access requirements",
        "Role-Based Access Control (RBAC)",
      ],
      [
        "Analytics",
        "Static reports",
        "Interactive dashboards and data-driven insights",
      ],
    ],
    capabilities: [
      "Built centralized dashboards for operational and compliance monitoring.",
      "Integrated backend APIs with React-based enterprise dashboards.",
      "Implemented role-based access control for different enterprise stakeholders.",
      "Integrated operational metrics and compliance control data from multiple systems.",
      "Designed analytics workflows that helped users identify issues faster.",
      "Platform adopted by 400+ enterprise users.",
    ],
    icon: ShieldCheck,
  },

  {
    name: "AWS Data Landscaping Platform",
    status: "Production",
    description:
      "Cloud-native data onboarding platform using AWS services to automate enterprise data ingestion, storage, processing, and metadata workflows.",
    tags: [
      "Java",
      "Spring Boot",
      "AWS S3",
      "AWS RDS",
      "AWS SQS",
      "AWS SNS",
      "Docker",
      "Kubernetes",
    ],
    impact:
      "Reduced enterprise data onboarding effort by 40% through workflow automation.",
    contents: [
      "Problem & Solution",
      "AWS Architecture",
      "Data Ingestion",
      "Async Processing",
      "Scalability",
    ],
    problem:
      "Enterprise data onboarding required significant manual coordination between teams and systems. Data ingestion, validation, processing, and storage workflows were time-consuming and difficult to scale.",
    table: [
      [
        "Data Ingestion",
        "Manual onboarding workflows",
        "Automated cloud-based ingestion pipeline",
      ],
      [
        "File Storage",
        "Distributed file handling",
        "Amazon S3-based centralized object storage",
      ],
      [
        "Processing",
        "Synchronous processing",
        "Asynchronous processing using SQS",
      ],
      [
        "Database",
        "Manual metadata management",
        "AWS RDS-backed metadata and application data",
      ],
      [
        "Scalability",
        "Limited automation",
        "Cloud-native architecture designed for horizontal scaling",
      ],
    ],
    capabilities: [
      "Designed AWS-based data onboarding workflows using S3, RDS, and SQS.",
      "Built Spring Boot services for data ingestion and processing.",
      "Used asynchronous messaging to decouple data ingestion from downstream processing.",
      "Implemented cloud-native deployment patterns using Docker and Kubernetes.",
      "Automated repetitive onboarding workflows and reduced manual effort by 40%.",
    ],
    icon: Cloud,
  },

  {
    name: "GenAI Test Automation Platform",
    status: "Delivered",
    description:
      "Generative AI platform that converts user stories and requirements into manual test cases and automated Selenium/API test scripts using LLMs.",
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "OpenAI API",
      "Llama 3",
      "LangChain",
      "RAG",
      "Vector Database",
    ],
    impact:
      "Automated test-case generation and improved test coverage while reducing repetitive QA effort.",
    contents: [
      "Problem & Solution",
      "LLM Architecture",
      "Prompt Engineering",
      "RAG Pipeline",
      "Test Generation",
    ],
    problem:
      "QA teams spent significant time manually converting requirements and user stories into test cases, edge cases, and automation scripts. Maintaining consistency and coverage across large applications was difficult.",
    table: [
      [
        "Test Creation",
        "Manual conversion of stories into test cases",
        "LLM-powered test-case generation",
      ],
      [
        "Automation",
        "Manual Selenium/API script development",
        "AI-generated automation scripts",
      ],
      [
        "Coverage",
        "Important edge cases could be missed",
        "Prompt-driven scenario and edge-case generation",
      ],
      [
        "Knowledge",
        "Context distributed across documents",
        "RAG with embeddings and vector search",
      ],
      [
        "Validation",
        "Generated output required manual refinement",
        "Validation and prompt-engineering workflows",
      ],
    ],
    capabilities: [
      "Integrated OpenAI APIs and Llama 3 models into enterprise workflows.",
      "Built prompt-engineering pipelines for generating functional and edge-case scenarios.",
      "Designed AI workflows that converted user stories into manual test cases.",
      "Generated Selenium and API automation scripts from natural-language requirements.",
      "Implemented embeddings, vector storage, and semantic search for contextual retrieval.",
      "Built RAG workflows to provide relevant project context to LLM prompts.",
    ],
    icon: Brain,
  },

  {
    name: "Fraud Risk Management Platform",
    status: "Delivered",
    description:
      "Mission-critical banking fraud-risk management platform replacing legacy Falcon FRM with event-driven Spring Boot microservices.",
    tags: [
      "Java",
      "Spring Boot",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Microservices",
    ],
    impact:
      "Delivered a scalable event-driven platform for high-volume banking transaction risk processing.",
    contents: [
      "Problem & Solution",
      "Microservices",
      "Kafka Architecture",
      "Fraud Processing",
      "Performance",
    ],
    problem:
      "The legacy fraud-risk platform required modernization to support scalable transaction processing and flexible fraud-detection workflows while maintaining reliability for mission-critical banking operations.",
    table: [
      [
        "Legacy Platform",
        "Rigid legacy fraud-risk workflows",
        "Modern Spring Boot microservice architecture",
      ],
      [
        "Transaction Processing",
        "Tightly coupled processing",
        "Kafka-based asynchronous event processing",
      ],
      [
        "Performance",
        "High-volume transaction workloads",
        "Optimized services and database access",
      ],
      [
        "Caching",
        "Repeated database lookups",
        "Redis caching for frequently accessed data",
      ],
      [
        "Scalability",
        "Limited horizontal scalability",
        "Independently scalable microservices",
      ],
    ],
    capabilities: [
      "Built Spring Boot microservices for fraud-risk processing.",
      "Implemented Kafka-based event-driven transaction workflows.",
      "Used Redis for high-frequency data access and caching.",
      "Optimized PostgreSQL queries and database access patterns.",
      "Worked on performance tuning for high-volume transaction processing.",
      "Collaborated with product, QA, and business teams for production releases.",
    ],
    icon: CreditCard,
  },

  {
    name: "Compliance Management Platform",
    status: "Delivered",
    description:
      "Enterprise compliance platform with dynamic query capabilities enabling analysts to perform advanced transaction analysis without engineering support.",
    tags: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Kafka",
      "Redis",
      "REST APIs",
      "Dynamic Query Builder",
    ],
    impact:
      "Enabled business analysts to perform complex transaction analysis without depending on engineering teams.",
    contents: [
      "Problem & Solution",
      "Dynamic Query Builder",
      "Data Architecture",
      "Query Optimization",
      "Analytics",
    ],
    problem:
      "Compliance analysts frequently depended on engineering teams to create or modify database queries for transaction investigations. This created delays and increased operational workload.",
    table: [
      [
        "Transaction Analysis",
        "Engineering dependency for custom queries",
        "Dynamic Query Builder for analysts",
      ],
      [
        "Query Performance",
        "Slow complex queries",
        "Indexing and query optimization",
      ],
      [
        "Data Access",
        "Limited analyst flexibility",
        "Flexible transaction filtering and analysis",
      ],
      [
        "Scalability",
        "Tightly coupled workflows",
        "Spring Boot service-based architecture",
      ],
    ],
    capabilities: [
      "Built a Dynamic Query Builder for advanced transaction analysis.",
      "Developed Spring Boot REST APIs for compliance workflows.",
      "Optimized PostgreSQL indexing and query execution strategies.",
      "Integrated Kafka and Redis where asynchronous processing and caching improved system performance.",
      "Worked closely with business and QA teams to deliver production-ready releases.",
    ],
    icon: FileSearch,
  },
]

export const CASE_STUDIES = [
  {
    title: "Building a Fault-Tolerant Kafka Event Pipeline",
    summary:
      "Re-architected event processing around Kafka with retry handling and dead-letter queues, improving platform reliability by 25% and reducing unplanned downtime across enterprise workflows.",
    tags: [
      "Apache Kafka",
      "Event-Driven Architecture",
      "Retry",
      "DLQ",
      "Microservices",
    ],
    color: "warm",
  },

  {
    title: "AWS Data Onboarding Automation",
    summary:
      "Designed a cloud-native data landscaping platform using S3, RDS, and SQS to automate enterprise data onboarding workflows and reduce manual onboarding effort by 40%.",
    tags: [
      "AWS",
      "S3",
      "RDS",
      "SQS",
      "Spring Boot",
      "Cloud Architecture",
    ],
    color: "cool",
  },

  {
    title: "Enterprise Control Tower",
    summary:
      "Built a centralized governance and analytics platform bringing together 10,000+ operational metrics and 5,000+ compliance controls, adopted by 400+ enterprise users.",
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "Neo4j",
      "PostgreSQL",
      "RBAC",
    ],
    color: "warm",
  },

  {
    title: "RAG-Powered Enterprise Knowledge Discovery",
    summary:
      "Implemented a Retrieval-Augmented Generation pipeline using embeddings, vector search, LangChain, and LLM APIs to retrieve relevant enterprise knowledge and provide context-aware responses.",
    tags: [
      "RAG",
      "OpenAI",
      "Llama 3.3",
      "LangChain",
      "Embeddings",
      "Vector Database",
    ],
    color: "cool",
  },

  {
    title: "GenAI Test Automation",
    summary:
      "Built an AI-powered test automation workflow that converts user stories and requirements into test cases, edge cases, and Selenium/API automation scripts using LLMs and prompt-engineering pipelines.",
    tags: [
      "OpenAI API",
      "Llama 3",
      "LangChain",
      "Prompt Engineering",
      "Test Automation",
    ],
    color: "warm",
  },

  {
    title: "Modernising Fraud Risk Processing",
    summary:
      "Built Kafka-based Spring Boot microservices for a mission-critical banking fraud-risk platform, combining asynchronous processing, Redis caching, PostgreSQL optimization, and scalable service boundaries.",
    tags: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "Microservices",
    ],
    color: "cool",
  },
];

export const EXPERIENCE = [
  {
    company: "PwC",
    mark: "PwC",
    role: "Senior Associate - Software Engineer",
    period: "2026 - Present",
    year: "2026",
    current: true,
    color: "#7f5cff",
    bullets: [
      "Working as a Senior Associate - Software Engineer delivering enterprise technology solutions across client engagements.",
      "Designing and developing scalable Java and Spring Boot applications using microservices and distributed-system patterns.",
      "Working with REST APIs, event-driven architecture, databases, cloud services, and modern application engineering practices.",
      "Contributing to solution design, development, debugging, root-cause analysis, code reviews, and production support.",
      "Collaborating with client, architecture, product, QA, and engineering teams to deliver production-ready solutions.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Apache Kafka",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "React",
      "TypeScript",
    ],
  },

  {
    company: "British Telecom (BT Group)",
    mark: "BT",
    role: "Software Engineer (Professional)",
    period: "Jan 2025 - Present",
    year: "2025",
    current: false,
    color: "#ff654d",
    bullets: [
      "Architected and owned 5+ Spring Boot microservices across Telecom Governance, Network Management Systems (NMS), Compliance Management Systems (CMS), and enterprise analytics.",
      "Built and supported platforms managing 10,000+ operational metrics and 5,000+ compliance controls across enterprise telecom workflows.",
      "Launched a centralized Control Tower platform adopted by 400+ enterprise users, providing real-time visibility into network assets, operational metrics, and compliance issues.",
      "Engineered an AWS-powered Data Landscaping platform using S3, RDS, and SQS, reducing enterprise data onboarding effort by 40%.",
      "Re-architected Kafka event processing with retry and dead-letter queue handling, improving platform reliability by 25% and reducing unplanned downtime.",
      "Built AI-powered analytics using OpenAI APIs and Llama 3.3 to generate natural-language-driven, auto-adapting dashboards.",
      "Implemented a Retrieval-Augmented Generation (RAG) pipeline using LangChain, vector embeddings, and semantic search for enterprise knowledge discovery.",
      "Drove root-cause analysis of production incidents and implemented fixes that reduced recurring operational issues.",
    ],
    technologies: [
      "Java 17",
      "Spring Boot",
      "Microservices",
      "Apache Kafka",
      "Neo4j",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "OpenAI",
      "Llama 3.3",
      "LangChain",
    ],
  },

  {
    company: "iFocus Systec India Pvt Ltd",
    mark: "IF",
    role: "Software Engineer",
    period: "May 2024 - Jan 2025",
    year: "2024",
    current: false,
    color: "#7f5cff",
    bullets: [
      "Scaled an enterprise feedback and analytics platform to 100,000+ active users.",
      "Built responsive React dashboards for real-time business insights.",
      "Implemented Role-Based Access Control (RBAC) across the platform.",
      "Designed an AI platform converting user stories and requirements into manual test cases and automated Selenium/API scripts.",
      "Used OpenAI APIs and Llama 3 to generate test scenarios and edge cases.",
      "Worked with architecture and product teams on production deployments for analytics and reporting modules.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "JavaScript",
      "TypeScript",
      "AWS",
      "OpenAI",
      "Llama 3",
      "LangChain",
      "Vector Database",
    ],
  },

  {
    company: "Sequro Technologies Pvt Ltd",
    mark: "ST",
    role: "Software Engineer",
    period: "Dec 2021 - May 2024",
    year: "2021",
    current: false,
    color: "#25c99c",
    bullets: [
      "Replaced Falcon FRM with a mission-critical fraud-risk management platform using Kafka-based event-driven microservices.",
      "Built secure Spring Boot services for high-volume transaction processing and banking fraud detection.",
      "Developed a compliance management platform with a Dynamic Query Builder for advanced transaction analysis.",
      "Optimized database queries and indexing strategies to improve query performance.",
      "Collaborated with product, QA, and business teams to deliver production releases on schedule.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Apache Kafka",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],
  },
];