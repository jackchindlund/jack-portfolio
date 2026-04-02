import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { contact } from "@/content/site";
import { ButtonExternal } from "@/components/ui/Button";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-28 pb-24 pt-20 sm:pb-28 sm:pt-24 md:pb-32"
    >
      <Container>
        <FadeIn>
          <SectionEyebrow>Contact</SectionEyebrow>
          <h2
            id="contact-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {contact.headline}
          </h2>
          <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            Open to full-time marketing roles with consumer brands and teams that care about
            insight-led strategy.
          </p>
          <div className="mt-10 flex flex-col gap-6 sm:mt-12">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-8">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-accent">
                Email
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="text-lg font-medium tracking-tight text-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/40"
              >
                {contact.email}
              </a>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <ButtonExternal href={contact.linkedin} variant="secondary">
                LinkedIn
              </ButtonExternal>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
