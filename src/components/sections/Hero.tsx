import Image from "next/image";
import { person, resumeUrl } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { ButtonExternal, ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="scroll-mt-28 border-b border-border/80 pb-20 pt-14 sm:pb-24 sm:pt-16 md:pb-28 md:pt-20"
    >
      <Container>
        <FadeIn className="grid items-start gap-12 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0 xl:gap-x-14">
          <div className="lg:col-span-7 lg:pt-4 xl:col-span-6 xl:pt-8">
            <h1
              id="hero-heading"
              className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.05] lg:text-[3.25rem] xl:text-[3.5rem]"
            >
              {person.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
              {person.headline}
            </p>
            <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-foreground/85 sm:text-[1.0625rem] sm:leading-relaxed">
              {person.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3 sm:mt-12">
              {
                /* TODO: When your resume is hosted, update resumeUrl in src/content/site.ts */
              }
              <ButtonExternal href={resumeUrl}>View resume</ButtonExternal>
              <ButtonLink href="#contact" variant="secondary">
                Contact me
              </ButtonLink>
            </div>
          </div>

          <div className="relative lg:col-span-5 xl:col-span-6">
            {/*
             * Headshot: replace /public/images/headshot-placeholder.svg with your image
             * (e.g. headshot.jpg) and update person.headshotSrc + person.headshotAlt in site.ts
             */}
            <div className="relative mx-auto w-full max-w-[min(100%,28rem)] lg:ml-auto lg:mr-0 lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-accent/[0.12] via-transparent to-foreground/[0.04] blur-2xl sm:-inset-4"
              />
              <figure className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[#f0f0ee] shadow-[0_20px_50px_-28px_rgba(20,20,26,0.35)] ring-1 ring-black/[0.06]">
                <div className="aspect-[4/5] w-full sm:aspect-[5/6]">
                  <Image
                    src={person.headshotSrc}
                    alt={person.headshotAlt}
                    width={560}
                    height={700}
                    priority
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <figcaption className="sr-only">Portrait for portfolio hero</figcaption>
              </figure>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
