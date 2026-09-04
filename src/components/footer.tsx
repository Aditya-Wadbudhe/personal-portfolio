import { Code2, FileText, Globe } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "[YOUR_GITHUB_URL]",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    href: "[YOUR_LINKEDIN_URL]",
    icon: Globe,
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)]">
      <div className="container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight"
          >
            Aditya
          </a>

          <p className="mt-2 text-sm text-[var(--muted)]">
            Software Developer
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-5">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                  >
                    <Icon size={16} aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              );
            })}

            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                <FileText size={16} aria-hidden="true" />
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container border-t border-[var(--border-subtle)] py-5">
        <p className="text-xs text-[var(--muted-foreground)]">
          © {new Date().getFullYear()} Aditya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}