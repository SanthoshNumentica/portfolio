import React from 'react';

const experiences = [
  {
    company: 'Numentica UI',
    location: 'Chennai (Hybrid)',
    duration: 'Sep 2025 - Present',
    position: 'Senior Software Engineer',
    bullets: [
      'AI Architecture & Collaboration: Partnered with cross-functional teams to architect AI-driven solutions for the FLEET AI platform, integrating GPT-4 and Gemini to seamlessly resolve 50%+ of routine enterprise order queries.',
      'Workflow Optimization: Architected intelligent backend workflows using Node.js and AI models, leveraging robust analytical problem-solving skills to increase end-to-end data processing accuracy by 15%.',
      'Cloud Infrastructure: Built data layers with Supabase implementing Row Level Security (RLS) to enforce 100% multi-tenant data isolation.',
      'Data Privacy (GDPR): Standardized GDPR-compliant data handling, securing 100k+ sensitive AI conversational logs by implementing end-to-end data encryption at rest.',
      'Latency Optimization: Streamlined deployment pipelines using AWS Route 53 and AWS SQS event queues, reducing system latency by 20%.'
    ],
    tech: ['React 19', 'Node.js', 'Supabase', 'GPT-4', 'Gemini', 'AWS', 'GDPR']
  },
  {
    company: 'ITOI',
    location: 'Coimbatore (Hybrid)',
    duration: 'Jan 2023 - Sep 2025',
    position: 'Technical Lead & Senior Developer',
    bullets: [
      'Team Leadership & Teamwork: Cultivated active teamwork while leading a cross-functional team of 10 developers, overseeing end-to-end design and data-driven decision-making.',
      'High-Performance Backend: Spearheaded microservices using NestJS and FastAPI processing 2M+ daily API requests, reducing server overhead by 15%.',
      'Collaborative Quality Engineering: Boosted team code quality scores by 40% and reduced production defects by 25% through rigorous code reviews.',
      'Awards: Recognized as Employee of the Year (2024 & 2025) for driving high-impact contributions to core API infrastructure.'
    ],
    tech: ['NestJS', 'FastAPI', 'Python', 'Node.js', 'PostgreSQL', 'TypeScript', 'Agile']
  }
];

export default function WorkSection() {
  return (
    <div className="container" id="work">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="section-tag">My career path</span>
        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>
      </div>

      {/* Timeline Track */}
      <div className="timeline-track mt-5 text-start">
        {experiences.map((exp, idx) => (
          <div 
            key={idx} 
            className="timeline-item reveal-left"
            style={{ transitionDelay: `${idx * 0.25}s` }}
          >
            <div className="timeline-header">
              <div>
                <h3 className="h5 font-weight-bold" style={{ color: 'var(--white)', margin: 0 }}>
                  {exp.position} <span style={{ color: 'var(--accent)', fontWeight: 'normal' }}>@ {exp.company}</span>
                </h3>
                <span className="text-secondary" style={{ fontSize: 'var(--text-xs)' }}>
                  {exp.location}
                </span>
              </div>
              <div>
                <span className="duration-tag">{exp.duration}</span>
              </div>
            </div>
            
            <div className="timeline-body mt-2">
              <ul className="text-secondary ps-3 mb-4" style={{ fontSize: 'var(--text-sm)', lineHeight: '1.6' }}>
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="mb-2">{bullet}</li>
                ))}
              </ul>
              <div className="tech-stack mt-2">
                {exp.tech.map((tag, tIdx) => (
                  <span key={tIdx} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
