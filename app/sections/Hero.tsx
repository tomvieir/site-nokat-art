"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import BrandMark from "../components/BrandMark";

type HeroProps = {
  videoSrc: string;
};

export default function Hero({ videoSrc }: HeroProps) {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 480], [0, 96]);
  const backgroundOpacity = useTransform(scrollY, [0, 320], [1, 0.74]);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 py-16 sm:px-6 sm:py-20">
      <motion.div
        style={{ y: backgroundY, opacity: backgroundOpacity }}
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full scale-[1.12] object-cover object-center blur-[0.6px] brightness-[0.72] contrast-[1.04] saturate-[0.96]"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(8,10,12,0.12)_0%,rgba(8,10,12,0.44)_42%,rgba(8,10,12,0.8)_100%)]" />
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(214,184,160,0.12),transparent_22%),radial-gradient(circle_at_82%_16%,rgba(100,135,128,0.08),transparent_18%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[52rem] px-2 py-6 sm:px-6 sm:py-8"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-8 h-[24rem] rounded-[999px] bg-[radial-gradient(circle,rgba(8,10,12,0.46)_0%,rgba(8,10,12,0.18)_48%,transparent_78%)] blur-[22px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.22] to-transparent"
          />

          <div className="relative flex flex-col items-center">
          <BrandMark align="center" avatarSize="sm" priority className="gap-4" />
          <h1 className="sr-only">NOKAT art</h1>

          <div
            aria-hidden
            className="mt-7 h-px w-28 bg-gradient-to-r from-transparent via-white/[0.24] to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-4xl font-serif text-4xl font-light tracking-[-0.06em] text-foreground sm:text-5xl lg:text-[4.2rem]"
          >
            Wedding films from hidden realms.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.18,
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-balance mx-auto mt-6 max-w-2xl text-base leading-8 text-white/[0.72] sm:text-lg sm:leading-9"
          >
            Brazilian creator based in Kerry, Ireland, capturing weddings with
            softness, honesty, and a less usual point of view, drawn from the
            corners most people never notice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.82,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <a
              href="#featured-work"
              className="inline-flex min-w-[190px] items-center justify-center border border-white/[0.14] bg-black/[0.14] px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-foreground backdrop-blur-xl hover:bg-white/[0.08]"
            >
              View Work
            </a>
            <a
              href="#films"
              className="inline-flex min-w-[190px] items-center justify-center border border-accent/[0.3] bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#171311] shadow-[0_18px_60px_rgba(214,184,160,0.18)] hover:translate-y-[-2px] hover:bg-[#e2c7b2]"
            >
              Watch Film
            </a>
          </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
