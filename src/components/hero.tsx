"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, FileText, Globe } from "lucide-react";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-[var(--border-subtle)]"
    >
      <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-lg font-medium text-[var(--muted)]">
            Hi, I&apos;m Aditya 👋
          </p>

          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl"
          >
            Software Developer
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            I build scalable web applications and backend systems using
            modern technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="button button-primary icon-link">
                View Projects
                <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <a
                href="https://github.com/Aditya-Wadbudhe"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary icon-link"
            >
                <Code2 size={17} aria-hidden="true" />
                GitHub
            </a>

            <a
                href="https://www.linkedin.com/in/adityawadbudhe/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary icon-link"
            >
                <Globe size={17} aria-hidden="true" />
                LinkedIn
            </a>

            <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary icon-link"
            >
                <FileText size={17} aria-hidden="true" />
                Resume
            </a>
            </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <Image
                src="/images/profile.jpg"
                alt="Aditya - Software Developer"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
            />
        </div>
      </div>
    </section>
  );
}