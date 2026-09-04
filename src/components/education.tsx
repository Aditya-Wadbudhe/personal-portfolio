import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="section border-t border-[var(--border-subtle)]"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Education</p>

          <h2 id="education-heading" className="section-title">
            Academic background.
          </h2>
        </div>

        <article className="surface surface-hover mt-10 p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
                <h3 className="flex items-center gap-3 text-xl font-semibold tracking-tight">
                    <span className="icon-box">
                        <GraduationCap size={18} aria-hidden="true" />
                    </span>

                B.Tech in Computer Technology
                </h3>

              <p className="mt-2 text-sm text-[var(--muted)]">
                Kavikulguru Institute of Technology, Ramtek
              </p>
            </div>

            <p className="text-sm text-[var(--muted)]">
              2021 — 2024
            </p>
          </div>
        </article>

        <article className="surface surface-hover mt-10 p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
                <h3 className="flex items-center gap-3 text-xl font-semibold tracking-tight">
                    <span className="icon-box">
                        <GraduationCap size={18} aria-hidden="true" />
                    </span>

                Diploma in Information Technology
                </h3>

              <p className="mt-2 text-sm text-[var(--muted)]">
                Government Polytechnic, Amravati
              </p>
            </div>

            <p className="text-sm text-[var(--muted)]">
              2018 — 2021
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}