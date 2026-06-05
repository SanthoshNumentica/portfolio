import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="container" id="contact">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="section-tag">Get in touch</span>
        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>
      </div>

      {/* Form Container */}
      <div className="row justify-content-center mt-4 text-start">
        <div className="col-lg-8">
          <div className="contact-container-box">
            <p className="text-secondary mb-4" style={{ fontSize: 'var(--text-sm)', lineHeight: '1.6' }}>
              Ready to collaborate, hire me, or discuss your upcoming projects? Send me a message and I will respond to you within 24 hours.
            </p>
            
            {status === 'success' && (
              <div className="alert alert-success border-0 text-center mb-4" style={{ backgroundColor: 'rgba(0, 255, 170, 0.08)', color: 'var(--accent)', borderRadius: '4px' }}>
                <i className="bi bi-check-circle-fill me-2"></i>
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="contact-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting'}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="contact-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="contact-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="contact-input"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder="Tell me about your project or inquiry..."
                  disabled={status === 'submitting'}
                ></textarea>
              </div>

              <button
                type="submit"
                className="primary-btn mt-3"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="bi bi-send-fill me-2"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
