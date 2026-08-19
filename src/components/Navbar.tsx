const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          AP.
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>

          <a
            href="https://drive.google.com/file/d/1lXMRAXFus7uzzVFmtprKDG_DoCi64hM5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;