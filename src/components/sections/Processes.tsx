const PROCESSES = [
  { title: "Zingage électrolytique", description: "Dépôt de zinc pour la protection anticorrosion des pièces métalliques." },
  { title: "Nickelage électrolytique", description: "Finitions satinées, semi-brillantes, sulfamate et brillantes." },
  { title: "Cuivrage électrolytique", description: "Bains acides, pyrophosphates et cyanurés selon l'application." },
  { title: "Chromage décor", description: "Finition décorative brillante pour pièces exposées." },
  { title: "Chromage dur", description: "Dépôt fonctionnel pour résistance à l'usure et aux frottements." },
  { title: "Étamage électrolytique", description: "Finitions décoratives et électroniques, bains acides." },
  { title: "Passivation de zinc", description: "Finitions bleue, incolore, verte olive et noire." },
  { title: "Dorure", description: "Dépôt d'or pour applications décoratives et techniques." },
  { title: "Argenture", description: "Dépôt d'argent pour applications décoratives et de connectique." },
  { title: "Préparation de surface", description: "Dégraissage et décapage préalables au traitement électrolytique." },
];

export default function Processes() {
  return (
    <section id="processes" className="relative max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <p className="text-xs uppercase tracking-[0.3em] text-accent-from mb-4">
        Procédés
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-14 max-w-xl">
        Dix procédés électrolytiques maîtrisés.
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROCESSES.map((process) => (
          <div
            key={process.title}
            className="rounded-2xl border border-border bg-surface p-6 hover:border-accent-from/60 transition-colors"
          >
            <h3 className="text-base font-medium mb-2">{process.title}</h3>
            <p className="text-sm text-muted leading-relaxed">
              {process.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
