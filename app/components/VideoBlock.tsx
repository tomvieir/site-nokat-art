"use client";

import { motion } from "framer-motion";
import type { VideoItem } from "../content/portfolio-data";
import VideoPreviewFrame from "./VideoPreviewFrame";

type VideoBlockProps = {
  video: VideoItem;
  onOpen: (video: VideoItem) => void;
};

export default function VideoBlock({ video, onOpen }: VideoBlockProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={() => onOpen(video)}
      className="group w-full overflow-hidden border border-white/[0.08] bg-white/[0.03] text-left shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-sm"
    >
      <div className={`relative overflow-hidden ${video.thumbnailAspect}`}>
        <VideoPreviewFrame
          src={video.videoSrc}
          alt={`${video.title} preview frame`}
          previewTime={video.previewTime}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08)_10%,rgba(10,10,10,0.15)_40%,rgba(10,10,10,0.72)_100%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-white/[0.12] text-foreground backdrop-blur-xl">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="ml-1 h-7 w-7 fill-current"
            >
              <path d="M8 6.5v11l9-5.5-9-5.5Z" />
            </svg>
          </span>
        </div>
      </div>

      <div className="space-y-4 p-6 sm:p-7">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.38em] text-accent">
            {video.label}
          </p>
          <h3 className="mt-3 font-serif text-2xl font-light leading-tight tracking-[-0.04em] text-foreground sm:text-3xl">
            {video.title}
          </h3>
        </div>

        <p className="max-w-xl text-sm leading-7 text-muted">
          {video.description}
        </p>
      </div>
    </motion.button>
  );
}
