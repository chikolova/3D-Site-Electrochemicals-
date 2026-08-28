const POLLUTANTS = ["Métaux lourds (chrome, nickel, zinc, cuivre)", "Cyanures", "Acides", "Bases"];

export default function WaterTreatment() {
  return (
    <section id="water" className="relative max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent-from mb-4">
            Traitement des eaux
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
            Une production propre, du bain jusqu&apos;au rejet.
          </h2>
          <p className="text-muted leading-relaxed">
            Notre division dédiée conçoit, construit et installe des systèmes
            industriels de traitement des effluents, spécialisés dans le
            traitement des rejets issus des ateliers de traitement de
            surface.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted mb-4">
            Polluants traités
          </p>
          <ul className="space-y-3">
            {POLLUTANTS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent-from to-accent-to shrink-0" />
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
