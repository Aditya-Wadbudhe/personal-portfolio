import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Aditya",
    };
  }

  return {
    title: `${project.name} | Aditya`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <div className="container py-8">
        <Link
          href="/#projects"
          className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          ← Back to projects
        </Link>
      </div>

      <section className="border-y border-[var(--border-subtle)]">
        <div className="container grid gap-12 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <p className="section-label">Featured Project</p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {project.name}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {project.longDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary"
                >
                  Live Demo
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <aside>
            <p className="section-label">Technology</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-md border border-[var(--border)] px-3 py-2 text-xs text-[var(--muted)]"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </aside>

          <div>
            <div>
              <p className="section-label">Overview</p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                What I built
              </h2>

              <p className="mt-4 leading-8 text-[var(--muted)]">
                {project.description}
              </p>
            </div>

            <div className="mt-14">
              <p className="section-label">Features</p>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="surface p-5 text-sm leading-6 text-[var(--muted)]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14">
              <p className="section-label">Architecture</p>

              <div className="mt-5 space-y-3">
                {project.architecture.map((item) => (
                  <div
                    key={item}
                    className="surface p-5 text-sm leading-7 text-[var(--muted)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <p className="section-label">Technical Decisions</p>

              <ul className="mt-5 space-y-4">
                {project.technicalDecisions.map((decision) => (
                  <li
                    key={decision}
                    className="border-l border-[var(--border)] pl-5 text-sm leading-7 text-[var(--muted)]"
                  >
                    {decision}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14">
              <p className="section-label">Challenges & Solutions</p>

              <div className="mt-5 space-y-6">
                {project.challenges.map((item) => (
                  <article
                    key={item.challenge}
                    className="surface p-6"
                  >
                    <h3 className="font-medium">
                      {item.challenge}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {item.solution}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border-subtle)]">
        <div className="container flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="section-label">Project Links</p>

            <h2 className="mt-2 text-2xl font-semibold">
              Explore the project
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                Open Live Site
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                View Source
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}