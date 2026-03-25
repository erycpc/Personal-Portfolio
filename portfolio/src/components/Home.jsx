const stats = [
  { num: "1", suffix: "+", label: "years experience" },
  { num: "1", suffix: "+", label: "projects shipped" },
  { num: "1", suffix: "+", label: "happy clients" },
];

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
 
      <p className="hero-tag">available for work</p>
 
      <h1 className="hero-title">
        Eric<br />
        <span>Mbithi</span>
      </h1>
 
      <p className="hero-desc">
        Software engineer crafting performant, scalable web applications
        with a sharp eye for design and user experience.
      </p>
 
      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">view work</a>
        <a href="#contact" className="btn btn-outline">get in touch</a>
      </div>
 
      <div className="hero-stats">
        {stats.map(({ num, suffix, label }) => (
          <div key={label}>
            <div className="stat-num">
              {num}<span>{suffix}</span>
            </div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home