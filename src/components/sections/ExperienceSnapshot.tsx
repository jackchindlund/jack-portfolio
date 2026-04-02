import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { experienceRoles, tools } from "@/content/site";

export function ExperienceSnapshot() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-28 border-b border-border/80 py-20 sm:py-24 md:py-28"
    >
      <Container>
        <FadeIn>
          <SectionEyebrow>Background</SectionEyebrow>
          <h2
            id="experience-heading"
            className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Experience snapshot
          </h2>
          <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-12">
            {experienceRoles.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl border border-border bg-card px-7 py-8 sm:px-8 sm:py-9"
              >
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {role.title}
                </h3>
                <ul className="mt-5 space-y-3 text-[0.9375rem] leading-relaxed text-foreground/85">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 lg:mt-14">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-accent">
              Tools &amp; fluencies
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-border-strong bg-background px-3 py-1.5 text-xs font-medium text-foreground/90"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
