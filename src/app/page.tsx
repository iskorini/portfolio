import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { Chip } from "@/components/chip";
import { GlassCard } from "@/components/glass-card";
import { Reveal } from "@/components/reveal";
import { CareerTimeline } from "@/components/career-timeline";
import { hero, profile, siteConfig, socials } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Navbar />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 size-[38rem] rounded-full bg-[var(--orb-indigo)] blur-[110px]" />
        <div className="absolute top-1/3 -right-48 size-[34rem] rounded-full bg-[var(--orb-violet)] blur-[130px]" />
        <div className="absolute bottom-[-12rem] left-1/4 size-[30rem] rounded-full bg-[var(--orb-warm)] blur-[140px]" />
      </div>

      <main>
        <section
          id="home"
          aria-labelledby="home-heading"
          className="relative flex min-h-svh flex-col items-center justify-center px-6 text-center"
        >
          <Reveal>
            <Chip>
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-emerald-500 motion-safe:animate-pulse"
              />
              {siteConfig.availability}
            </Chip>
          </Reveal>
          <Reveal delay={90}>
            <h1
              id="home-heading"
              className="mt-6 max-w-3xl text-balance text-5xl font-semibold tracking-tighter sm:text-7xl"
            >
              {hero.title}
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              {hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href={hero.ctaPrimary.href}
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast shadow-glass transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                {hero.ctaPrimary.label}
              </a>
              <a
                href={hero.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                {hero.ctaSecondary.label}
              </a>
            </div>
          </Reveal>
          <a
            href="#who-am-i"
            aria-label="Scroll to Who am I"
            className="absolute bottom-8 p-2 text-muted transition-colors hover:text-foreground"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-6 motion-safe:animate-bounce"
              aria-hidden
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </section>

        <Section
          id="who-am-i"
          eyebrow="Who am I"
          title="A short introduction"
          intro="A data scientist working at the intersection of machine learning, data engineering, and cloud."
        >
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-14">
            <Reveal>
              <div className="flex flex-col gap-8 sm:flex-row lg:flex-col">
                <GlassCard className="grid aspect-square w-40 place-items-center rounded-[2rem] sm:w-44">
                  <Image
                    src="/federico-avatar.svg"
                    alt="Illustrated portrait of Federico Schipani"
                    width={160}
                    height={160}
                    className="size-full rounded-[2rem]"
                  />
                </GlassCard>
                <dl className="space-y-4 text-sm">
                  {profile.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-xs tracking-widest text-muted uppercase">
                        {fact.label}
                      </dt>
                      <dd className="mt-0.5 font-medium">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
            <Reveal delay={120} className="space-y-5">
              {profile.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </Section>

        <Section
          id="career"
          eyebrow="Career"
          title="Professional journey"
          intro="Work experience and verified professional certifications."
        >
          <CareerTimeline />
        </Section>

        <Section
          id="about"
          eyebrow="About"
          title="Beyond the day job"
          intro="Connect with me, download my CV, or learn more about the things I enjoy."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <GlassCard className="flex h-full flex-col justify-between gap-8 p-8 sm:p-10">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Let&apos;s connect
                  </h3>
                  <p className="leading-relaxed text-muted">
                    Find me on LinkedIn and Instagram, explore my work on GitHub,
                    or send me an email.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={socials[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast shadow-glass transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={socials[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                  >
                    Visit GitHub
                  </a>
                  <a
                    href={socials[2].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                  >
                    Instagram
                  </a>
                  <a
                    href={socials[3].href}
                    className="glass rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                  >
                    Send an email
                  </a>
                </div>
              </GlassCard>
            </Reveal>
            <Reveal delay={120} className="h-full">
              <GlassCard className="flex h-full flex-col justify-between gap-8 p-8 sm:p-10">
                <div className="space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Off the clock
                    </h3>
                    <p className="leading-relaxed text-muted">
                      Photography and travelling are a useful counterweight to a
                      screen-heavy job. I am also interested in cars, motorcycles,
                      and the details behind well-made technology and product design.
                    </p>
                    <p className="leading-relaxed text-muted">
                      The technical side tends to continue at home through developer
                      and AI tools, self-hosting, and small homelab projects.
                    </p>
                  </div>
                </div>
                <a
                  href="/federico-schipani-cv.pdf"
                  download
                  className="glass w-fit rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  CV download coming soon
                </a>
              </GlassCard>
            </Reveal>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
