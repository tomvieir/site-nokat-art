"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type VideoPreviewFrameProps = {
  src: string;
  alt: string;
  previewTime: number;
  className?: string;
};

export default function VideoPreviewFrame({
  src,
  alt,
  previewTime,
  className = "",
}: VideoPreviewFrameProps) {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const video = document.createElement("video");

    video.src = src;
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";

    const captureFrame = () => {
      if (!isMounted || video.videoWidth === 0 || video.videoHeight === 0) {
        return;
      }

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext("2d");

      if (!context) {
        return;
      }

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      setThumbnail(canvas.toDataURL("image/jpeg", 0.84));
    };

    const handleLoadedMetadata = () => {
      const targetTime =
        video.duration && Number.isFinite(video.duration)
          ? Math.min(previewTime, Math.max(0.25, video.duration * 0.45))
          : previewTime;

      video.currentTime = targetTime;
    };

    const handleSeeked = () => {
      captureFrame();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);
    video.load();

    return () => {
      isMounted = false;
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [previewTime, src]);

  if (thumbnail) {
    return (
      <Image
        src={thumbnail}
        alt={alt}
        fill
        unoptimized
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={`object-cover ${className}`.trim()}
      />
    );
  }

  return (
    <div
      aria-label={alt}
      className={`h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_30%),linear-gradient(180deg,rgba(14,16,18,0.78)_0%,rgba(10,12,14,1)_100%)] ${className}`.trim()}
    />
  );
}
