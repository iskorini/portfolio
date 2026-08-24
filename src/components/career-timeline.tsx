import { certifications, workExperience } from "@/lib/content";
import { GlassCard } from "./glass-card";
import { Chip } from "./chip";
import { Reveal } from "./reveal";

export function CareerTimeline() {
  return (
    <div className="space-y-16">
      <section aria-labelledby="work-experience-heading">
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">
            Work experience
          </p>
          <h3
            id="work-experience-heading"
            className="mt-2 text-2xl font-semibold tracking-tight"
          >
            A career built across data and machine learning
          </h3>
        </div>
        <ol className="relative ml-2 space-y-10 border-l border-black/10 pl-8 sm:ml-4 dark:border-white/10">
          {workExperience.map((experience, index) => (
            <li key={`${experience.company}-${experience.period}`} className="relative">
              <span
                aria-hidden
                className="absolute top-9 -left-[38px] size-3 rounded-full bg-accent ring-4 ring-accent/20"
              />
              <Reveal delay={index * 60}>
                <GlassCard className="p-6 sm:p-7">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-xl font-semibold tracking-tight">
                        {experience.company}
                      </h4>
                      {experience.employmentType ? (
                        <p className="mt-1 text-sm text-muted">
                          {experience.employmentType}
                        </p>
                      ) : null}
                    </div>
                    <p className="font-mono text-xs tracking-wider text-muted uppercase">
                      {experience.period}
                    </p>
                  </div>
                  <ol className="mt-6 space-y-6 border-l border-black/10 pl-5 dark:border-white/10">
                    {experience.roles.map((role) => (
                      <li
                        key={`${role.title}-${role.period}`}
                        className="relative"
                      >
                        <span
                          aria-hidden
                          className="absolute top-2 -left-[1.65rem] size-2 rounded-full bg-accent"
                        />
                        <p className="font-mono text-xs tracking-wider text-muted uppercase">
                          {role.period}
                        </p>
                        <h5 className="mt-1 text-lg font-semibold tracking-tight">
                          {role.title}
                        </h5>
                        {role.location ? (
                          <p className="mt-1 text-sm text-muted">{role.location}</p>
                        ) : null}
                        {role.responsibilities ? (
                          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                            {role.responsibilities.map((responsibility) => (
                              <li key={responsibility}>{responsibility}</li>
                            ))}
                          </ul>
                        ) : null}
                        {role.tags ? (
                          <ul className="mt-4 flex flex-wrap gap-2">
                            {role.tags.map((tag) => (
                              <li key={tag}>
                                <Chip>{tag}</Chip>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ol>
                </GlassCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="certifications-heading">
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">
            Certifications
          </p>
          <h3
            id="certifications-heading"
            className="mt-2 text-2xl font-semibold tracking-tight"
          >
            Professional credentials
          </h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification, index) => (
            <Reveal key={certification.name} delay={index * 60} className="h-full">
              <GlassCard className="flex h-full flex-col gap-4 p-5">
                <div>
                  <h4 className="font-semibold tracking-tight">
                    {certification.name}
                  </h4>
                  <p className="mt-1 text-sm text-muted">{certification.issuer}</p>
                </div>
                <dl className="grid gap-2 text-sm text-muted">
                  <div className="flex justify-between gap-3">
                    <dt>Issued</dt>
                    <dd className="font-medium text-foreground">{certification.issued}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Expires</dt>
                    <dd className="font-medium text-foreground">{certification.expires}</dd>
                  </div>
                  {certification.credentialId ? (
                    <div className="flex justify-between gap-3">
                      <dt>Credential ID</dt>
                      <dd className="font-mono text-xs text-foreground">
                        {certification.credentialId}
                      </dd>
                    </div>
                  ) : null}
                </dl>
                <a
                  href={certification.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-sm font-semibold text-accent transition-colors hover:text-foreground"
                >
                  Verify credential
                </a>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
