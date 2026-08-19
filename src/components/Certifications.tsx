import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Cloud Computing",
    subtitle:
      "Cloud fundamentals, service models, and deployment concepts.",
    issuer: "Infosys Springboard",
    date: "Jul 2025",
    link: "#",
  },
  {
    title: "Career Edge – Young Professional",
    subtitle:
      "Career readiness training focused on communication, business etiquette, and professional skills.",
    issuer: "TCS iON",
    date: "Jul 2025",
    link:
      "https://www.linkedin.com/posts/ashmita-pramanick-029994251_tcsion-youngprofessional-careeredge-activity-7351870045616062464-GPqZ",
  },
  {
    title: "Oracle Certified Foundations Associate",
    subtitle: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    date: "Aug 2026",
    link:
      "https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC7165842&trackId=AAI26OFA&key=2730df214b02816109622429425bfef7d8450e25",
  },
  {
    title: "Oracle Generative AI",
    subtitle:
      "Oracle Certified Generative AI achievement and cloud-focused AI learning.",
    issuer: "Oracle",
    date: "2026",
    link:
      "https://www.linkedin.com/posts/ashmita-pramanick-029994251_oraclecertified-generativeai-oraclecloud-activity-7374300393306128384-B--I?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD5CcCEBuD3jGeUAxSZg4Vm6W2oDbFbvQO0",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-number">
            05 / CERTIFICATIONS
          </p>

          <h2>
            Learning beyond
            <span> the classroom.</span>
          </h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((certification) => (
            <article
              className="certification-card"
              key={certification.title}
            >
              <div className="certification-icon">
                <Award size={22} />
              </div>

              <div className="certification-content">
                <p className="certification-issuer">
                  {certification.issuer}
                </p>

                <h3>{certification.title}</h3>

                <p className="certification-subtitle">
                  {certification.subtitle}
                </p>

                <div className="certification-footer">
                  <span>{certification.date}</span>

                  {certification.link !== "#" && (
                    <a
                      href={certification.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${certification.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;