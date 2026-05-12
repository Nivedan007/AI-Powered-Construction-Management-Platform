import { motion } from "framer-motion";
import { ReactNode } from "react";

export function StaggerContainer({ children, delay = 0.1 }: { children: ReactNode; delay?: number }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay
      }
    }
  };

  return (
    <motion.div variants={item}>
      {children}
    </motion.div>
  );
}

export function ScaleOnHover({ children, scale = 1.05 }: { children: ReactNode; scale?: number }) {
  return (
    <motion.div whileHover={{ scale }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
      {children}
    </motion.div>
  );
}

export function FloatAnimation({ children, duration = 3 }: { children: ReactNode; duration?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}

export function PulseAnimation({ children, scale = 1.05 }: { children: ReactNode; scale?: number }) {
  return (
    <motion.div
      animate={{ scale: [1, scale, 1] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}

// PageTransition - removed as it causes SSR issues
// Use StaggerContainer at the root level instead
