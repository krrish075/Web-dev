import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <h3 className="footer__brand-name">PAAMAA</h3>
            <p className="footer__brand-sub">एक विश्वास</p>
            <p className="footer__brand-desc">
              Bringing you the goodness of nature in every product. Trusted daily
              essentials for a better and healthier life — from herbal soaps to
              premium teas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer__column-title">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/about" className="footer__link">About Us</Link></li>
              <li><Link to="/products" className="footer__link">Our Products</Link></li>
              <li><Link to="/gallery" className="footer__link">Gallery</Link></li>
              <li><Link to="/distributors" className="footer__link">Distributors</Link></li>
              <li><Link to="/contact" className="footer__link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="footer__column-title">Our Products</h4>
            <ul className="footer__links">
              {products.map((p) => (
                <li key={p.id}>
                  <Link to={`/products/${p.id}`} className="footer__link">
                    {p.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer__column-title">Contact Us</h4>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📞</span>
              <span>+91 12345 67890</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">✉️</span>
              <span>info@paamaa.com</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>
              <span>103, Green Park, New Delhi, India - 110016</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Paamaa. All rights reserved.</span>
          <span>Made with ♥ in India</span>
        </div>
      </div>
    </footer>
  );
}
