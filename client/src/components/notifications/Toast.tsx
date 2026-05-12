"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { useNotifications } from "@/lib/notifications";

const iconMap = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle
};

const colorMap = {
  success: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-300" },
  error: { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-300" },
  info: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-300" },
  warning: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-300" }
};

export function ToastContainer() {
  const { notifications, removeNotification } = useNotifications();

  return (
    <div className="fixed bottom-4 right-4 z-[100] space-y-3 max-w-sm">
      <AnimatePresence mode="popLayout">
        {notifications.slice(-3).map((notification) => {
          const Icon = iconMap[notification.type];
          const colors = colorMap[notification.type];

          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`rounded-lg border ${colors.bg} ${colors.border} p-4 shadow-xl backdrop-blur-xl`}
            >
              <div className="flex items-start gap-3">
                <Icon className={`h-5 w-5 flex-shrink-0 ${colors.text} mt-0.5`} />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-100">{notification.title}</p>
                  <p className="text-sm text-slate-300 mt-1">{notification.message}</p>
                </div>
                <button
                  onClick={() => removeNotification(notification.id)}
                  className="flex-shrink-0 text-slate-400 hover:text-slate-200 transition"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
