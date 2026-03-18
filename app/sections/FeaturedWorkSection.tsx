import type { PhotoItem } from "../content/portfolio-data";
import FadeIn from "../components/FadeIn";
import GalleryGrid from "../components/GalleryGrid";
import Section from "../components/Section";

type FeaturedWorkSectionProps = {
  items: PhotoItem[];
};

export default function FeaturedWorkSection({
  items,
}: FeaturedWorkSectionProps) {
  return (
    <Section
      id="featured-work"
      eyebrow="Wedding Frames"
      title="Wedding photography stays at the center."
      description="Ceremony light, portraits, and intimate pre-wedding scenes arranged to keep the emotional weight of the day in focus."
    >
      <FadeIn>
        <GalleryGrid items={items} variant="masonry" />
      </FadeIn>
    </Section>
  );
}
