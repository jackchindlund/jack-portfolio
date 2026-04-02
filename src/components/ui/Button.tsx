import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-sm hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
  secondary:
    "border border-border-strong bg-white/80 text-foreground shadow-sm hover:border-accent/35 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
};

function buttonClasses(variant: Variant, className?: string) {
  return cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-200",
    variants[variant],
    className,
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return (
    <Link href={href} className={buttonClasses(variant, className)} {...props}>
      {children}
    </Link>
  );
}

export function ButtonExternal({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: Omit<ComponentProps<"a">, "href"> & {
  href: string;
  variant?: Variant;
}) {
  return (
    <a
      href={href}
      className={buttonClasses(variant, className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
