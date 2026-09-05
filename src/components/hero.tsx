import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-[var(--border-subtle)]"
    >
      <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-24">
        {/* Content */}
        <div className="max-w-3xl">
          <p className="mb-5 text-lg font-medium text-[var(--muted)]">
            Hi, I&apos;m Aditya 👋
          </p>

          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl"
          >
            Building Software That Solves Real Problems.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Software developer focused on creating full-stack web applications
            and backend systems. I enjoy turning ideas into reliable,
            maintainable software with a strong focus on clean code and
            practical engineering.
          </p>

          {/* Primary actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="button button-primary icon-link"
            >
              View Projects
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <a
              href="https://github.com/Aditya-Wadbudhe"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary icon-link"
              aria-label="Visit my GitHub profile"
            >
              <FaGithub
                size={18}
                aria-hidden="true"
                color="#ffffff"
              />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/adityawadbudhe/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary icon-link"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedinIn
                size={18}
                aria-hidden="true"
                color="#0A66C2"
              />
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary icon-link"
              aria-label="Open my resume"
            >
              <MdPictureAsPdf
                size={19}
                aria-hidden="true"
                color="#EF4444"
              />
              Resume
            </a>
          </div>
        </div>

        {/* Profile visual */}
        <div className="mx-auto w-full max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <img
              src="/images/profile.jpg"
              alt="Aditya - Software Developer"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}