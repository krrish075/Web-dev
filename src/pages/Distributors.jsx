import { useState, useEffect } from 'react';

const INITIAL_FORM = {
  companyName: '',
  contactPerson: '',
  phone: '',
  location: '',
  message: '',
};

const MAX_MESSAGE_LENGTH = 500;

export default function Distributors() {
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

    const botcheck = e.target.elements.botcheck?.checked || false;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'a5a7c35d-f4a5-45ad-9d29-550a55e9a663', // Same key used in Contact form
          subject: 'New Distributor Inquiry - ' + form.companyName,
          from_name: form.contactPerson, // Maps to Web3Forms "from name"
          company_name: form.companyName,
          phone: form.phone,
          location: form.location,
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
      setErrorMsg('Network error. Please try again or contact us directly.');
    }
  };

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
                Partner with one of India's fastest-growing FMCG brands. We
                offer excellent margins, dedicated support, and high-quality
                products that customers love and trust.
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
              <form className="contact-info" onSubmit={handleSubmit}>
                <h3 className="section__title" style={{ fontSize: '1.4rem' }}>
                  Distributor Inquiry Form
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
                    Thank you! Your distributor inquiry has been sent. We'll be in touch shortly.
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
                  <label htmlFor="companyName" className="form-label">Company/Firm Name</label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    className="form-input"
                    placeholder="Enter your business name"
                    value={form.companyName}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactPerson" className="form-label">Contact Person</label>
                  <input
                    id="contactPerson"
                    name="contactPerson"
                    type="text"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={form.contactPerson}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="location" className="form-label">City & State</label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    className="form-input"
                    placeholder="Enter your location"
                    value={form.location}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="form-group" style={{ position: 'relative' }}>
                  <label htmlFor="message" className="form-label">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your distribution network..."
                    value={form.message}
                    onChange={handleChange}
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
                      transition: 'color 0.3s ease',
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
                      Submitting...
                    </>
                  ) : (
                    'Submit Inquiry'
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
