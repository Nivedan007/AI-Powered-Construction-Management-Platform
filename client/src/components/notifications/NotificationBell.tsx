"use client";

import { useState } from "react";
import { Bell, Trash2, CheckCircle } from "lucide-react";
import { useNotifications } from "@/lib/notifications";
import { motion, AnimatePresence } from "framer-motion";

export function NotificationBell() {
  const { notifications, removeNotification, clearAll, markAsRead, unreadCount } =
    useNotifications();
  const [open, setOpen] = useState(false);

  const unread = unreadCount();

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 hover:bg-slate-800/50 rounded-lg transition"
      >
        <Bell className="h-5 w-5 text-slate-300" />
        {unread > 0 && (
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 top-12 w-80 bg-slate-900 border border-slate-700/50 rounded-lg shadow-xl z-50"
          >
            <div className="p-4 border-b border-slate-700/50 flex items-center justify-between">
              <h3 className="font-semibold text-slate-100">Notifications</h3>
              {unread > 0 && (
                <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
                  {unread} new
                </span>
              )}
            </div>

            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-6 text-center text-slate-400">No notifications yet</div>
              ) : (
                <div className="space-y-2 p-2">
                  {notifications
                    .slice()
                    .reverse()
                    .map((notif) => (
                      <button
                        key={notif.id}
                        onClick={() => markAsRead(notif.id)}
                        className={`w-full text-left p-3 rounded-lg transition ${
                          notif.read
                            ? "bg-slate-800/30 hover:bg-slate-800/50"
                            : "bg-slate-800/70 hover:bg-slate-700/70 border-l-2 border-cyan-500"
                        }`}
                      >
                        <p className="font-medium text-sm text-slate-100">{notif.title}</p>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">{notif.message}</p>
                        <p className="text-xs text-slate-500 mt-2">
                          {new Date(notif.timestamp).toLocaleTimeString()}
                        </p>
                      </button>
                    ))}
                </div>
              )}
            </div>

            {notifications.length > 0 && (
              <div className="p-3 border-t border-slate-700/50 flex gap-2">
                <button
                  onClick={() => {
                    clearAll();
                    setOpen(false);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 text-xs py-2 hover:bg-slate-800/50 rounded transition"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear all
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
