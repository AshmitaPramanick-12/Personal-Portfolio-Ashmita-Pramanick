import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid"></div>

      <div className="hero-content">
        <p className="hero-tag">
          SOFTWARE DEVELOPER • AI ENTHUSIAST
        </p>

        <h1>
          Ashmita
          <span>Pramanick</span>
        </h1>

        <p className="hero-description">
          I build web applications, AI-powered tools, and software
          solutions with a focus on clean interfaces and practical
          technology.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Work
            <ArrowDown size={18} />
          </a>

          <a
            href="https://drive.google.com/file/d/1lXMRAXFus7uzzVFmtprKDG_DoCi64hM5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            View Resume
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/AshmitaPramanick-12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/ashmita-pramanick-029994251"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:ashmitapramanick854@gmail.com"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
};

export default Hero;