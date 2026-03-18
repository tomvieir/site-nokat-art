import Image from "next/image";
import { personalPortraitSrc } from "../content/portfolio-data";
import FadeIn from "../components/FadeIn";
import Section from "../components/Section";

export default function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A wedding-first approach, told with softness."
      description="The point of view stays close to real feeling: less obvious, less staged, and more attentive to the details that turn a wedding into memory."
      className="pt-10"
      contentClassName="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16"
    >
      <FadeIn>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_100%)] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          <div className="relative aspect-[4/5] min-h-[26rem]">
            <Image
              src={personalPortraitSrc}
              alt="Jeff, filmmaker and photographer behind NOKAT art."
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-[center_22%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,12,0.02)_5%,rgba(8,10,12,0.18)_55%,rgba(8,10,12,0.58)_100%)]" />
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.08} className="max-w-2xl">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-accent">
          Brazilian creator based in Kerry, Ireland
        </p>

        <p className="text-balance font-serif text-4xl font-light leading-tight tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[3.5rem]">
          I&apos;m Jeff, and weddings sit at the heart of the work, approached
          through film and photography with a quieter, more unusual gaze.
        </p>

        <p className="mt-8 text-lg leading-9 text-muted">
          I&apos;m drawn to the hidden places inside a wedding day: the pause before
          the ceremony, the closeness of family, the gestures that happen just
          outside the center of attention. The result stays cinematic, but never
          far from truth.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {["Wedding-first", "Documentary softness", "Natural light"].map((label) => (
            <span
              key={label}
              className="border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/[0.68]"
            >
              {label}
            </span>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
