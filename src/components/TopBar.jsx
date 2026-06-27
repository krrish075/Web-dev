export default function TopBar() {
  return (
    <div className="topbar">
      <span className="topbar__message">
        🌿 Trusted Daily Essentials for a Better &amp; Healthier Life
      </span>
      <div className="topbar__right">
        <span className="topbar__social">
          <span>Follow Us</span>
          <a href="#" className="topbar__social-link" aria-label="Instagram">📷</a>
          <a href="#" className="topbar__social-link" aria-label="Facebook">f</a>
          <a href="#" className="topbar__social-link" aria-label="YouTube">▶</a>
        </span>
        <span className="topbar__phone">📞 +91 9112267000</span>
      </div>
    </div>
  );
}
