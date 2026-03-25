const links = [
  { label: "GitHub", href: "https://github.com/erycpc" },
  { label: "LinkedIn", href: "https://linkedin.com/in/eric-mbithi-0a10222a3/" },
  { label: "Twitter / X", href: "https://twitter.com/_ericmbithi" },
  { label: "Resume PDF", href: "#" },
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
        <a href="mailto:ericmbithiofficial@example.com" className="btn btn-primary">
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