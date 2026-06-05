import React, { useEffect, useState } from 'react';
import { Tooltip } from 'bootstrap';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import HeroSection from './components/HeroSection';
import WorkSection from './components/WorkSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import './style.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // 1. Initialize Tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltips = Array.from(tooltipTriggerList).map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );

    // 2. Stagger transition delays for child items in .stagger-container
    const staggerContainers = document.querySelectorAll('.stagger-container');
    staggerContainers.forEach((container) => {
      const items = container.querySelectorAll('.reveal-item');
      items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.12}s`;
      });
    });

    // 3. Liquid-Smooth Scroll Reveal Animation
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-item'
    );
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      tooltips.forEach((t) => t.dispose());
      revealElements.forEach((el) => revealObserver.unobserve(el));
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {/* Ambient Background Glows */}
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>
      <div className="bg-blob bg-blob-3"></div>

      {/* Header bar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Welcome */}
      <section className="reveal-up">
        <HeroSection />
      </section>

      {/* About Me Details */}
      <section className="reveal-left">
        <ProfileCard />
      </section>

      {/* Core Services and Tech Stack */}
      <section className="reveal-up">
        <SkillsSection />
      </section>

      {/* Project Portfolio */}
      <section className="reveal-scale">
        <ProjectsSection />
      </section>

      {/* Work History */}
      <section className="reveal-up">
        <WorkSection />
      </section>

      {/* Achievements & Recognition */}
      <section className="reveal-up">
        <CertificatesSection />
      </section>

      {/* Academic Qualifications */}
      <section className="reveal-up">
        <EducationSection />
      </section>

      {/* Contact Form */}
      <section className="reveal-scale">
        <ContactSection />
      </section>

      {/* Footnote */}
      <footer>
        <div className="container">
          <p className="m-0">
            &copy; {new Date().getFullYear()} Sadaiyappan Subramani. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
