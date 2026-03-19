"use client";

import { useState } from "react";
import type { PhotoItem } from "../content/portfolio-data";
import ExpandToggle from "../components/ExpandToggle";
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
  const hiddenCount = Math.max(items.length - visibleItems.length, 0);
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
          <ExpandToggle
            expanded={isExpanded}
            onToggle={() => setIsExpanded((current) => !current)}
            remainingCount={hiddenCount}
            itemLabel="stories"
          />
        </FadeIn>
      ) : null}
    </Section>
  );
}
