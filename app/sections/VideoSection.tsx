"use client";

import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { startTransition, useState } from "react";
import type { VideoItem } from "../content/portfolio-data";
import FadeIn from "../components/FadeIn";
import Section from "../components/Section";
import VideoBlock from "../components/VideoBlock";

const VideoModal = dynamic(() => import("../components/VideoModal"), {
  ssr: false,
});

type VideoSectionProps = {
  items: VideoItem[];
};

export default function VideoSection({ items }: VideoSectionProps) {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const openVideo = (video: VideoItem) => {
    startTransition(() => {
      setActiveVideo(video);
    });
  };

  return (
    <>
      <Section
        id="films"
        eyebrow="Wedding Films"
        title="The films lead with atmosphere first."
        description="Intimate cuts, quieter angles, and the feeling of the day held before spectacle."
        className="pb-10"
      >
        <div className={`${items.length === 1 ? "mx-auto max-w-5xl" : "grid gap-6 lg:grid-cols-2"}`.trim()}>
          {items.map((video, index) => (
            <FadeIn key={video.id} delay={index * 0.08}>
              <VideoBlock video={video} onOpen={openVideo} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {activeVideo ? (
          <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
        ) : null}
      </AnimatePresence>
    </>
  );
}
