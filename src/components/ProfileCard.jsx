
export default function ProfileCard() {
  return (
    <div className="container" id="about">
      <div className="row align-items-center g-5">
        
        {/* Left Side: Organic Portrait Blob & Floating Metric Badges */}
        <div className="col-lg-5 text-center position-relative">
          <div className="about-image-container">
            {/* Floating Badges */}
            <div className="stat-badge-floating">
              <span className="floating-number">+4</span>
              <span className="floating-label">Years Exp</span>
            </div>
            <div className="stat-badge-floating">
              <span className="floating-number">2M+</span>
              <span className="floating-label">Daily APIs</span>
            </div>
            <div className="stat-badge-floating">
              <span className="floating-number">+40%</span>
              <span className="floating-label">Code Quality</span>
            </div>

            {/* Blob Frame Container */}
            <div className="about-blob-frame">
              <img
                src="/images/developer-profile.png"
                alt="Sadaiyappan Subramani portrait"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Introduction Details */}
        <div className="col-lg-7 text-start">
          <span className="section-tag">Let me introduce myself</span>
          <h2 className="section-title">
            About <span>me</span>
          </h2>
          <h3 className="h5 text_main mb-3" style={{ fontFamily: 'var(--bs-font-sans-serif)' }}>
            A story of hardwork and perseverance.
          </h3>
          <p className="text-secondary mb-4" style={{ fontSize: 'var(--text-base)', lineHeight: '1.7' }}>
            I am a senior full-stack engineer and technical lead based in Chennai/Coimbatore, India. I specialize in designing robust, scalable microservices architectures and pioneering intelligent AI systems utilizing Large Language Models (LLMs). With recognized achievements twice as Employee of the Year, I drive business success by combining agile teamwork, strict software engineering practices, and rapid adaptation to emerging technologies.
          </p>

          {/* Core Relocation/Visa Meta info */}
          <div className="row g-3 mb-4 text-start">
            <div className="col-sm-6">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-card-checklist text-success"></i>
                <span style={{ fontSize: 'var(--text-sm)' }}><strong>Visa:</strong> German EU Blue Card Eligible</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-mortarboard-fill text-success"></i>
                <span style={{ fontSize: 'var(--text-sm)' }}><strong>Degree:</strong> ZAB Anabin H+ Recognized</span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-clock-history text-success"></i>
                <span style={{ fontSize: 'var(--text-sm)' }}><strong>Availability:</strong> 15 Days Notice</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt-fill text-success"></i>
                <span style={{ fontSize: 'var(--text-sm)' }}><strong>Relocation:</strong> Open to Germany</span>
              </div>
            </div>
          </div>

          {/* Contact and Buttons */}
          <div className="mb-4">
            <span className="text-secondary" style={{ fontSize: 'var(--text-sm)' }}>
              <strong>Contact:</strong>{' '}
              <a href="mailto:contact.sadaiyappan@gmail.com" className="text_main text-decoration-none">
                contact.sadaiyappan@gmail.com
              </a>
            </span>
          </div>

          <div className="d-flex flex-wrap gap-3">
            <a href="#contact" className="primary-btn">
              Hire Me
            </a>
            <a href="#" className="outline-btn">
              Download CV
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
