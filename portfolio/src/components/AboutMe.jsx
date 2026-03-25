function About() {
  return (
    <section className="about" id="about">
      <p className="section-tag">01 // about me</p>
      <div className="about-grid">
        <div className="about-text">
          <h2 className="section-title">
            Building things<br />that matter.
          </h2>
          <p>
            I'm <strong>Eric Mbithi</strong>, a software engineer passionate about
            creating elegant solutions to complex problems. I'm constantly learning
            new technologies and techniques to stay at the forefront of the
            ever-evolving web landscape.
          </p>
          <p>
            I believe great software is as much about <strong>people</strong> as
            it is about code — clean, thoughtful, and built to last.
          </p>
          <a href="#contact" className="btn btn-primary">let's collaborate</a>
        </div>
        <div className="about-avatar">
          <img src="/retouch_2025102912025203.jpg" alt="Eric Mbithi" className="about-img" />
        </div>
      </div>
    </section>
  );
}
 
export default About;