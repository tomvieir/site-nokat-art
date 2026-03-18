"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  y = 28,
  amount = 0.25,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale: 0.985, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.95,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
