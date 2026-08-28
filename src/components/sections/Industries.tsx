const INDUSTRIES = [
  "Automobile",
  "Bâtiment",
  "Équipements électriques",
  "Mobilier",
  "Luminaire",
  "Industrie pétrolière",
  "Sanitaire",
  "Lunetterie, mode & luxe",
  "Équipement de loisir",
  "Industrie du fil",
  "Aéronautique",
  "Industrie navale",
  "Connectique",
];

export default function Industries() {
  return (
    <section id="industries" className="relative max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <p className="text-xs uppercase tracking-[0.3em] text-accent-from mb-4">
        Secteurs servis
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10 max-w-xl">
        13 industries nous font confiance.
      </h2>

      <div className="flex flex-wrap gap-3">
        {INDUSTRIES.map((industry) => (
          <span
            key={industry}
            className="text-sm text-muted border border-border rounded-full px-4 py-2 hover:border-accent-from/60 hover:text-foreground transition-colors"
          >
            {industry}
          </span>
        ))}
      </div>
    </section>
  );
}
