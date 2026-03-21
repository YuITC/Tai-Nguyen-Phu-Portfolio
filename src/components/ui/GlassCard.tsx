"use client";

import { motion, type HTMLMotionProps } from "motion/react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass ${className}`}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: "0 12px 40px rgba(37, 99, 235, 0.12)",
            }
          : undefined
      }
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
