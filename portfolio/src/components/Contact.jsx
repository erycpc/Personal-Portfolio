const links = [
  { label: "Instagram", href: "https://www.instagram.com/_.eryc/" },
  { label: "GitHub", href: "https://github.com/erycpc" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eric-mbithi-b2b661408/" },
  { label: "Twitter / X", href: "https://twitter.com/erycpc" },
  { label: "Resume PDF", href: "https://docs.google.com/document/d/1SMFX4lYc_HmHBdQbGXIhRo5sD8ja_dz-/edit?usp=sharing&ouid=102661546343558971383&rtpof=true&sd=true" },
  { label: "Email", href: "mailto:ericmbithiofficial@gmail.com" },

];

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="section-tag">04 // contact</p>
      <h2 className="section-title">
        Let's build<br />something.
      </h2>
      <div className="contact-inner">
        <p>
          I'm open to full-time roles, freelance contracts, and interesting
          collaborations. Send me an email and I'll get back to you within
          24 hours.
        </p>
        <a href="mailto:ericmbithiofficial@gmail.com" className="btn btn-primary">
          say hello →
        </a>
        <div className="contact-links">
          {links.map(({ label, href }) => (
            <a key={label} href={href} className="contact-link" target="_blank" rel="noreferrer">
              <span className="dot" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;