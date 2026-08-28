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
          Traitement de surface & Galvanoplastie
        </p>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight max-w-3xl">
          La Chimie au Service
          <br />
          <span className="text-gradient">de Vos Métaux</span>
        </h1>
        <p className="mt-6 max-w-xl text-muted text-base sm:text-lg">
          Depuis plus de 20 ans, ELECTROCHEMICALS conçoit, fournit et installe
          les produits chimiques, anodes, équipements et lignes automatisées
          de traitement de surface et d&apos;électrodéposition, depuis Alger,
          Algérie.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
          <a
            href="#products"
            className="rounded-full bg-gradient-to-r from-accent-from to-accent-to text-background text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity"
          >
            Découvrir nos produits
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border text-sm font-medium px-6 py-3 hover:border-accent-from hover:text-accent-from transition-colors"
          >
            Parler à un ingénieur
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 inset-x-0 flex justify-center text-muted text-xs tracking-widest uppercase">
        Défiler
      </div>
    </section>
  );
}
