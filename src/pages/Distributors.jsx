export default function Distributors() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Become a Distributor</h1>
          <div className="page-header__breadcrumb">
            <a href="/">Home</a> / Distributors
          </div>
        </div>
      </div>

      <section className="section section--white">
        <div className="container">
          <div className="form-grid">
            <div>
              <span className="section__label">PARTNERSHIP</span>
              <h2 className="section__title">Join the PAAMAA Family</h2>
              <p className="story__text">
                Partner with one of India's fastest-growing FMCG brands. We offer excellent margins, dedicated support, and high-quality products that customers love and trust.
              </p>
              
              <div className="story__values">
                <div className="story__value">
                  <span className="story__value-icon">✓</span> High Profit Margins
                </div>
                <div className="story__value">
                  <span className="story__value-icon">✓</span> Marketing Support
                </div>
                <div className="story__value">
                  <span className="story__value-icon">✓</span> Premium Products
                </div>
                <div className="story__value">
                  <span className="story__value-icon">✓</span> Timely Supply
                </div>
              </div>
            </div>

            <div>
              <form className="contact-info" onSubmit={e => e.preventDefault()}>
                <h3 className="section__title" style={{fontSize: '1.4rem'}}>Distributor Inquiry Form</h3>
                
                <div className="form-group">
                  <label className="form-label">Company/Firm Name</label>
                  <input type="text" className="form-input" placeholder="Enter your business name" required />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Contact Person</label>
                  <input type="text" className="form-input" placeholder="Enter your full name" required />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" placeholder="Enter your phone number" required />
                </div>
                
                <div className="form-group">
                  <label className="form-label">City & State</label>
                  <input type="text" className="form-input" placeholder="Enter your location" required />
                </div>

                <div className="form-group">
                  <label className="form-label">Message (Optional)</label>
                  <textarea className="form-textarea" placeholder="Tell us about your distribution network..."></textarea>
                </div>
                
                <button type="submit" className="btn btn--primary" style={{width: '100%', justifyContent: 'center'}}>
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
