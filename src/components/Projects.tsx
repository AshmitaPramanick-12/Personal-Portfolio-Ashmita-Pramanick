const projects = [
  {
    number: "01",
    title: "AI Career Copilot",
    description:
      "An AI-powered resume analyzer built with Flask that accepts resume input through text, PDF, and DOCX files and provides career improvement suggestions.",
    technologies: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "Groq API",
      "MySQL",
    ],
    github:
      "https://github.com/AshmitaPramanick-12/AI_CAREER_COPILIT_fullstack_python",
    demo:
      "https://ai-career-copilit-fullstack-python.onrender.com",
  },
  {
    number: "02",
    title: "Notes Management App",
    description:
      "A responsive notes application built with React that supports adding and deleting notes through dynamic state management and React hooks.",
    technologies: [
      "React.js",
      "Tailwind CSS",
    ],
    github:
      "https://github.com/AshmitaPramanick-12/REACTJS/tree/main/13-Notes-App",
    demo:
      "https://6a000ced76e2d66b0c901277--fabulous-clafoutis-8b3b62.netlify.app/",
  },
  {
    number: "03",
    title: "Smart Expense Tracker",
    description:
      "A web application for recording and managing personal expenses with categorized transactions, monthly expense calculations, and persistent browser storage.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],
    github:
      "https://github.com/AshmitaPramanick-12/smart-expense-tracker",
    demo:
      "https://benevolent-kitten-ce979b.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-number">04 / PROJECTS</p>

          <h2>
            Things I've
            <span> built.</span>
          </h2>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live ↗
                    </a>
                  </div>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;