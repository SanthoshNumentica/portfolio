
const projects = [
  {
    title: 'TMS Insights (Vision Zero Analytics)',
    status: 'Featured AI Platform',
    icon: 'bi-laptop',
    description: 'A map-integrated geospatial safety analysis platform. Features an AI Safety Copilot and Grant Assistant to automate federal grant drafting, statistical crash anomaly engines, and interactive street intervention simulations.',
    bullets: [
      'AI-Driven Analytics: Developed a map-integrated Safety Copilot & Grant Assistant using FastAPI and OpenAI to automate federal grant drafting (SS4A), reducing report preparation time by 75%.',
      'Anomaly Detection & ML: Built Python statistical engines (Chi-Square, Z-Tests) to isolate crash hot-spots, and trained a Scikit-Learn Logistic Regression model (0.84 ROC-AUC) to predict severe crash probabilities.',
      'Geospatial Visualization: Integrated Deck.gl and MapLibre GL in React 19 to render hardware-accelerated hexagonal bins and heatmaps of 10k+ spatial records with sub-second responsive filtering.',
      'What-If Simulator: Designed a counterfactual simulation engine utilizing FHWA Crash Modification Factors (CMF) to model street interventions.'
    ],
    tech: ['React 19', 'FastAPI', 'Deck.gl', 'PostgreSQL', 'OpenAI', 'Scikit-Learn'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Supplynow (FLEET AI Platform)',
    status: 'Completed Enterprise System',
    icon: 'bi-truck',
    description: 'An enterprise-grade supply chain chatbot and orders platform. Handles multi-tenant routing, automated messaging queues, and advanced data retrieval optimization.',
    bullets: [
      'AI-Driven Support: Deflected over 50% of routine order inquiries and reduced manual ticket volume by launching the FLEET AI chatbot using FastAPI and Node.js.',
      'Multi-Tenant Architecture: Architected a robust multi-tenant data model using Supabase and Row Level Security (RLS) to guarantee 100% data isolation for over 50 supplier accounts.',
      'Performance Engineering: Optimized data pipelines with PostgreSQL Materialized Views, resulting in a 20% database performance boost.',
      'Queue & Messaging: Integrated AWS SQS for async background worker queues and AWS SES for notifications, achieving 99.9% delivery reliability.'
    ],
    tech: ['Node.js', 'FastAPI', 'Supabase (RLS)', 'PostgreSQL', 'AWS (SQS/SES)', 'Gemini API'],
    demoUrl: '#',
    githubUrl: '#'
  }
];

export default function ProjectsSection() {
  return (
    <div className="container" id="projects">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="section-tag">Showcasing my works</span>
        <h2 className="section-title">
          My <span>Portfolio</span>
        </h2>
      </div>

      {/* Grid of Projects */}
      <div className="projects-showcase-grid">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className="portfolio-card reveal-scale"
            style={{ transitionDelay: `${idx * 0.2}s` }}
          >
            {/* Project Image Box with Hover Overlay links */}
            <div className="portfolio-img-box">
              <div className="portfolio-overlay">
                <a
                  href={proj.demoUrl}
                  className="portfolio-action-link"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Live Demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-eye-fill"></i>
                </a>
                <a
                  href={proj.githubUrl}
                  className="portfolio-action-link"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
              
              {/* Fallback styling icon if image is loaded statically */}
              <div
                className="d-flex align-items-center justify-content-center w-100 h-100"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.015)', color: 'var(--accent)', fontSize: '4rem' }}
              >
                <i className={`bi ${proj.icon}`}></i>
              </div>
            </div>

            {/* Project Copy */}
            <div className="portfolio-content">
              <div>
                <span className="text_main" style={{ fontSize: 'var(--text-xs)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {proj.status}
                </span>
                <h3 className="h5 mt-1 mb-3 font-weight-bold" style={{ color: 'var(--white)' }}>
                  {proj.title}
                </h3>
                <p className="text-secondary" style={{ fontSize: 'var(--text-sm)', lineHeight: '1.6' }}>
                  {proj.description}
                </p>

                <ul className="text-secondary ps-3 mb-4" style={{ fontSize: 'var(--text-xs)', lineHeight: '1.6' }}>
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="mb-2">{bullet}</li>
                  ))}
                </ul>
                
                {/* Mobile/Tablet direct action buttons */}
                <div className="portfolio-mobile-links">
                  <a
                    href={proj.demoUrl}
                    className="portfolio-mobile-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-eye-fill"></i> Live Demo
                  </a>
                  <a
                    href={proj.githubUrl}
                    className="portfolio-mobile-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i> GitHub
                  </a>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)', paddingTop: 'var(--space-md)' }}>
                {proj.tech.map((tag, tIdx) => (
                  <span key={tIdx} className="tech-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
