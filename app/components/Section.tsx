import type { ReactNode } from "react";
import FadeIn from "./FadeIn";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  contentClassName?: string;
  children: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  contentClassName = "",
  children,
}: SectionProps) {
  const centered = align === "center";

  return (
    <section id={id} className={`px-6 py-20 sm:px-8 sm:py-24 ${className}`.trim()}>
      <div className="mx-auto max-w-7xl">
        {eyebrow || title || description ? (
          <div
            className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : ""}`.trim()}
          >
            <FadeIn y={22} amount={0.2}>
              <>
                {eyebrow ? (
                  <p className="mb-4 text-xs uppercase tracking-[0.42em] text-accent">
                    {eyebrow}
                  </p>
                ) : null}

                {title ? (
                  <h2 className="text-balance font-serif text-4xl font-light leading-tight tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[3.6rem]">
                    {title}
                  </h2>
                ) : null}
              </>
            </FadeIn>

            {description ? (
              <FadeIn delay={0.06} y={18} amount={0.2}>
                <p className="mt-5 text-balance text-base leading-8 text-muted sm:text-lg">
                  {description}
                </p>
              </FadeIn>
            ) : null}
          </div>
        ) : null}

        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}
