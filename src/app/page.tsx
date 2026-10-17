import Image from "next/image";
import Link from "next/link";
import { person } from "@/content/site";
import { projects } from "@/content/projects";
import experience from "@/content/experience.json";
import { Arrow } from "@/components/ui/Arrow";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { WorkflowFigure } from "@/components/figures/WorkflowFigure";
import { AnalysisFigure } from "@/components/figures/AnalysisFigure";
import { OutputPreview } from "@/components/figures/OutputPreview";

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <section
        id="home"
        className="hero container"
        aria-labelledby="hero-heading"
      >
        <div className="hero-text">
          <p className="eyebrow hero-discipline">
            Product marketing · Sales enablement · AI workflows
          </p>
          <h1 id="hero-heading">
            I turn product knowledge into <em>useful tools.</em>
          </h1>
          <p className="hero-intro">
            I’m Jack Chindlund. At Trimble, I build AI workflows and create
            resources for dealers and sellers. My background in customer-facing
            sales shapes how I approach both.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="#work">
              Explore my work <Arrow />
            </Link>
            <Link className="button secondary" href="/resume">
              View resume <Arrow diagonal />
            </Link>
          </div>
          <p className="current-role">
            <span className="status-dot" aria-hidden="true" />
            <span>
              {person.role}
              <br />
              <strong>Trimble</strong>
            </span>
          </p>
        </div>
        <div className="hero-visual">
          <WorkflowFigure />
          <span className="margin-note">
            A thread through my work:
            <br />
            make information usable.
          </span>
        </div>
      </section>
      <div className="container hero-footnote">
        <span>Based in Colorado</span>
        <span>
          Clearer stories. Useful systems. <span aria-hidden="true">↓</span>
        </span>
      </div>
      <section
        id="work"
        className="section container work-section"
        aria-labelledby="work-heading"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2 id="work-heading">
              The work, and
              <br />
              the thinking behind it.
            </h2>
          </div>
          <p>
            Systems and resources I’ve built around product, sales, and customer
            information.
          </p>
        </div>
        {projects.slice(0, 2).map((project, index) => (
          <article
            className={"project-feature project-" + project.slug}
            key={project.slug}
          >
            <div className="project-copy">
              <p className="project-label">
                <span>{project.number}</span> Trimble{" "}
                <span className="project-label-rule" aria-hidden="true" />
              </p>
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <dl className="project-details">
                <div>
                  <dt>My contribution</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>Completed work</dt>
                  <dd>{project.status}</dd>
                </div>
              </dl>
              <Link className="story-link" href={"/work/" + project.slug}>
                Read the {index === 0 ? "knowledge-system" : "sales-analysis"}{" "}
                story <Arrow />
              </Link>
            </div>
            <div className="project-visual">
              {index === 0 ? <OutputPreview /> : <AnalysisFigure />}
            </div>
          </article>
        ))}
        <article className="project-short">
          <span className="project-short-number">03</span>
          <div>
            <p className="eyebrow">Trimble · Product marketing</p>
            <h3>{projects[2].title}</h3>
            <p>{projects[2].summary}</p>
            <span className="caption">
              Content framework & authorship · Live internal resource
            </span>
          </div>
          <Link className="story-link" href="/work/dealer-enablement">
            Read the catalog story <Arrow />
          </Link>
        </article>
      </section>
      <section
        className="about-section section"
        id="about"
        aria-labelledby="about-heading"
      >
        <div className="container">
          <p className="eyebrow">02 / A little background</p>
          <div className="about-grid">
            <div className="about-portrait">
              <Image
                src="/images/Jack_Chindlund_Headshot.jpg"
                alt="Jack Chindlund"
                width={766}
                height={805}
                sizes="(min-width: 1024px) 360px, (min-width: 768px) 35vw, 90vw"
              />
              <span>Jack Chindlund · Colorado</span>
            </div>
            <div className="about-copy">
              <h2 id="about-heading">
                My starting point is the person using it.
              </h2>
              <p>
                My background is in customer-facing sales, team leadership, and
                product marketing. At Best Buy, I coached associates to
                understand what customers wanted and connect product
                capabilities to those needs. At Trimble, I bring that
                perspective to product resources and AI workflows.
              </p>
              <p>
                I enjoy using AI to improve workflows. I also check its outputs
                against source material and test how it responds when supporting
                evidence is missing.
              </p>
              <Link className="story-link" href="/resume">
                More about my experience <Arrow />
              </Link>
            </div>
          </div>
          <div className="experience-grid" id="experience">
            <div>
              <span className="eyebrow">Where that perspective comes from</span>
              <h3>
                Product.
                <br />
                Customers.
                <br />
                People.
              </h3>
            </div>
            <div className="experience-list">
              <article>
                <span className="caption">May 2026–present</span>
                <h4>
                  Trimble <span>Product Marketing Intern, Platforms & AI</span>
                </h4>
                <p>
                  Dealer and seller resources, alongside AI workflows built
                  around product, customer, and sales information.
                </p>
              </article>
              <article>
                <span className="caption">October 2020–May 2026</span>
                <h4>
                  Best Buy <span>Sales Advisor → Shift Lead</span>
                </h4>
                <p>
                  Supervised 15+ associates and trained 25+. Discovery-focused
                  coaching helped double department audio attach and raise TV
                  main-unit average selling price from $600 to $750 in one
                  quarter.
                </p>
              </article>
              <article>
                <span className="caption">{experience.education.date}</span>
                <h4>
                  CU Boulder <span>Leeds School of Business</span>
                </h4>
                <p>
                  BS in Business Administration, Marketing and
                  Strategy/Entrepreneurship dual emphasis. Certificate in
                  Leadership.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="section contact-section container"
        aria-labelledby="contact-heading"
      >
        <p className="eyebrow">03 / Start a conversation</p>
        <div className="contact-grid">
          <h2 id="contact-heading">
            Let’s talk about
            <br />
            <em>useful work.</em>
          </h2>
          <div>
            <p>
              I’m interested in roles that combine product marketing, sales
              enablement, and practical AI implementation. If that sounds
              relevant to your team, I’d like to hear from you.
            </p>
            <p className="caption">
              Relevant project inquiries are welcome too.
            </p>
            <a className="contact-email" href={"mailto:" + person.email}>
              {person.email}
              <Arrow diagonal />
            </a>
            <div className="contact-links">
              <CopyEmail />
              <a className="text-link" href={person.linkedin}>
                Find me on LinkedIn <Arrow diagonal />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
