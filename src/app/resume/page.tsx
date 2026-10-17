import type { Metadata } from "next";
import Link from "next/link";
import experience from "@/content/experience.json";
import { person, site } from "@/content/site";
import { Arrow } from "@/components/ui/Arrow";
export const metadata: Metadata = {
  title: "Resume",
  description:
    "Jack Chindlund's experience in product marketing, sales enablement, AI workflows, and customer-facing leadership.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume | Jack Chindlund",
    url: "/resume",
    images: [
      {
        url: "/images/share/resume.png",
        width: 1200,
        height: 630,
        alt: "Jack Chindlund — Resume",
      },
    ],
  },
  twitter: {
    title: "Resume | Jack Chindlund",
    images: ["/images/share/resume.png"],
  },
};
export default function ResumePage() {
  const profile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateModified: site.updated,
    mainEntity: {
      "@type": "Person",
      name: person.name,
      url: site.origin + "/resume",
      sameAs: [person.linkedin],
      jobTitle: person.role,
      worksFor: { "@type": "Organization", name: "Trimble" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: experience.education.school,
      },
    },
  };
  return (
    <main id="main" tabIndex={-1} className="resume-page container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profile).replace(/</g, "\\u003c"),
        }}
      />
      <Link className="back-link" href="/#about">
        <span aria-hidden="true">←</span> Back to background
      </Link>
      <header className="resume-header">
        <div>
          <p className="eyebrow">Experience & education</p>
          <h1>Jack Chindlund</h1>
          <p>Product marketing · Sales enablement · AI workflows</p>
          <div className="resume-contact">
            <span>{person.location}</span>
            <a href={"mailto:" + person.email}>{person.email}</a>
            <a href={person.linkedin}>
              LinkedIn <Arrow diagonal />
            </a>
          </div>
        </div>
        <a className="button primary pdf-link" href={site.pdf} download>
          Download PDF <span aria-hidden="true">↓</span>
        </a>
      </header>
      <p className="resume-summary">{experience.summary}</p>
      <div className="resume-section">
        <h2>Experience</h2>
        <div>
          {experience.roles.map((role) => (
            <section className="resume-role" key={role.title}>
              <div className="resume-role-heading">
                <h3>
                  {role.company}
                  <span>{role.title}</span>
                </h3>
                <p>
                  {role.dates}
                  <br />
                  {role.location}
                </p>
              </div>
              <ul>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <div className="resume-section">
        <h2>Leadership</h2>
        <section className="resume-role">
          <div className="resume-role-heading">
            <h3>
              {experience.leadership.organization}
              <span>{experience.leadership.title}</span>
            </h3>
            <p>{experience.leadership.dates}</p>
          </div>
          <p>{experience.leadership.description}</p>
        </section>
      </div>
      <div className="resume-section">
        <h2>Education</h2>
        <section className="resume-role">
          <div className="resume-role-heading">
            <h3>
              {experience.education.school}
              <span>{experience.education.college}</span>
            </h3>
            <p>{experience.education.date}</p>
          </div>
          <p>
            {experience.education.degree}
            <br />
            {experience.education.emphasis}
            <br />
            {experience.education.certificate}
          </p>
        </section>
      </div>
      <div className="resume-section">
        <h2>Skills & tools</h2>
        <ul className="skills-list">
          {experience.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="resume-end">
        <span>Updated October 2026</span>
        <a className="story-link pdf-link" href={site.pdf} download>
          Download a PDF copy <Arrow />
        </a>
      </div>
    </main>
  );
}
