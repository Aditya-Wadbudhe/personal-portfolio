import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Aditya-Wadbudhe",
    icon: FaGithub,
    color: "#ffffff",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adityawadbudhe/",
    icon: FaLinkedinIn,
    color: "#0A66C2",
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)]">
      <div className="container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        {/* Identity */}
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

        {/* Social links */}
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
                    <Icon
                      size={17}
                      color={link.color}
                      aria-hidden="true"
                    />

                    {link.label}
                  </a>
                </li>
              );
            })}

            {/* Resume */}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                <MdPictureAsPdf
                  size={19}
                  color="#EF4444"
                  aria-hidden="true"
                />

                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Copyright */}
      <div className="container border-t border-[var(--border-subtle)] py-5">
        <p className="text-xs text-[var(--muted-foreground)]">
          © {new Date().getFullYear()} Aditya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}