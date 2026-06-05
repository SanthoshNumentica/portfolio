import { useState } from 'react';

const services = [
  {
    title: 'MERN Stack Development',
    icon: 'bi-laptop',
    description: 'Engineering responsive, high-performance web applications using React 19, Next.js, and TypeScript, backed by robust Node.js and NestJS microservices.',
    highlighted: true
  },
  {
    title: 'AI & LLM Integration',
    icon: 'bi-cpu-fill',
    description: 'Architecting production-ready LLM workflows and safety-aligned conversational agents using OpenAI (GPT-4), Google Gemini, and custom FastAPI backends.',
    highlighted: false
  },
  {
    title: 'Cloud & DevOps Automation',
    icon: 'bi-cloud-check-fill',
    description: 'Deploying secure multi-tenant databases, setting up AWS Route 53/SQS/SES message queues, and orchestrating serverless integrations via Supabase.',
    highlighted: false
  }
];

const skillTabs = {
  frontend: [
    {
      id: 'react',
      name: 'React.js & Next.js (SSR/SSG)',
      percentage: 95,
      proficiency: 'Expert',
      subSkills: ['React 19', 'Next.js 15', 'SSR/SSG/ISR', 'App Router', 'Context API', 'React Query']
    },
    {
      id: 'js_ts',
      name: 'JavaScript (ES6+) & TypeScript',
      percentage: 95,
      proficiency: 'Expert',
      subSkills: ['TypeScript 5.x', 'ESNext Features', 'Async/Await', 'DOM API', 'Web APIs', 'Bundlers']
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS & Styling',
      percentage: 90,
      proficiency: 'Expert',
      subSkills: ['Tailwind v4/v3', 'Responsive Design', 'CSS Grid/Flexbox', 'Animations', 'Variables']
    },
    {
      id: 'angular',
      name: 'Angular Framework',
      percentage: 85,
      proficiency: 'Advanced',
      subSkills: ['Angular 18', 'RxJS Observables', 'NgRx State', 'Directives', 'Routing', 'TypeScript']
    },
    {
      id: 'python_java',
      name: 'Python & Java Core',
      percentage: 88,
      proficiency: 'Advanced',
      subSkills: ['OOP Design', 'Python 3', 'Java 17+', 'Multithreading', 'Data Structures', 'Algorithms']
    },
    {
      id: 'html_css',
      name: 'HTML5 & CSS3 Layouts',
      percentage: 95,
      proficiency: 'Expert',
      subSkills: ['Semantic Markup', 'Flexbox & CSS Grid', 'Custom Properties', 'Animations', 'A11y']
    }
  ],
  backend: [
    {
      id: 'node_nest',
      name: 'Node.js & NestJS Microservices',
      percentage: 93,
      proficiency: 'Expert',
      subSkills: ['Node.js LTS', 'NestJS Framework', 'REST/GraphQL APIs', 'WebSockets', 'RxJS', 'Microservices']
    },
    {
      id: 'fastapi_express',
      name: 'FastAPI & Express.js',
      percentage: 90,
      proficiency: 'Expert',
      subSkills: ['Python FastAPI', 'Express.js', 'Async IO', 'Pydantic Validation', 'Router Modules']
    },
    {
      id: 'postgres_mongo',
      name: 'PostgreSQL & MongoDB',
      percentage: 90,
      proficiency: 'Expert',
      subSkills: ['Relational Postgres', 'NoSQL MongoDB', 'Aggregation Pipeline', 'Indexing & Joins']
    },
    {
      id: 'supabase_firebase',
      name: 'Supabase & Firebase Systems',
      percentage: 92,
      proficiency: 'Expert',
      subSkills: ['Supabase DB', 'Firebase Auth', 'Firestore / RTDB', 'Edge Functions', 'Storage']
    },
    {
      id: 'sql_design',
      name: 'SQL & Database Design',
      percentage: 88,
      proficiency: 'Advanced',
      subSkills: ['Normalization', 'Transactions (ACID)', 'Query Optimization', 'Indexes', 'Views']
    },
    {
      id: 'rls_security',
      name: 'Row Level Security (RLS)',
      percentage: 92,
      proficiency: 'Expert',
      subSkills: ['RLS Policies', 'Supabase Auth Integration', 'Multi-tenant Isolation', 'Access Rules']
    }
  ],
  tools: [
    {
      id: 'gen_ai',
      name: 'Generative AI & LLMs',
      percentage: 95,
      proficiency: 'Expert',
      subSkills: ['GPT-4 & Gemini APIs', 'Prompt Engineering', 'LangChain / LlamaIndex', 'Vector DBs', 'FastAPI']
    },
    {
      id: 'aws',
      name: 'AWS Cloud Services',
      percentage: 88,
      proficiency: 'Advanced',
      subSkills: ['AWS SQS / SES', 'Route 53 DNS', 'EC2 & S3 Buckets', 'Lambda (Serverless)', 'IAM Policies']
    },
    {
      id: 'n8n',
      name: 'n8n Workflow Automation',
      percentage: 85,
      proficiency: 'Advanced',
      subSkills: ['n8n Core', 'Webhook Triggers', 'Custom JS Nodes', 'Third-party Integrations', 'Cron Jobs']
    },
    {
      id: 'gdpr',
      name: 'GDPR-aware Data Handling',
      percentage: 90,
      proficiency: 'Expert',
      subSkills: ['Data Minimization', 'Consent Management', 'PII Encryption', 'Anonymization', 'Audit Logs']
    },
    {
      id: 'swagger',
      name: 'Swagger & OpenAPI Specs',
      percentage: 92,
      proficiency: 'Expert',
      subSkills: ['OpenAPI 3.0', 'Swagger UI', 'Schema Models', 'API Auto-docs', 'Postman Specs']
    },
    {
      id: 'powerbi_tableau',
      name: 'Power BI & Tableau',
      percentage: 80,
      proficiency: 'Advanced',
      subSkills: ['DAX Formulas', 'Interactive Reports', 'Data ETL (PowerQuery)', 'Tableau Dashboards']
    }
  ]
};

function renderSkillIcon(id) {
  switch (id) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.2 23 20.4" className="tech-icon">
          <circle cx="0" cy="0" r="2.0" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'js_ts':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
          <path d="M12 4v16" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 14.881 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 15.121 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.392 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 9.121 12 6.001 12z" />
        </svg>
      );
    case 'angular':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="currentColor">
          <path d="M12 2L2 5.5v5.8c0 5.2 3.9 9.3 10 10.7 6.1-1.4 10-5.5 10-10.7V5.5L12 2zm0 3.3l5.5 8.7h-2.1l-1.1-2.1h-4.6l-1.1 2.1H6.5L12 5.3zm-1.6 5.4h3.2L12 7.7l-1.6 3.0z" />
        </svg>
      );
    case 'python_java':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="currentColor">
          <path d="M11.83 2c-3.1 0-2.88 1.34-2.88 1.34l.01 1.39h2.92v.42H7.79C6 5.15 6 6.95 6 6.95l.01 1.2h1.61v.3c0 0-.09 1.55 1.52 1.55h1.96V10h-2.9v1.27c0 0-.15 1.48 1.34 1.48h2.38v.85h.92V2c0 0 .17-.58.17-1.34M8.7 3.03a.52.52 0 0 1 .53.52.53.53 0 0 1-.53.53.52.52 0 0 1-.52-.53.52.52 0 0 1 .52-.52m3.13 8.97c3.1 0 2.88-1.34 2.88-1.34l-.01-1.39h-2.92v-.42h4.09c1.79 0 1.79-1.8 1.79-1.8l-.01-1.2h-1.61v-.3c0 0 .09-1.55-1.52-1.55h-1.96V4h2.9V2.73c0 0 .15-1.48-1.34-1.48h-2.38v-.85h-.92v11.6c0 0-.17.58-.17 1.34m3.13 1.03a.52.52 0 0 1-.53-.52c0-.29.24-.53.53-.53.29 0 .52.24.52.53a.52.52 0 0 1-.52.52z" />
        </svg>
      );
    case 'html_css':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
        </svg>
      );
    case 'node_nest':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
          <line x1="12" y1="22" x2="12" y2="15.5" />
          <polyline points="22 8.5 12 15.5 2 8.5" />
          <polyline points="12 2 12 8.5" />
        </svg>
      );
    case 'fastapi_express':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
          <polygon points="13 14 11 14 13 8 11 8 13 14" strokeWidth="1" fill="currentColor" />
        </svg>
      );
    case 'postgres_mongo':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case 'supabase_firebase':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'sql_design':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-2.239 10-5V7c0-2.761-4.477-5-10-5S2 4.239 2 7v10c0 2.761 4.477 5 10 5z" />
          <path d="M22 7c0 2.761-4.477 5-10 5S2 9.761 2 7" />
          <path d="M2 12c0 2.761 4.477 5 10 5s10-2.239 10-5" />
        </svg>
      );
    case 'rls_security':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <rect x="9" y="11" width="6" height="5" rx="1" />
          <path d="M10 11V9a2 2 0 1 1 4 0v2" />
        </svg>
      );
    case 'gen_ai':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="currentColor">
          <path d="M9 21c-.5 0-1-.3-1.2-.8L5.5 15l-5.2-2.3c-.6-.3-.8-1-.5-1.5.2-.4.6-.7 1.1-.7l5.2-2.3 2.3-5.2c.3-.6 1-.8 1.5-.5.4.2.7.6.7 1.1l2.3 5.2 5.2 2.3c.6.3.8 1 .5 1.5-.2.4-.6.7-1.1.7l-5.2 2.3-2.3 5.2c-.2.5-.7.8-1.2.8zm8.5-13.5c-.2 0-.4-.1-.5-.3l-.9-2.1-2.1-.9c-.3-.1-.4-.4-.3-.6.1-.2.2-.3.4-.3l2.1-.9.9-2.1c.1-.3.4-.4.6-.3.2.1.3.2.3.4l.9 2.1 2.1.9c.3.1.4.4.3.6-.1.2-.2.3-.4.3l-2.1.9-.9 2.1c-.1.2-.3.3-.5.3z" />
        </svg>
      );
    case 'aws':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19A3.5 3.5 0 0 0 13 15.7V17h-2v-3.7A5 5 0 0 0 6.5 18h11zM12 5C8 5 5 8 5 12h14c0-4-3-7-7-7z" />
        </svg>
      );
    case 'n8n':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      );
    case 'gdpr':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
          <path d="M12 14v4" />
        </svg>
      );
    case 'swagger':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      );
    case 'powerbi_tableau':
      return (
        <svg viewBox="0 0 24 24" className="tech-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    default:
      return null;
  }
}

const tvaLogs = {
  react: "Temporal UI rendering engine. Maintains seamless layout stability across infinite viewport changes.",
  js_ts: "Core temporal engine. Compiles standard scripts into strictly typed executable realities.",
  tailwind: "Visual stylesheet binder. Wraps utility tokens dynamically around design frameworks.",
  angular: "Structured runtime shield. Orchestrates large-scale application streams securely.",
  python_java: "Multi-threaded foundational compilers. Executes parallel scripting algorithms.",
  html_css: "Standard skeletal anchors. Paints layouts and structural layers across browsers.",
  node_nest: "Microservice thread engine. Handles high-concurrent operations asynchronously.",
  fastapi_express: "Lightning-speed API gateway. Validates schema inputs dynamically.",
  postgres_mongo: "Dual-engine document repository. Stores indexed queries with ACID safety.",
  supabase_firebase: "Real-time cloud database. Triggers serverless functions on timeline events.",
  sql_design: "Relational schema blueprints. Optimizes complex transactional data pipelines.",
  rls_security: "Database firewall. Restricts data access strictly to authorized users.",
  gen_ai: "Multiverse intelligence models. Chains LLM workflows and Safety alignments.",
  aws: "Global infrastructure mesh. Routes temporal traffic and hosts microservices.",
  n8n: "Workflow automation loop. Triggers nodes automatically based on event logs.",
  gdpr: "PII masking protocol. Encrypts sensitive timeline logs for user privacy.",
  swagger: "Interactive schema specifications. Generates clean auto-document templates.",
  powerbi_tableau: "Analytical visualization hub. Aggregates data trends into dynamic charts."
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('frontend');

  const tabButtons = [
    { id: 'frontend', label: 'Frontend & Languages' },
    { id: 'backend', label: 'Backend & Databases' },
    { id: 'tools', label: 'AI, Cloud & Tools' }
  ];

  return (
    <div className="container" id="services">
      {/* 1. Services Cards Grid */}
      <div className="text-center mb-5">
        <span className="section-tag">What I will do for you</span>
        <h2 className="section-title">
          My <span>Services</span>
        </h2>
      </div>

      <div className="services-grid mb-5">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`service-card ${service.highlighted ? 'highlighted' : ''} reveal-up`}
            style={{ transitionDelay: `${idx * 0.15}s` }}
          >
            <div className="service-icon">
              <i className={`bi ${service.icon}`}></i>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      {/* 2. Technical Capabilities Header */}
      <div className="d-flex flex-column align-items-center mt-5 mb-4 pt-3">
        <span className="section-tag">Detailed proficiency</span>
        <div className="d-flex  align-items-center  gap-3 mb-2">
          <h3 className="h4 text-uppercase anta-font m-0" style={{ letterSpacing: '1px' }}>
            Technical <span style={{ color: 'var(--accent)' }}>Capabilities</span>
          </h3>
        </div>
      </div>

      {/* Traditional Grid View (TVA Themed Terminals) */}
      <div className="reveal-up">
        {/* Tab Switch Controls */}
        <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
          {tabButtons.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="btn"
              style={{
                backgroundColor: activeTab === tab.id ? 'var(--accent)' : 'var(--tab-bg-inactive)',
                border: activeTab === tab.id ? '1px solid var(--accent)' : '1px solid var(--tab-border-inactive)',
                color: activeTab === tab.id ? 'var(--black)' : 'var(--white)',
                fontFamily: 'Anta, sans-serif',
                fontWeight: 'bold',
                fontSize: 'var(--text-xs)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                padding: '8px 18px',
                borderRadius: '4px',
                transition: 'var(--transition-fast)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Progress Bars List (TVA monitors) */}
        <div className="tech-list-grid">
          {skillTabs[activeTab].map((skill, idx) => (
            <div
              key={`${activeTab}-${idx}`}
              className="tech-progress-box"
              style={{ animationDelay: `${idx * 0.06}s` }}
            >
              <div className="tva-scanlines"></div>


              {/* Header info with SVG Icon */}
              <div className="d-flex align-items-center gap-3 mb-3" style={{ position: 'relative', zIndex: 15 }}>
                <div className="tech-icon-wrapper">
                  {renderSkillIcon(skill.id)}
                </div>
                <div className="flex-grow-1 min-w-0">
                  <div className="d-flex align-items-baseline justify-content-between gap-2">
                    <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 'bold', margin: 0, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} title={skill.name}>
                      {skill.name}
                    </h4>
                    <span className="proficiency-badge">
                      {skill.proficiency}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-1">
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>Temporal Integrity</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--loki-magic)', fontWeight: 'bold' }}>
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress bar container */}
              <div className="progress-bar-container mb-3" style={{ position: 'relative', zIndex: 15 }}>
                <div className="progress-fill" style={{ width: `${skill.percentage}%` }}></div>
              </div>

              {/* TVA Log statement in quotes */}
              <p
                className="tva-terminal-text mb-3"
                style={{
                  fontStyle: 'italic',
                  borderLeft: '2px solid var(--loki-magic-dim)',
                  paddingLeft: '8px',
                  fontSize: '0.76rem',
                  position: 'relative',
                  zIndex: 15
                }}
              >
                "{tvaLogs[skill.id]}"
              </p>

              {/* Sub-skills Badges list */}
              <div className="sub-skills-list">
                {skill.subSkills.map((sub, sIdx) => (
                  <span
                    key={sIdx}
                    className="sub-skill-tag"
                    style={{
                      borderColor: 'var(--loki-magic-dim)',
                      color: 'var(--white)'
                    }}
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
