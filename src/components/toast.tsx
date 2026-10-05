"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

type Toast = { id: number; message: string };
const ToastContext = createContext<(message: string) => void>(() => {});

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const show = useCallback((message: string) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t.slice(-2), { id, message }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200);
  }, []);
  return (
    <ToastContext.Provider value={show}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-20 z-[60] flex flex-col items-center gap-2 px-4 md:bottom-6"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className="animate-fade-up flex items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-sm font-medium text-bg shadow-lg"
          >
            <CheckCircle2 className="size-4 text-brand" aria-hidden />
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
