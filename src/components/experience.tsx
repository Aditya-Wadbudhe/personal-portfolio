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
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
                <h3 className="flex items-center gap-3 text-xl font-semibold tracking-tight">
                    <span className="icon-box">
                        <BriefcaseBusiness size={18} aria-hidden="true" />
                    </span>

                Software Trainee
                </h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                smartData Enterprises
              </p>
            </div>

            <p className="text-sm text-[var(--muted)]">
              Sep 2024 — Feb 2025
            </p>
          </div>

          <div className="mt-7 border-t border-[var(--border-subtle)] pt-7">
            <p className="text-sm leading-7 text-[var(--muted)]">
              Worked on a healthcare web application using the MERN stack,
              contributing to the customer-facing experience of a patient
              appointment portal.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="border-l border-[var(--border)] pl-5 text-sm leading-7 text-[var(--muted)]">
                Contributed to the customer-facing part of a patient
                appointment portal.
              </li>

              <li className="border-l border-[var(--border)] pl-5 text-sm leading-7 text-[var(--muted)]">
                Worked with the MERN stack in a healthcare application
                environment.
              </li>

              <li className="border-l border-[var(--border)] pl-5 text-sm leading-7 text-[var(--muted)]">
                Developed and maintained web application functionality as
                part of the software development team.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}