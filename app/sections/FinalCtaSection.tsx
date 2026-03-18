import FadeIn from "../components/FadeIn";
import Section from "../components/Section";

export default function FinalCtaSection() {
  return (
    <Section className="pb-14">
      <FadeIn>
        <div className="relative overflow-hidden border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] px-6 py-16 text-center shadow-[0_28px_100px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:px-10 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]"
          />

          <p className="text-[0.72rem] uppercase tracking-[0.4em] text-accent">
            Let&apos;s Talk
          </p>
          <h2 className="text-balance mx-auto mt-6 max-w-3xl font-serif text-4xl font-light leading-tight tracking-[-0.05em] text-foreground sm:text-6xl">
            Let&apos;s create something together
          </h2>
          <p className="text-balance mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            If the story matters, we can shape it with stillness, warmth, and a
            cinematic point of view.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:nokatart@gmail.com"
              className="inline-flex w-full items-center justify-center border border-accent/[0.35] bg-accent px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-[#171311] shadow-[0_18px_60px_rgba(214,184,160,0.24)] hover:translate-y-[-2px] hover:bg-[#e2c7b2] sm:w-auto"
            >
              Get in touch
            </a>
            <a
              href="https://www.instagram.com/nokatart/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center border border-white/[0.12] bg-white/[0.03] px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white/[0.82] hover:border-white/[0.24] hover:bg-white/[0.06] sm:w-auto"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@nokatart"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center border border-white/[0.12] bg-white/[0.03] px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white/[0.82] hover:border-white/[0.24] hover:bg-white/[0.06] sm:w-auto"
            >
              YouTube
            </a>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
