import { useState, useEffect } from 'react';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };
const MAX_MESSAGE_LENGTH = 500;

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  // Auto-hide success toast after 5 seconds
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Enforce max length on message
    if (name === 'message' && value.length > MAX_MESSAGE_LENGTH) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    // Web3Forms expects FormData or JSON. We'll use JSON.
    // We include the botcheck field value directly from the form element.
    const botcheck = e.target.elements.botcheck?.checked || false;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'a5a7c35d-f4a5-45ad-9d29-550a55e9a663',
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          botcheck: botcheck,
        }),
      });

      const json = await response.json();

      if (response.status === 200) {
        setStatus('success');
        setForm(INITIAL_FORM);
      } else {
        console.error('Web3Forms Error:', json);
        setStatus('error');
        setErrorMsg(json.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
      setErrorMsg('Network error. Please try again or email us directly.');
    }
  };

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
            {/* Contact Info */}
            <div>
              <h2 className="section__title">Get in Touch</h2>
              <p className="story__text">
                We'd love to hear from you. Whether you have a question about
                our products, pricing, or anything else, our team is ready to
                answer all your questions.
              </p>

              <div style={{ marginTop: '30px' }}>
                <div className="contact-info__item">
                  <div className="contact-info__icon">📍</div>
                  <div>
                    <div className="contact-info__label">Head Office</div>
                    <div className="contact-info__value">
                      121B, Sawale, Rasyani, Panvel
                      <br />
                      India - 410207
                    </div>
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

            {/* Contact Form */}
            <div>
              <form className="contact-info" onSubmit={handleSubmit}>
                <h3 className="section__title" style={{ fontSize: '1.4rem' }}>
                  Send us a Message
                </h3>

                {/* Hidden Honeypot Field for spam protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                />

                {/* Success Message Notification */}
                {status === 'success' && (
                  <div
                    className="animate-fade-in"
                    style={{
                      background: '#E8F5E9',
                      border: '1px solid #A5D6A7',
                      borderRadius: '10px',
                      padding: '14px 18px',
                      marginBottom: '20px',
                      color: '#1A6B2A',
                      fontWeight: 500,
                      fontSize: '0.92rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>✅</span>
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                {/* Error Message Notification */}
                {status === 'error' && (
                  <div
                    className="animate-fade-in"
                    style={{
                      background: '#FFEBEE',
                      border: '1px solid #FFCDD2',
                      borderRadius: '10px',
                      padding: '14px 18px',
                      marginBottom: '20px',
                      color: '#C62828',
                      fontWeight: 500,
                      fontSize: '0.92rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>❌</span>
                    {errorMsg}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    className="form-input"
                    placeholder="What is this regarding?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="form-group" style={{ position: 'relative' }}>
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                  />
                  {/* Character Counter */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-22px',
                      right: '4px',
                      fontSize: '0.75rem',
                      color: form.message.length >= MAX_MESSAGE_LENGTH ? '#C62828' : 'var(--color-text-muted)',
                      fontWeight: form.message.length >= MAX_MESSAGE_LENGTH ? '600' : '400',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {form.message.length}/{MAX_MESSAGE_LENGTH}
                  </span>
                </div>

                <button
                  type="submit"
                  className="btn btn--primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '15px' }}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <span
                        style={{
                          display: 'inline-block',
                          width: '16px',
                          height: '16px',
                          border: '2px solid rgba(255,255,255,0.4)',
                          borderTopColor: 'white',
                          borderRadius: '50%',
                          animation: 'spin 0.8s linear infinite',
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
