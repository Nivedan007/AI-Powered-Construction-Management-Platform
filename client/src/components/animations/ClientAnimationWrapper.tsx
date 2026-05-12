"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function AnimatedMetricCard({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export function AnimatedHeroSection({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCard({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
}

export function PulsingBadge({ children }: { children: ReactNode }) {
  return (
    <motion.span
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {children}
    </motion.span>
  );
}

export function RotatingIcon({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, linear: true }}
    >
      {children}
    </motion.div>
  );
}

export function ScalingProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="w-full h-1.5 bg-slate-800/50 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/30"
      />
    </div>
  );
}
