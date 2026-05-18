const projects = [
  {
    id: "skillcast",
    tag: "web app",
    title: "SkillCast",
    description: 
    "A full-stack web application for connecting people with skills to those who need them. Built with the MERN stack (MongoDB, Express, React, Node.js).",
    tech: ["React", "Vercel", "React-Router", "MongoDB", "Express", "Node"],
    github: "https://github.com/erycpc/SkillCast",
    live: "https://skill-cast.vercel.app/"
  },
  {
    id: "budgetbuddy",
    tag: "web app",
    title: "Budget Buddy",
    description: 
    "A full-stack personal finance web application built on the MERN stack with AI-powered financial advisory.",
    tech: ["React", "Vercel", "React-Router", "MongoDB", "Express", "Node", "Groq", "Render"],
    github: "https://github.com/erycpc/BudgetBuddy",
    live: "https://budget-buddy-seven-jet.vercel.app/"
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <p className="section-tag">03 // projects</p>
      <h2 className="section-title">Selected work.</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-card-header">
              <span className="project-tag">{project.tag}</span>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`${project.title} on GitHub`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`${project.title} live demo`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;