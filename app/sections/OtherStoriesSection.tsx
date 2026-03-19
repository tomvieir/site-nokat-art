"use client";

import { useState } from "react";
import type { PhotoItem } from "../content/portfolio-data";
import FadeIn from "../components/FadeIn";
import GalleryGrid from "../components/GalleryGrid";
import Section from "../components/Section";

type OtherStoriesSectionProps = {
  items: PhotoItem[];
};

export default function OtherStoriesSection({
  items,
}: OtherStoriesSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleItems = isExpanded ? items : items.slice(0, 3);
  const canExpand = items.length > 3;

  return (
    <Section
      id="other-stories"
      eyebrow="Beyond Weddings"
      title="The same eye also moves through maternity, family, portrait, and live work."
      description="Weddings stay at the center of the portfolio, but the same softness also carries into maternity stories, family frames, portraits, and live sessions."
      className="pt-8"
    >
      <FadeIn>
        <GalleryGrid items={visibleItems} variant="grid" />
      </FadeIn>

      {canExpand ? (
        <FadeIn delay={0.08} className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded((current) => !current)}
            className="inline-flex items-center justify-center border border-white/[0.12] bg-white/[0.03] px-6 py-3 text-xs font-medium uppercase tracking-[0.28em] text-white/[0.78] hover:border-white/[0.24] hover:bg-white/[0.06]"
          >
            {isExpanded ? "View Less" : "View More"}
          </button>
        </FadeIn>
      ) : null}
    </Section>
  );
}
