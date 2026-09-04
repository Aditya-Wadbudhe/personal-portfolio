import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section border-t border-[var(--border-subtle)]"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Featured Projects</p>

          <h2 id="projects-heading" className="section-title">
            Things I&apos;ve built.
          </h2>

          <p className="section-description">
            Selected projects showcasing practical software development,
            engineering decisions, and technical implementation.
          </p>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="surface mt-10 p-8">
            <p className="text-sm text-[var(--muted)]">
              Projects will be added here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}