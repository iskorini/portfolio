import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24 sm:py-32"
    >
      <Reveal>
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            {eyebrow}
          </p>
          <h2
            id={`${id}-heading`}
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>
          ) : null}
        </div>
      </Reveal>
      {children}
    </section>
  );
}
