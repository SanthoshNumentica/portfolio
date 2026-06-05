import React, { useState, useEffect } from 'react';
import reactLogo from '../assets/react.svg';

const roles = [
  'MERN Stack Specialist.',
  'AI Systems Architect.',
  'LLM Pipeline Engineer.',
  'Cloud Integration Lead.'
];

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setAnimate(true);
      }, 350); // matching fade out transition duration
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container hero-layout position-relative">
      <div className="row align-items-center w-100 g-5">
        
        {/* Left Side: Headline and copy */}
        <div className="col-lg-6 order-2 order-lg-1">
          <div className="hero-greeting">Hello, I'm a</div>
          <h1 className="hero-title" style={{ minHeight: '130px' }}>
            Senior <span className={`hero-role-text ${animate ? 'fade-slide-in' : 'fade-slide-out'}`}>{roles[currentRoleIndex]}</span>
          </h1>
          <p className="hero-description">
            I architect AI-driven enterprise platforms, production LLM pipelines, and predictive risk modeling systems. Leveraging deep expertise across React, Node.js, and Python to transform concepts into scalable, production-ready software.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <a href="#projects" className="primary-btn">
              View Portfolio
            </a>
            <a href="#contact" className="outline-btn">
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right Side: Portrait overlapping green polygons */}
        <div className="col-lg-6 order-1 order-lg-2 text-center">
          <div className="hero-image-wrapper">
            <div className="hero-image-backdrop"></div>
            <div className="hero-polygon-bg"></div>
            
            {/* Floating Hero Badges */}
            <div className="hero-badge-floating badge-react">
              <img src={reactLogo} alt="React logo" style={{ width: '16px', height: '16px' }} />
              <span>React 19</span>
            </div>
            <div className="hero-badge-floating badge-ai">
              <i className="bi bi-cpu-fill text-warning"></i>
              <span>GenAI & LLMs</span>
            </div>
            <div className="hero-badge-floating badge-node">
              <i className="bi bi-node-plus-fill text-success"></i>
              <span>Node.js</span>
            </div>

            <img
              src="/images/developer-profile.png"
              alt="Sadaiyappan Subramani portrait"
              className="hero-profile-img"
            />
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-down-wrapper">
        <a href="#about" className="scroll-down-mouse" aria-label="Scroll to About Section">
          <span className="scroll-down-wheel"></span>
        </a>
      </div>
    </div>
  );
}
