import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="container not-found">
      <p className="eyebrow">404 / Page not found</p>
      <h1>A loose thread.</h1>
      <p>
        That page isn’t here. Pick up with the work, or find what you need
        below.
      </p>
      <div className="hero-actions">
        <Link className="button primary" href="/#work">
          Explore my work <Arrow />
        </Link>
        <Link className="button secondary" href="/resume">
          View resume
        </Link>
        <Link className="text-link" href="/#contact">
          Contact Jack <Arrow />
        </Link>
      </div>
    </main>
  );
}
