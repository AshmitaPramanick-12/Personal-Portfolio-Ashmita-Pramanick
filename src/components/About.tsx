import { GraduationCap, MapPin, Code2, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-number">01 / ABOUT</p>

          <h2>
            A developer who
            <span> builds & learns.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm Ashmita Pramanick, a B.Tech Information Technology graduate
              interested in software development, web technologies, and
              AI-powered applications.
            </p>

            <p>
              I enjoy turning ideas into practical applications, learning new
              technologies, and improving my development skills through
              hands-on projects.
            </p>

            <p>
              My current focus is on building full-stack applications using
              Java, Python, React, and modern AI APIs.
            </p>
          </div>

          <div className="profile-card">
            <div className="profile-card-header">
              <span>PROFILE.DATA</span>
              <span className="status-dot"></span>
            </div>

            <div className="profile-row">
              <div className="profile-icon">
                <GraduationCap size={20} />
              </div>

              <div>
                <small>EDUCATION</small>
                <p>B.Tech — Information Technology</p>
              </div>
            </div>

            <div className="profile-row">
              <div className="profile-icon">
                <MapPin size={20} />
              </div>

              <div>
                <small>LOCATION</small>
                <p>Kolkata, India</p>
              </div>
            </div>

            <div className="profile-row">
              <div className="profile-icon">
                <Code2 size={20} />
              </div>

              <div>
                <small>FOCUS</small>
                <p>Software & Full-Stack Development</p>
              </div>
            </div>

            <div className="profile-row">
              <div className="profile-icon">
                <Sparkles size={20} />
              </div>

              <div>
                <small>INTEREST</small>
<p>Software Development, AI & Full-Stack Web Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;