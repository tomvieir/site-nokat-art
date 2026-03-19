"use client";

import { useDeferredValue, useState } from "react";
import type { PhotoCategory, PhotoItem } from "../content/portfolio-data";
import { galleryCategories } from "../content/portfolio-data";
import ExpandToggle from "../components/ExpandToggle";
import FadeIn from "../components/FadeIn";
import GalleryGrid from "../components/GalleryGrid";
import Section from "../components/Section";

type GallerySectionProps = {
  items: PhotoItem[];
};

export default function GallerySection({ items }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory | "all">("all");
  const [isExpanded, setIsExpanded] = useState(false);
  const deferredCategory = useDeferredValue(activeCategory);
  const filteredItems =
    deferredCategory === "all"
      ? items
      : items.filter((item) => item.category === deferredCategory);
  const visibleItems = isExpanded ? filteredItems : filteredItems.slice(0, 4);
  const hiddenCount = Math.max(filteredItems.length - visibleItems.length, 0);
  const canExpand = filteredItems.length > 4;

  return (
    <Section
      id="gallery"
      eyebrow="Gallery"
      title="More scenes from the wedding world."
      description="A second edit of wedding-day fragments and pre-wedding portraits, kept spacious so each image can hold its own atmosphere."
    >
      <FadeIn className="mb-8 flex flex-wrap gap-3">
        {galleryCategories.map((category) => {
          const isActive = category.value === activeCategory;

          return (
            <button
              key={category.value}
              type="button"
              onClick={() => {
                setActiveCategory(category.value);
                setIsExpanded(false);
              }}
              className={`border px-4 py-2 text-xs uppercase tracking-[0.32em] transition-colors ${
                isActive
                  ? "border-accent/40 bg-accent text-[#171311]"
                  : "border-white/[0.1] bg-white/[0.03] text-white/70 hover:border-white/[0.22]"
              }`.trim()}
            >
              {category.label}
            </button>
          );
        })}
      </FadeIn>

      <FadeIn delay={0.05}>
        <GalleryGrid items={visibleItems} variant="grid" />
      </FadeIn>

      {canExpand ? (
        <FadeIn delay={0.08} className="mt-10 flex justify-center">
          <ExpandToggle
            expanded={isExpanded}
            onToggle={() => setIsExpanded((current) => !current)}
            remainingCount={hiddenCount}
            itemLabel="wedding frames"
          />
        </FadeIn>
      ) : null}
    </Section>
  );
}
