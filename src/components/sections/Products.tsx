const PRODUCTS = [
  {
    title: "Battery-Grade Electrolytes",
    description:
      "Lithium-salt electrolyte blends tuned for conductivity, low-temperature performance, and long cycle life.",
  },
  {
    title: "Cathode & Anode Materials",
    description:
      "High-purity active materials and precursors for NMC, LFP, and silicon-composite chemistries.",
  },
  {
    title: "Custom Electrochemical Synthesis",
    description:
      "Bespoke synthesis routes and scale-up support, from gram-scale bench samples to pilot production.",
  },
  {
    title: "Analytical & QC Services",
    description:
      "Ion chromatography, Karl Fischer titration, and electrochemical impedance testing for full traceability.",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative max-w-6xl mx-auto px-6 py-28 scroll-mt-24">
      <p className="text-xs uppercase tracking-[0.3em] text-accent-from mb-4">
        What we make
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-14 max-w-xl">
        Materials engineered for every layer of the cell.
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {PRODUCTS.map((product) => (
          <div
            key={product.title}
            className="group rounded-2xl border border-border bg-surface p-8 hover:border-accent-from/60 transition-colors"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-accent-from to-accent-to mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-lg font-medium mb-2">{product.title}</h3>
            <p className="text-sm text-muted leading-relaxed">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
