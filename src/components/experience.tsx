import { BriefcaseBusiness } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section border-t border-[var(--border-subtle)]"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Experience</p>

          <h2 id="experience-heading" className="section-title">
            Professional experience.
          </h2>

          <p className="section-description">
            Hands-on experience building customer-facing software in a
            production development environment.
          </p>
        </div>

        <article className="surface surface-hover mt-10 p-6 sm:p-8">
          {/* Experience Header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="flex items-center gap-3 text-xl font-semibold tracking-tight text-[var(--foreground)]">
                <span className="icon-box">
                  <BriefcaseBusiness
                    size={18}
                    className="text-[#60a5fa]"
                    aria-hidden="true"
                  />
                </span>

                Software Trainee
              </h3>

              <p className="mt-2 text-sm font-medium text-[var(--foreground)]">
                smartData Enterprises
              </p>
            </div>

            <p className="text-sm font-medium text-[#60a5fa]">
              Sep 2024 — Feb 2025
            </p>
          </div>

          {/* Experience Details */}
          <div className="mt-7 border-t border-[var(--border-subtle)] pt-7">
            <p className="text-sm leading-7 text-[var(--muted)]">
              Worked on a{" "}
              <span className="font-medium text-[var(--foreground)]">
                healthcare web application
              </span>{" "}
              using the{" "}
              <span className="font-medium text-[var(--foreground)]">
                MERN stack
              </span>
              , contributing to the customer-facing experience of a{" "}
              <span className="font-medium text-[var(--foreground)]">
                patient appointment portal
              </span>
              .
            </p>

            <ul className="mt-6 space-y-4">
              <li className="border-l border-[var(--border)] pl-5 text-sm leading-7 text-[var(--muted)]">
                Contributed to the{" "}
                <span className="font-medium text-[var(--foreground)]">
                  customer-facing part
                </span>{" "}
                of a patient appointment portal.
              </li>

              <li className="border-l border-[var(--border)] pl-5 text-sm leading-7 text-[var(--muted)]">
                Worked with the{" "}
                <span className="font-medium text-[var(--foreground)]">
                  MERN stack
                </span>{" "}
                in a healthcare application environment.
              </li>

              <li className="border-l border-[var(--border)] pl-5 text-sm leading-7 text-[var(--muted)]">
                Developed and maintained{" "}
                <span className="font-medium text-[var(--foreground)]">
                  web application functionality
                </span>{" "}
                as part of the software development team.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}