import {
  SiExpress,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";

const techStack = {
  Frontend: [
    {
      name: "Next.js",
      description: "React framework for production web applications",
      icon: SiNextdotjs,
      color: "#ffffff",
    },
    {
      name: "React",
      description: "Component-based user interfaces",
      icon: SiReact,
      color: "#61DAFB",
    },
    {
      name: "TypeScript",
      description: "Type-safe application development",
      icon: SiTypescript,
      color: "#3178C6",
    },
  ],

  Backend: [
    {
      name: "Node.js",
      description: "Server-side JavaScript runtime",
      icon: SiNodedotjs,
      color: "#68A063",
    },
    {
      name: "Express.js",
      description: "Backend framework for Node.js applications",
      icon: SiExpress,
      color: "#ffffff",
    },
    {
      name: "Nodemailer",
      description: "Transactional email integration",
      icon: MdEmail,
      color: "#EA4335",
    },
    {
      name: "SMTP",
      description: "Email delivery infrastructure",
      icon: MdEmail,
      color: "#60A5FA",
    },
  ],

  "Deployment & Tools": [
    {
      name: "Vercel",
      description: "Application deployment and hosting",
      icon: SiVercel,
      color: "#ffffff",
    },
    {
      name: "GitHub",
      description: "Source control and project hosting",
      icon: SiGithub,
      color: "#ffffff",
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
          {Object.entries(techStack).map(
            ([category, technologies]) => (
              <div
                key={category}
                className="surface surface-hover p-6"
              >
                <h3 className="text-sm font-semibold">
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
                        <div className="flex items-start gap-4">
                          <span
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)]"
                            aria-hidden="true"
                          >
                            <Icon
                              size={26}
                              color={technology.color}
                            />
                          </span>

                          <div className="min-w-0">
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
            ),
          )}
        </div>
      </div>
    </section>
  );
}