import { motion } from "framer-motion";

export function AnimatedCounter({ value, duration = 2.5 }: { value: number; duration?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-3xl font-bold text-slate-100"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration }}
      >
        {value}
      </motion.span>
    </motion.div>
  );
}

export function AnimatedProgressBar({ 
  percentage, 
  duration = 1.5,
  color = "from-cyan-500 to-blue-600"
}: { 
  percentage: number; 
  duration?: number;
  color?: string;
}) {
  return (
    <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
        className={`h-full bg-gradient-to-r ${color} rounded-full shadow-lg shadow-cyan-500/30`}
      />
    </div>
  );
}

export function AnimatedBadge({ 
  text, 
  type = "success" 
}: { 
  text: string; 
  type?: "success" | "warning" | "error" | "info" 
}) {
  const colorMap = {
    success: "bg-emerald-500/20 text-emerald-300",
    warning: "bg-amber-500/20 text-amber-300",
    error: "bg-red-500/20 text-red-300",
    info: "bg-cyan-500/20 text-cyan-300"
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border border-current border-opacity-30 ${colorMap[type]}`}
    >
      {text}
    </motion.span>
  );
}

export function AnimatedList({ 
  items, 
  renderItem 
}: { 
  items: any[]; 
  renderItem: (item: any, index: number) => React.ReactNode;
}) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
      {items.map((data, i) => (
        <motion.div key={i} variants={item}>
          {renderItem(data, i)}
        </motion.div>
      ))}
    </motion.div>
  );
}
