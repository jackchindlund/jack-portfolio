import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { projects } from "@/content/site";
import { ProjectCard } from "./ProjectCard";

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-28 border-b border-border/80 py-20 sm:py-24 md:py-28"
    >
      <Container>
        <FadeIn>
          <SectionEyebrow>Selected work</SectionEyebrow>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <h2
              id="work-heading"
              className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Strategic Work Focused on Insight &amp; Growth
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
              These projects highlight how I approach consumer insight, positioning, and
              go-to-market strategy.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8 lg:gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
