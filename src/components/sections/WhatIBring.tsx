import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { valueProps } from "@/content/site";

export function WhatIBring() {
  return (
    <section
      aria-labelledby="value-heading"
      className="border-b border-border/80 py-20 sm:py-24 md:py-28"
    >
      <Container>
        <FadeIn>
          <SectionEyebrow>How I work</SectionEyebrow>
          <h2
            id="value-heading"
            className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            What I bring to a marketing team
          </h2>
          <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            I combine structured thinking with real customer understanding to build strategies
            that actually work.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:gap-8">
            {valueProps.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card px-7 py-8 transition-colors duration-300 hover:border-accent/20 sm:px-8 sm:py-9"
              >
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted sm:text-base sm:leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
