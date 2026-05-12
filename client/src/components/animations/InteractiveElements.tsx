import { motion } from "framer-motion";
import { ReactNode } from "react";
import React from "react";

export function InteractiveButton({ 
  children, 
  onClick, 
  variant = "primary" 
}: { 
  children: ReactNode; 
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost"
  };

  return (
    <motion.button
      onClick={onClick}
      className={`btn ${variantClass[variant]}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <motion.span
        initial={false}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}

export function InteractiveCard({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return (
    <motion.div
      onClick={onClick}
      className="panel rounded-2xl cursor-pointer"
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)" }}
      whileTap={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleOnHover({ children, scale = 1.03 }: { children: ReactNode; scale?: number }) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}

export function RippleButton({ 
  children, 
  onClick 
}: { 
  children: ReactNode; 
  onClick?: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="relative btn btn-primary overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      <motion.span
        className="absolute inset-0 bg-white/20 rounded-lg"
        initial={{ scale: 0, opacity: 1 }}
        whileTap={{ scale: 4, opacity: 0 }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
}

export function ExpandableSection({ 
  title, 
  children, 
  defaultOpen = false 
}: { 
  title: string; 
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <motion.div className="border border-slate-700/50 rounded-lg overflow-hidden">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-slate-900/50 hover:bg-slate-800/50 transition"
      >
        <span className="font-semibold text-slate-100">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </motion.button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          overflow: "hidden"
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4 border-t border-slate-700/50">{children}</div>
      </motion.div>
    </motion.div>
  );
}

export function AnimatedInput({ 
  placeholder, 
  value, 
  onChange 
}: { 
  placeholder: string; 
  value: string;
  onChange: (value: string) => void;
}) {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <motion.div
      animate={{
        borderColor: isFocused ? "rgba(6, 182, 212, 0.5)" : "rgba(100, 116, 139, 0.25)"
      }}
      className="relative"
    >
      <motion.input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="input-base w-full"
        whileFocus={{ scale: 1.01 }}
      />
      <motion.span
        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600"
        animate={{
          width: isFocused ? "100%" : "0%"
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
