const experiences = [
  {
    role: "Web Development Intern",
    company: "Apex Planet Software Pvt. Ltd.",
    period: "Aug 2025 – Sep 2025",
    description:
      "Contributed to frontend development using HTML, CSS, and JavaScript. Implemented layouts, styled pages, and added interactive elements for better user experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    role: "Web Development Intern",
    company: "InternPro",
    period: "Jul 2025 – Sep 2025",
    description:
      "Collaborated in a 3-person team to develop a Resume Builder using HTML, CSS, and JavaScript, contributing to frontend development and implementing DOM manipulation.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM Manipulation",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-number">03 / EXPERIENCE</p>

          <h2>
            Where I've
            <span> worked & learned.</span>
          </h2>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article
              className="experience-card"
              key={experience.company}
            >
              <div className="experience-number">
                0{index + 1}
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3>{experience.role}</h3>

                    <p className="experience-company">
                      {experience.company}
                    </p>
                  </div>

                  <span className="experience-period">
                    {experience.period}
                  </span>
                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-tech">
                  {experience.technologies.map((technology) => (
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

export default Experience;