import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/products', label: 'Products' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/distributors', label: 'Distributors' },
  { path: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <div className="navbar__logo-icon">P</div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">PAAMAA</span>
            <span className="navbar__logo-sub">एक विश्वास</span>
          </div>
        </Link>

        <div className={`navbar__nav ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link to="/contact" className="navbar__cta">
          Inquiry Now →
        </Link>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
