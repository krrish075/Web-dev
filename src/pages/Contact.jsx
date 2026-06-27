export default function Contact() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Contact Us</h1>
          <div className="page-header__breadcrumb">
            <a href="/">Home</a> / Contact
          </div>
        </div>
      </div>

      <section className="section section--white">
        <div className="container">
          <div className="form-grid">
            <div>
              <h2 className="section__title">Get in Touch</h2>
              <p className="story__text">
                We'd love to hear from you. Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
              </p>
              
              <div style={{marginTop: '30px'}}>
                <div className="contact-info__item">
                  <div className="contact-info__icon">📍</div>
                  <div>
                    <div className="contact-info__label">Head Office</div>
                    <div className="contact-info__value">121B, Sawale,Rasyani, Panvel<br/>India - 410207</div>
                  </div>
                </div>
                
                <div className="contact-info__item">
                  <div className="contact-info__icon">📞</div>
                  <div>
                    <div className="contact-info__label">Phone</div>
                    <div className="contact-info__value">+91 9112267000</div>
                  </div>
                </div>
                
                <div className="contact-info__item">
                  <div className="contact-info__icon">✉️</div>
                  <div>
                    <div className="contact-info__label">Email</div>
                    <div className="contact-info__value">paamaagg@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="contact-info" onSubmit={e => e.preventDefault()}>
                <h3 className="section__title" style={{fontSize: '1.4rem'}}>Send us a Message</h3>
                
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" placeholder="Enter your full name" required />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="Enter your email" required />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-input" placeholder="What is this regarding?" required />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" placeholder="Write your message here..." required></textarea>
                </div>
                
                <button type="submit" className="btn btn--primary" style={{width: '100%', justifyContent: 'center'}}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
