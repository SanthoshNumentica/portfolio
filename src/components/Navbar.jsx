import { useState, useEffect } from 'react';

export default function Navbar({ theme, toggleTheme }) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down -> hide navbar
        setVisible(false);
        setIsOpen(false); // also close menu on scroll down
      } else {
        // Scrolling up -> show navbar
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="container">
        {/* Branding Logo */}
        <a className="nav-logo" href="#" onClick={closeMenu}>
          S<span>.</span>Subramani
        </a>

        {/* Hamburger Menu (Mobile) */}
        <button
          className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="mainNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Centered links and right buttons */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
          <ul className="navbar-nav mx-auto gap-1 gap-lg-2">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={closeMenu}>
                Hello
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeMenu}>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#work" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 ms-auto mt-3 mt-lg-0">
            {/* Social Icons */}
            <div className="d-flex gap-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover-accent fs-5 me-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover-accent fs-5 me-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="btn text-secondary hover-accent fs-5 d-flex align-items-center justify-content-center p-2 me-2 border-0"
              style={{ background: 'transparent', transition: 'var(--transition-fast)' }}
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <i className="bi bi-sun-fill" style={{ color: 'var(--accent)' }}></i>
              ) : (
                <i className="bi bi-moon-stars-fill" style={{ color: 'var(--accent)' }}></i>
              )}
            </button>

            {/* Let's Talk CTA button */}
            <a href="#contact" className="talk-btn" onClick={closeMenu}>
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
