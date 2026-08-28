const CATEGORIES = [
  {
    title: "Dégraissage chimique & électrolytique",
    examples: ["Emulsol", "Cleaner A70", "Ecleaner A100", "TA-50"],
  },
  {
    title: "Décapage",
    examples: ["IT-11", "IT-12", "Pickler"],
  },
  {
    title: "Zinc & passivations",
    examples: ["Zincal 500", "Alcazinc", "Polyzinc", "Bluepass 70"],
  },
  {
    title: "Cadmium",
    examples: ["Cadyte"],
  },
  {
    title: "Étain",
    examples: ["Stalux 100", "Etalux 200"],
  },
  {
    title: "Cuivre & laiton",
    examples: ["Cuprex 500", "Cuprite 200", "Copper 700", "Brass 777"],
  },
  {
    title: "Nickel",
    examples: [
      "Nickel Velours",
      "Nickel Semi-Brillant",
      "Nickel Sulfamate",
      "Bright 1070",
    ],
  },
  {
    title: "Chrome",
    examples: ["Trichrom", "Chrodura", "Chroblack", "Fogless"],
  },
];

export default function Products() {
  return (
    <section id="products" className="relative max-w-6xl mx-auto px-6 py-28 scroll-mt-24">
      <p className="text-xs uppercase tracking-[0.3em] text-accent-from mb-4">
        Produits chimiques
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 max-w-xl">
        Un catalogue complet pour chaque étape du bain.
      </h2>
      <p className="text-muted max-w-xl mb-14">
        Fiches techniques détaillées — concentrations, températures,
        densités de courant — disponibles sur demande pour chaque référence.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent-from/60 transition-colors"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-accent-from to-accent-to mb-5 opacity-80 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-sm font-medium mb-3">{category.title}</h3>
            <ul className="space-y-1">
              {category.examples.map((example) => (
                <li key={example} className="text-xs text-muted font-mono">
                  {example}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
