import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-content">
          <div className="section-heading">
            <p className="section-number">06 / CONTACT</p>

            <h2>
              Let's build something
              <span> useful.</span>
            </h2>
          </div>

          <p className="contact-text">
            I'm currently open to opportunities in software development,
            frontend, full-stack development, and AI-powered applications.
          </p>

          <a
            href="mailto:ashmitapramanick854@gmail.com"
            className="contact-email"
          >
            <Mail size={20} />
            ashmitapramanick854@gmail.com
            <ArrowUpRight size={18} />
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com/AshmitaPramanick-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ashmita-pramanick-029994251"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;