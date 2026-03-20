"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import type { PhotoItem } from "../content/portfolio-data";

type GalleryGridProps = {
  items: PhotoItem[];
  variant?: "masonry" | "grid";
};

type PhotoCardProps = {
  item: PhotoItem;
  index: number;
  variant: "masonry" | "grid";
  onImageError: (id: string) => void;
};

function PhotoCard({ item, index, variant, onImageError }: PhotoCardProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "end 0.12"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [26, -18]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [18, 0]);

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 32, scale: 0.985, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{
        duration: 0.9,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mb-6 break-inside-avoid"
    >
      <motion.figure
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
        className="group overflow-hidden border border-white/[0.08] bg-background-secondary shadow-[0_18px_60px_rgba(0,0,0,0.24)]"
      >
        <div className="relative overflow-hidden">
          <motion.div style={{ y: imageY, scale: imageScale }}>
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              priority={index < 2}
              quality={76}
              sizes={
                variant === "masonry"
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              }
              onError={() => onImageError(item.id)}
              className="h-auto w-full bg-background-secondary object-cover transition-transform duration-900 ease-out group-hover:scale-[1.03]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,12,0.22)_0%,rgba(8,10,12,0.03)_24%,rgba(8,10,12,0.08)_100%)] opacity-70 transition-opacity duration-700 group-hover:opacity-90" />
          <motion.div
            style={{ y: contentY }}
            className="absolute left-4 top-4 sm:left-5 sm:top-5"
          >
            <span className="inline-flex border border-white/[0.12] bg-black/28 px-3 py-2 text-[0.62rem] uppercase tracking-[0.28em] text-white/[0.72] backdrop-blur-md transition-transform duration-500 group-hover:translate-y-[-2px]">
              {item.label}
            </span>
          </motion.div>
        </div>
      </motion.figure>
    </motion.article>
  );
}

export default function GalleryGrid({
  items,
  variant = "grid",
}: GalleryGridProps) {
  const [failedIds, setFailedIds] = useState<string[]>([]);
  const visibleItems = items.filter((item) => !failedIds.includes(item.id));

  const wrapperClassName =
    variant === "masonry"
      ? "columns-1 gap-6 md:columns-2"
      : "columns-1 gap-6 md:columns-2 xl:columns-3";

  return (
    <div className={wrapperClassName}>
      {visibleItems.map((item, index) => (
        <PhotoCard
          key={item.id}
          item={item}
          index={index}
          variant={variant}
          onImageError={(id) =>
            setFailedIds((current) => (current.includes(id) ? current : [...current, id]))
          }
        />
      ))}
    </div>
  );
}
