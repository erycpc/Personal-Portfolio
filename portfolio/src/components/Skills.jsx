const skills = [
  {
    icon: "🎨",
    title: "Frontend",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    icon: "🛠",
    title: "Backend",
    tags: ["Python", "Flask"],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <p className="section-tag">02 // skills</p>
      <h2 className="section-title">My toolkit.</h2>
      <div className="skills-grid">
        {skills.map(({ icon, title, tags }) => (
          <div className="skill-card" key={title}>
            <div className="skill-icon">{icon}</div>
            <h3>{title}</h3>
            <div className="skill-tags">
              {tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;