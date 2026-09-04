import {
  Code2,
  Database,
  GitBranch,
  Globe,
  Mail,
  Server,
} from "lucide-react";

const techStack = {
  Frontend: [
    {
      name: "Next.js",
      description: "React framework for production web applications",
      icon: Globe,
    },
    {
      name: "React",
      description: "Component-based user interfaces",
      icon: Code2,
    },
    {
      name: "TypeScript",
      description: "Type-safe application development",
      icon: Code2,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      description: "Server-side JavaScript runtime",
      icon: Server,
    },
    {
      name: "Nodemailer",
      description: "Transactional email integration",
      icon: Mail,
    },
    {
      name: "SMTP",
      description: "Email delivery infrastructure",
      icon: Mail,
    },
  ],
  "Deployment & Tools": [
    {
      name: "Vercel",
      description: "Application deployment and hosting",
      icon: Globe,
    },
    {
      name: "GitHub",
      description: "Source control and project hosting",
      icon: GitBranch,
    },
  ],
} as const;

export function TechStack() {
  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className="section"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Tech Stack</p>

          <h2 id="tech-stack-heading" className="section-title">
            Technologies I use to build software.
          </h2>

          <p className="section-description">
            A focused stack for building modern web applications, backend
            functionality, and production deployments.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(techStack).map(([category, technologies]) => (
            <div
              key={category}
              className="surface surface-hover p-6"
            >
              <h3 className="flex items-center gap-2 text-sm font-semibold">
                <span className="icon-box">
                  <Code2 size={16} aria-hidden="true" />
                </span>

                {category}
              </h3>

              <ul className="mt-5 space-y-3">
                {technologies.map((technology) => {
                  const Icon = technology.icon;

                  return (
                    <li
                      key={technology.name}
                      className="rounded-lg border border-transparent p-3 transition-colors hover:border-[var(--border)] hover:bg-[var(--surface-elevated)]"
                    >
                      <div className="flex gap-3">
                        <span className="icon-box">
                          <Icon size={16} aria-hidden="true" />
                        </span>

                        <div>
                          <p className="text-sm font-medium">
                            {technology.name}
                          </p>

                          <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                            {technology.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}