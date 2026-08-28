"use client";

import { useEffect, useRef, useState } from "react";

const MIN_VISIBLE_MS = 1200;
const FADE_MS = 600;
const HOLD_AT = 90;

export default function Preloader({ ready }: { ready: boolean }) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [mounted, setMounted] = useState(true);
  const mountTime = useRef<number | null>(null);

  useEffect(() => {
    mountTime.current = Date.now();
  }, []);

  useEffect(() => {
    let raf: number;
    const tick = () => {
      setProgress((p) => {
        if (p >= HOLD_AT) return HOLD_AT;
        return p + (HOLD_AT - p) * 0.08 + 0.4;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const elapsed = Date.now() - (mountTime.current ?? Date.now());
    const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);

    const timer = setTimeout(() => {
      setProgress(100);
      const fadeTimer = setTimeout(() => setFading(true), 150);
      const unmountTimer = setTimeout(
        () => setMounted(false),
        150 + FADE_MS
      );
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(unmountTimer);
      };
    }, remaining);

    return () => clearTimeout(timer);
  }, [ready]);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity ease-out"
      style={{
        opacity: fading ? 0 : 1,
        transitionDuration: `${FADE_MS}ms`,
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <div className="text-xs tracking-[0.3em] text-muted uppercase mb-4">
        Voltara Materials
      </div>
      <div className="w-48 h-px bg-border relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-from to-accent-to"
          style={{ width: `${progress}%`, transition: "width 120ms linear" }}
        />
      </div>
      <div className="mt-3 text-[11px] text-muted font-mono">
        {Math.round(progress)}%
      </div>
    </div>
  );
}
