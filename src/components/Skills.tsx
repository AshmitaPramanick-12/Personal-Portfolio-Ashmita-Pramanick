import {
  Code2,
  Globe,
  Database,
  Brain,
  Wrench,
  Cpu,
} from "lucide-react";

const skills = [
  {
    icon: <Code2 size={22} />,
    title: "PROGRAMMING",
    items: ["Java", "Python"],
  },
  {
    icon: <Globe size={22} />,
    title: "WEB DEVELOPMENT",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
    ],
  },
  {
    icon: <Database size={22} />,
    title: "DATABASE",
    items: ["MySQL", "MongoDB"],
  },
  {
    icon: <Brain size={22} />,
    title: "BACKEND & AI",
    items: [
      "Flask",
      "SQLAlchemy",
      "REST APIs",
      "Generative AI",
      "LangChain",
      "OpenAI API",
      "Google Gemini API",
      "Groq API",
    ],
  },
  {
    icon: <Wrench size={22} />,
    title: "TOOLS",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Google Colab",
      "Postman",
      "Vercel",
      "Render",
    ],
  },
  {
    icon: <Cpu size={22} />,
    title: "CORE CONCEPTS",
    items: [
      "OOP",
      "Data Structures",
      "DBMS",
      "Computer Networks",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-number">02 / SKILLS</p>

          <h2>
            Tools I use to
            <span> build things.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.title}>

              <div className="skill-card-top">
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <span>{skill.title}</span>
              </div>

              <div className="skill-items">
                {skill.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;