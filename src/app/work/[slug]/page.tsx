import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";

import { Arrow } from "@/components/ui/Arrow";
import { KnowledgeDemo } from "@/components/demo/KnowledgeDemo";
import { WorkflowFigure } from "@/components/figures/WorkflowFigure";
import { AnalysisFigure } from "@/components/figures/AnalysisFigure";
import { FeatureExample } from "@/components/figures/FeatureExample";
import { MessagingComparison } from "@/components/figures/MessagingComparison";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const title = project.title.replace(/\.$/, "");
  const url = "/work/" + project.slug;
  const image = "/images/share/" + project.slug + ".png";
  return {
    title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      title: title + " | Jack Chindlund",
      description: project.summary,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
      images: [image],
    },
  };
}
export default async function WorkPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const detailed = project.slug !== "dealer-enablement";
  return (
    <main id="main" tabIndex={-1} className="case-page">
      <div className="container">
        <Link href="/#work" className="back-link">
          <span aria-hidden="true">←</span> Selected work
        </Link>
        <header className="case-header">
          <p className="eyebrow">Trimble / {project.category}</p>
          <h1>{project.title}</h1>
          <p className="case-lead">{project.summary}</p>
          <dl className="case-facts">
            <div>
              <dt>My contribution</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
            <div>
              <dt>Scope & context</dt>
              <dd>{project.scope}</dd>
            </div>
          </dl>
        </header>
        {detailed && (
          <div className="case-hero-art">
            {project.slug === "product-knowledge" ? (
              <WorkflowFigure compact />
            ) : (
              <AnalysisFigure />
            )}
          </div>
        )}
        <div className={"case-body-grid" + (!detailed ? " simple" : "")}>
          {detailed && (
            <aside className="case-index">
              <nav aria-label="On this page">
                <p className="eyebrow">On this page</p>
                <ol>
                  {project.sections.map((section, index) => (
                    <li key={section.id}>
                      <a href={"#" + section.id}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {section.title.replace(/\.$/, "")}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          )}
          <article className="case-story" aria-label="Project story">
            {project.sections.map((section) => (
              <section
                id={section.id}
                className="story-section"
                key={section.id}
              >
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {project.slug === "product-knowledge" &&
                  section.id === "example" && <KnowledgeDemo />}
                {project.slug === "sales-call-analysis" &&
                  section.id === "recommendation" && <MessagingComparison />}
                {project.slug === "dealer-enablement" &&
                  section.id === "structure" && <FeatureExample />}
              </section>
            ))}
            <p className="content-updated">
              Content updated October 2026. Internal materials are not shown.
            </p>
          </article>
        </div>
        <section className="related-work" aria-labelledby="related-heading">
          <p className="eyebrow">Keep exploring</p>
          <h2 id="related-heading">Another side of the work.</h2>
          <div>
            {projects
              .filter((other) => other.slug !== project.slug)
              .map((other) => (
                <Link href={"/work/" + other.slug} key={other.slug}>
                  <span className="eyebrow">
                    {other.number} / {other.category}
                  </span>
                  <h3>{other.title}</h3>
                  <span className="text-link">
                    Read the story <Arrow />
                  </span>
                </Link>
              ))}
          </div>
          <p>
            Interested in working together?{" "}
            <Link className="inline-link" href="/#contact">
              Let’s talk.
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
