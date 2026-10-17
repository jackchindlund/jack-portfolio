import Link from "next/link";
import { person } from "@/content/site";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link className="footer-name" href="/#home">
            {person.name}
          </Link>
          <p>Product, people, and practical tools.</p>
        </div>
        <nav aria-label="Footer">
          <a href={"mailto:" + person.email}>Email</a>
          <a href={person.linkedin}>LinkedIn</a>
          <Link href="/resume">Resume</Link>
        </nav>
        <span className="copyright">
          © {new Date().getFullYear()} Jack Chindlund
        </span>
      </div>
    </footer>
  );
}
