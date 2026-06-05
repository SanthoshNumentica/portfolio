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
    { name: 'React.js & Next.js (SSR/SSG)', percentage: 95 },
    { name: 'JavaScript (ES6+) & TypeScript', percentage: 95 },
    { name: 'Tailwind CSS', percentage: 90 },
    { name: 'Angular Framework', percentage: 85 },
    { name: 'Python & Java Core', percentage: 88 },
    { name: 'HTML5 & CSS3 Layouts', percentage: 95 }
  ],
  backend: [
    { name: 'Node.js & NestJS Microservices', percentage: 93 },
    { name: 'FastAPI (Python) & Express.js', percentage: 90 },
    { name: 'PostgreSQL & MongoDB', percentage: 90 },
    { name: 'Supabase & Firebase Systems', percentage: 92 },
    { name: 'SQL & Database Design', percentage: 88 },
    { name: 'Row Level Security (RLS)', percentage: 92 }
  ],
  tools: [
    { name: 'Generative AI (GPT-4 / Gemini / Claude)', percentage: 95 },
    { name: 'AWS Services (SQS / SES / Route 53)', percentage: 88 },
    { name: 'n8n Automation & Custom Workflows', percentage: 85 },
    { name: 'GDPR-aware Data Handling', percentage: 90 },
    { name: 'Swagger / OpenAPI Docs', percentage: 92 },
    { name: 'Power BI & Tableau', percentage: 80 }
  ]
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('frontend'); // 'frontend' | 'backend' | 'tools'

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

      {/* 2. Detailed Technical Progress Indicators */}
      <div className="text-center mt-5 mb-4 pt-3">
        <span className="section-tag">Detailed proficiency</span>
        <h3 className="h4 text-uppercase anta-font" style={{ letterSpacing: '1px' }}>
          Technical <span style={{ color: 'var(--accent)' }}>Capabilities</span>
        </h3>
      </div>

      {/* Tab Switch Controls */}
      <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
        {tabButtons.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="btn"
            style={{
              backgroundColor: activeTab === tab.id ? 'var(--accent)' : 'rgba(255, 255, 255, 0.02)',
              border: activeTab === tab.id ? '1px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.06)',
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

      {/* Dynamic Progress Bars List */}
      <div className="tech-list-grid">
        {skillTabs[activeTab].map((skill, idx) => (
          <div 
            key={`${activeTab}-${idx}`} 
            className="tech-progress-box"
            style={{ animationDelay: `${idx * 0.06}s` }}
          >
            <div className="d-flex justify-content-between mb-2">
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'bold' }}>{skill.name}</span>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--accent)', fontWeight: 'bold' }}>
                {skill.percentage}%
              </span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-fill" style={{ width: `${skill.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
