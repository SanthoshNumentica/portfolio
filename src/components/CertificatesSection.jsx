
const achievements = [
  {
    title: 'Employee of the Year',
    issuer: 'ITOI Solutions (2024 & 2025)',
    icon: 'bi-trophy-fill',
    description: 'Awarded twice in a row for stellar technical leadership, optimizing microservices latency, and contributions to core API infrastructure.'
  },
  {
    title: 'German EU Blue Card Eligible',
    issuer: 'Immigration Criteria Met',
    icon: 'bi-file-earmark-person-fill',
    description: 'Fully qualified under German fast-track skilled immigration laws. Ready for quick deployment.'
  },
  {
    title: 'Anabin H+ Recognized B.E.',
    issuer: 'ZAB Equivalence Verified',
    icon: 'bi-patch-check-fill',
    description: 'Bachelor of Engineering Degree fully recognized with H+ status, matching German higher education standards.'
  }
];

export default function CertificatesSection() {
  return (
    <div className="container" id="achievements">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="section-tag">Key Honors & Recognition</span>
        <h2 className="section-title">
          My <span>Achievements</span>
        </h2>
      </div>

      {/* Grid of Achievements */}
      <div className="row g-4 mt-2 text-start">
        {achievements.map((ach, idx) => (
          <div 
            key={idx} 
            className="col-md-4 reveal-scale"
            style={{ transitionDelay: `${idx * 0.15}s` }}
          >
            <div className="achievement-card">
              <div>
                <div
                  className="d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(0, 255, 170, 0.05)',
                    border: '1px solid rgba(0, 255, 170, 0.1)',
                    color: 'var(--accent)',
                    fontSize: '1.25rem'
                  }}
                >
                  <i className={`bi ${ach.icon}`}></i>
                </div>
                <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 'bold', color: 'var(--white)', marginBottom: '4px' }}>
                  {ach.title}
                </h3>
                <span className="text_main mb-3 d-block" style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {ach.issuer}
                </span>
                <p className="text-secondary mb-0" style={{ fontSize: 'var(--text-xs)', lineHeight: '1.5' }}>
                  {ach.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
