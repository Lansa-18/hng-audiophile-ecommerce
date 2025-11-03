"use client";

import { useNotificationStore } from "@/store/notificationStore";

export default function Notification() {
  const message = useNotificationStore((state) => state.message);

  if (!message) return null;

  return (
    <div className="bg-brand-primary fixed right-4 bottom-4 rounded-lg px-6 py-4 text-white shadow-lg transition-all duration-300">
      {message}
    </div>
  );
}
