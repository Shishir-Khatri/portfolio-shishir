import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'f9c3a471-bc44-4269-978b-a63414f693ac',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
          replyto: formData.email
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shishirkhattri444@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="section contact" id="contact">
      <div className="contact-inner reveal in">
        <span className="eyebrow">04 — Contact</span>
        <h2 className="contact-title">
          Let's build something<br />
          <span className="accent-line"><span>worth remembering.</span></span>
        </h2>
        <p className="contact-sub">
          Have a question, workflow automation project, or internship opportunity? Drop me a message below!
        </p>

        {/* Email Copy Badge */}
        <div className="email-badge-container">
          <button className="email-badge" onClick={handleCopyEmail} title="Click to copy email">
            <i className="fa-regular fa-envelope" />
            <span>shishirkhattri444@gmail.com</span>
            <i className={`fa-solid ${copied ? 'fa-check text-green-400' : 'fa-copy'}`} />
          </button>
          {copied && <span className="copy-toast">Email copied to clipboard!</span>}
        </div>

        {/* Interactive Contact Form */}
        <div className="contact-card">
          {status === 'success' ? (
            <div className="form-success">
              <div className="success-icon">
                <i className="fa-solid fa-circle-check" />
              </div>
              <h3>Message Sent!</h3>
              <p>Thank you for getting in touch. Your message has been routed to <strong>shishirkhattri444@gmail.com</strong>. I'll get back to you shortly!</p>
              <button className="btn btn-ghost" onClick={() => setStatus('idle')}>
                Send another message
              </button>
            </div>
          ) : status === 'error' ? (
            <div className="form-success">
              <div className="success-icon" style={{ color: '#ef4444' }}>
                <i className="fa-solid fa-circle-xmark" />
              </div>
              <h3>Something went wrong</h3>
              <p>Your message couldn't be sent. Please try again or email me directly at <strong>shishirkhattri444@gmail.com</strong>.</p>
              <button className="btn btn-ghost" onClick={() => setStatus('idle')}>
                Try again
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="e.g. AI & Automation Opportunity / Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about your project, workflow ideas, or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={status === 'submitting'}
                data-magnetic
              >
                {status === 'submitting' ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <i className="fa-solid fa-paper-plane" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Social Links */}
        <div className="socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-magnetic>
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-magnetic>
            <i className="fa-brands fa-linkedin-in" />
          </a>
        </div>
      </div>
    </section>
  );
}
