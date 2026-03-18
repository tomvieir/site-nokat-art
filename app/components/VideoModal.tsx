"use client";

import { motion } from "framer-motion";
import { useEffect, useEffectEvent } from "react";
import type { VideoItem } from "../content/portfolio-data";

type VideoModalProps = {
  video: VideoItem;
  onClose: () => void;
};

export default function VideoModal({ video, onClose }: VideoModalProps) {
  const handleEscape = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  });

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      handleEscape(event);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/[0.86] px-4 py-6 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex w-full max-w-[min(96vw,1500px)] flex-col overflow-hidden border border-white/[0.08] bg-[#111111] shadow-[0_30px_120px_rgba(0,0,0,0.65)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close video"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.14] bg-black/[0.45] text-foreground backdrop-blur-md hover:bg-black/60"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
            <path
              d="M6 6L18 18M18 6L6 18"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
          </svg>
        </button>

        <div className="flex max-h-[82vh] items-center justify-center bg-black px-2 py-2 sm:px-4 sm:py-4">
          <video
            controls
            controlsList="nodownload noplaybackrate"
            playsInline
            autoPlay
            preload="metadata"
            disablePictureInPicture
            className="h-auto max-h-[76vh] w-auto max-w-full object-contain"
          >
            <source src={video.videoSrc} type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.08] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.36em] text-accent">
              {video.label}
            </p>
            <h3 className="mt-2 font-serif text-2xl font-light tracking-[-0.04em] text-foreground">
              {video.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
              {video.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={video.videoSrc}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-white/[0.12] px-4 py-3 text-xs uppercase tracking-[0.28em] text-white/[0.76] hover:border-white/[0.24]"
            >
              Open Original
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
