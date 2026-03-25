function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
 
        <div className="about-text">
          <p className="section-tag">// about me</p>
          <h2 className="section-title">
            Building things<br />
            <span>that matter</span>
          </h2>
          <p className="about-body">
            I'm Eric, a full-stack software engineer based in Nairobi, Kenya.
            I specialise in building performant web applications and APIs — from
            slick React frontends to robust Python backends powered by Django and FastAPI.
          </p>
          <p className="about-body">
            I care deeply about clean architecture, readable code, and shipping products
            that users actually enjoy. When I'm not coding, you'll find me obsessing over
            developer tooling or exploring the Nairobi tech scene.
          </p>
 
          <div className="about-details">
            <div className="detail-row">
              <span className="detail-key">location</span>
              <span className="detail-val">Nairobi, Kenya</span>
            </div>
            <div className="detail-row">
              <span className="detail-key">focus</span>
              <span className="detail-val">Full-stack · Python · APIs</span>
            </div>
            <div className="detail-row">
              <span className="detail-key">available</span>
              <span className="detail-val">
                <span className="available-dot" /> open to work
              </span>
            </div>
          </div>
        </div>
 
        <div className="about-image-wrap">
          <div className="about-image-box">
            <img src="public/Screenshot_20260308_230235_Instagram.jpg" alt="Eric Mbithi" />
          </div>
          <div className="about-image-accent" />
        </div>
 
      </div>
    </section>
  );
}
 
export default About;