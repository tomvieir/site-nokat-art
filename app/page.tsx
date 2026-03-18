import {
  featuredPhotos,
  galleryPhotos,
  heroVideoSrc,
  otherStoriesPhotos,
  videos,
} from "./content/portfolio-data";
import AboutSection from "./sections/AboutSection";
import FeaturedWorkSection from "./sections/FeaturedWorkSection";
import FinalCtaSection from "./sections/FinalCtaSection";
import GallerySection from "./sections/GallerySection";
import Hero from "./sections/Hero";
import OtherStoriesSection from "./sections/OtherStoriesSection";
import SiteFooter from "./sections/SiteFooter";
import VideoSection from "./sections/VideoSection";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(214,184,160,0.2),transparent_45%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-[34rem] -z-10 h-72 w-72 rounded-full bg-accent/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-[68rem] -z-10 h-80 w-80 rounded-full bg-white/5 blur-[160px]"
      />

      <Hero videoSrc={heroVideoSrc} />
      <AboutSection />
      <VideoSection items={videos} />
      <FeaturedWorkSection items={featuredPhotos} />
      <GallerySection items={galleryPhotos} />
      <OtherStoriesSection items={otherStoriesPhotos} />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
