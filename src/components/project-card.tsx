import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
} from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface surface-hover overflow-hidden">
      <div className="relative aspect-video overflow-hidden border-b border-[var(--border)] bg-[var(--surface-elevated)]">
        <Image
          src={project.image}
          alt={`${project.name} project screenshot`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold tracking-tight">
          {project.name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          {project.description}
        </p>

        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label={`${project.name} technologies`}
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-md border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]"
            >
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
                <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary icon-link"
                >
                <ExternalLink size={16} aria-hidden="true" />
                Live Demo
                </a>
            )}

            {project.githubUrl && (
                <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary icon-link"
                >
                <Code2 size={17} aria-hidden="true" />
                GitHub
                </a>
            )}

            <Link
                href={`/projects/${project.slug}`}
                className="button button-secondary icon-link"
            >
                Details
                <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
        </div>
      </div>
    </article>
  );
}