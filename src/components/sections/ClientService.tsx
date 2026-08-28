const LAB_EQUIPMENT = [
  "Chambre d'essai au brouillard salin",
  "Couloscope",
  "Spectromètre",
  "Microscope électronique à balayage",
  "Chromatographie en phase gazeuse",
  "Chromatographie en phase liquide",
];

export default function ClientService() {
  return (
    <section id="lab" className="relative max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <p className="text-xs uppercase tracking-[0.3em] text-accent-from mb-4">
        Service client
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 max-w-xl">
        Un laboratoire d&apos;essai à disposition de nos clients.
      </h2>
      <p className="text-muted max-w-xl mb-10">
        Contrôle qualité et validation de vos dépôts et de vos bains, sur
        place ou en support de vos propres lignes de production.
      </p>

      <div className="flex flex-wrap gap-3">
        {LAB_EQUIPMENT.map((item) => (
          <span
            key={item}
            className="text-sm text-muted border border-border rounded-full px-4 py-2 hover:border-accent-from/60 hover:text-foreground transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
