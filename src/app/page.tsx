import { SiteHeader } from "@/components/layout/SiteHeader";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { ExperienceSnapshot } from "@/components/sections/ExperienceSnapshot";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { WhatIBring } from "@/components/sections/WhatIBring";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <WhatIBring />
        <ExperienceSnapshot />
        <About />
        <Contact />
      </main>
    </>
  );
}
