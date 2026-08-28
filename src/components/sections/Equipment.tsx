const EQUIPMENT = [
  { title: "Redresseurs de courant", description: "De 10 A à 10 000 A, pour tous types de bains électrolytiques." },
  { title: "Filtres & pompes", description: "Filtration et circulation pour bains d'électrolyse." },
  { title: "Tonneaux d'électrolyse", description: "Tonneaux en polyéthylène pour le traitement en vrac." },
  { title: "Thermoplongeurs", description: "Chauffage par immersion pour bains chimiques et électrolytiques." },
  { title: "Régulateurs", description: "Régulation de température et de niveau des bains." },
  { title: "Essoreuses centrifuges", description: "Séchage de pièces, capacité de 10 à 100 kg." },
];

export default function Equipment() {
  return (
    <section id="equipment" className="relative max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <p className="text-xs uppercase tracking-[0.3em] text-accent-from mb-4">
        Équipements
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-14 max-w-xl">
        L&apos;équipement de vos lignes de production.
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {EQUIPMENT.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-border bg-surface p-6 hover:border-accent-from/60 transition-colors"
          >
            <h3 className="text-base font-medium mb-2">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
