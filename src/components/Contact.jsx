import { useState } from 'react';
import { personal } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    if (!name || !email || !subject || !message) return;

    const text = `Hello Baah Isaac, my name is ${name}.\n\n*Subject:* ${subject}\n*Email:* ${email}\n\n*Message:*\n${message}`;
    const url = `https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const infoItems = [
    {
      icon: 'fa-solid fa-phone',
      label: 'Phone',
      value: (
        <>
          <a href={`tel:${personal.phone1.replace(/\s/g, '')}`}>{personal.phone1}</a>
          <br />
          <a href={`tel:${personal.phone2.replace(/\s/g, '')}`}>{personal.phone2}</a>
        </>
      ),
    },
    {
      icon: 'fa-solid fa-envelope',
      label: 'Email',
      value: <a href={`mailto:${personal.email}`}>{personal.email}</a>,
    },
    {
      icon: 'fa-solid fa-location-dot',
      label: 'Address',
      value: (
        <>
          <div>{personal.address}</div>
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Build <span>Something Great</span></h2>
          <div className="line-divider" />
          <p className="section-desc">
            Have a project in mind? I'd love to hear about it. Send me a message and let's get started.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info side */}
          <div className="reveal reveal-delay-1">
            <div className="contact-info-list">
              {infoItems.map((item) => (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className={item.icon} />
                  </div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    <div className="contact-info-value">{item.value}</div>
                  </div>
                </div>
              ))}

              {/* Download CV */}
              <a href="/images/CV-Baah-Isaac-Brem.pdf" download className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: 4 }}>
                <i className="fa-solid fa-file-pdf" /> Download CV
              </a>

              {/* Socials */}
              <div>
                <div className="contact-info-label" style={{ marginBottom: 10 }}>Find Me Online</div>
                <div className="contact-socials">
                  {personal.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-social"
                      aria-label={s.label}
                    >
                      <i className={s.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="reveal reveal-delay-2">
            <div className="contact-form-card">
              <h3 className="contact-form-title">
                Send a Message
              </h3>
              <p className="contact-form-desc">
                Your message will open directly in WhatsApp — the fastest way to reach me.
              </p>

              {sent && (
                <div className="contact-form-success">
                  <i className="fa-solid fa-circle-check" />
                  WhatsApp opened! Message is ready to send.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      className="form-input"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    className="form-input"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.1rem' }} />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
