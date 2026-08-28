"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Preloader from "@/components/Preloader";

const Scene = dynamic(() => import("@/components/three/Scene"), {
  ssr: false,
});

export default function Hero() {
  const [ready, setReady] = useState(false);

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden bg-radial-fade">
      <Preloader ready={ready} />

      <div className="absolute inset-0">
        <Scene onReady={() => setReady(true)} />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <p className="text-xs uppercase tracking-[0.35em] text-muted mb-5">
          Electrochemical Materials Engineering
        </p>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight max-w-3xl">
          The Chemistry Inside
          <br />
          <span className="text-gradient">Every Battery</span>
        </h1>
        <p className="mt-6 max-w-xl text-muted text-base sm:text-lg">
          Voltara Materials formulates battery-grade electrolytes and
          electrochemical compounds engineered for energy density, cycle life,
          and safety at scale.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
          <a
            href="#products"
            className="rounded-full bg-gradient-to-r from-accent-from to-accent-to text-background text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity"
          >
            Explore Materials
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border text-sm font-medium px-6 py-3 hover:border-accent-from hover:text-accent-from transition-colors"
          >
            Talk to Our Team
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 inset-x-0 flex justify-center text-muted text-xs tracking-widest uppercase">
        Scroll
      </div>
    </section>
  );
}
