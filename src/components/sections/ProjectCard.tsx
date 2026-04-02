import type { Project } from "@/content/site";
import { cn } from "@/lib/utils";

const fields = [
  { key: "challenge", label: "Challenge" },
  { key: "insight", label: "Insight" },
  { key: "strategy", label: "Strategy" },
  { key: "outcome", label: "Outcome" },
] as const;

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border bg-card p-7 sm:p-8 lg:p-9",
        "transition-[border-color,box-shadow,transform] duration-300 ease-out",
        "hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[0_28px_56px_-32px_rgba(45,52,95,0.35)]",
        className,
      )}
    >
      {/*
       * Optional: add a project thumbnail above the title
       * <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl bg-muted/20">
       *   <Image src="/images/project-natrol.jpg" alt="..." fill className="object-cover" />
       * </div>
       */}
      <div className="flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border-strong bg-background/80 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
        {project.title}
      </h3>
      <div className="mt-8 flex flex-col gap-8">
        {fields.map(({ key, label }) => (
          <div key={key}>
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-accent">
              {label}
            </p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-foreground/85 sm:text-base sm:leading-relaxed">
              {project[key]}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
