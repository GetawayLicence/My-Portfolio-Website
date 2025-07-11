import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

const certifications = [
  {
    title: "Google Cybersecurity Certificate",
    subtitle: "Professional Certificate",
    date: "September 2023",
    skills: [
      "Security Information & Event Management (SIEM) Tools",
      "Intrusion Detection Systems (IDS)",
      "Identify common cybersecurity threats, risks, vulnerabilities",
      "Languages: Python, Linux, SQL",
    ],
    link: "https://coursera.org/share/ec2547671c7d5d8bac387536584e8077",
  },
  {
    title: "Google Data Analytics Certificate",
    subtitle: "Professional Certificate",
    date: "April 2024",
    skills: [ 
      "Data Visualization and Analysis Techniques",
      "Machine Learning, Predictive Modeling, Statistics",
      "Language: SQL, Python",
    ],
    link: "https://coursera.org/share/edceeff50e141ee8a43fabe60928f287",
  },
  {
    title: "FS-ISAC Women in Cyber Scholarship",
    subtitle: "Scholarship Award",
    date: "May 2024",
    skills: [
      "Dedicated to protecting financial sector with diverse workforce.",
      "Bursary award towards studies",
      "Mentorship to learn about the cybersecurity industry.",
      "Attended summit event surrounding cybersecurity in financial sector."
    ],
    link: "https://www.credly.com/badges/c73785dc-2e4b-44bc-bd6a-a0b467662ab4/public_url",
  },
];

const MAX_VISIBILITY = 2;

const Card = ({ title, subtitle, date, skills, link }) => (
  <div className="card">
    <h2>{title}</h2>
    <p className="subtitle">{subtitle}</p>
    <p className="date">{date}</p>
    <ul className="skills">
      {skills.map((skill, idx) => (
        <li key={idx}>• {skill}</li>
      ))}
    </ul>
    <a href={link} target="_blank" rel="noopener noreferrer" className="view-button">
      View Credential
    </a>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}

      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}

      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

export const CertificationSection = () => (
  <section id="certifications" className="certification-section">
    <h2 className="certification-title">
      <span className="text-primary">My</span> Certifications
    </h2>
    <Carousel>
      {certifications.map((cert, i) => (
        <Card
          key={i}
          title={cert.title}
          subtitle={cert.subtitle}
          date={cert.date}
          skills={cert.skills}
          link={cert.link}
        />
      ))}
    </Carousel>
  </section>
);
