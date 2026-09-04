import { Code2 } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section border-t border-[var(--border-subtle)]"
    >
      <div className="container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="section-label">About Me</p>

          <h2 id="about-heading" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Software developer focused on building practical, reliable software.
          </h2>
        </div>

        <div className="max-w-3xl">
          <p className="text-base leading-8 text-[var(--muted)]">
            I&apos;m a software developer with six months of experience as a
            Software Trainee. I work with React, Node.js, TypeScript,
            Express, and JavaScript to build full-stack web applications and
            backend systems.
          </p>

          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            I focus on clean, maintainable, and scalable software, with an
            interest in building applications that are practical, reliable,
            and easy to evolve.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "React",
              "Node.js",
              "TypeScript",
              "Express",
              "JavaScript",
            ].map((technology) => (
            <span
                key={technology}
                className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs text-[var(--muted)] transition-colors hover:border-[var(--border)] hover:bg-[var(--surface-elevated)]"
                >
                <Code2 size={13} aria-hidden="true" />
                {technology}
            </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}