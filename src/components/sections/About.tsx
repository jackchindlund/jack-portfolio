import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { aboutParagraphs } from "@/content/site";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-28 border-b border-border/80 py-20 sm:py-24 md:py-28"
    >
      <Container>
        <FadeIn>
          <SectionEyebrow>About</SectionEyebrow>
          <h2
            id="about-heading"
            className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Why marketing, why now
          </h2>
          <div className="mt-10 max-w-2xl space-y-6 text-[0.9375rem] leading-[1.75] text-foreground/88 sm:text-lg sm:leading-[1.75]">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
