import Link from "next/link";
import { PRODUCT_CATEGORIES, PRODUCT_COUNT } from "@/data/products";

const HIGHLIGHTS = PRODUCT_CATEGORIES.filter((cat) =>
  [
    "degraissage-chimique",
    "decapage",
    "zinc-acide",
    "cadmium-cyanure",
    "etain-acide",
    "cuivre",
    "nickel",
    "chrome",
  ].includes(cat.slug)
);

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
        {PRODUCT_COUNT} références réparties en {PRODUCT_CATEGORIES.length}{" "}
        catégories — fiches techniques (concentrations, températures,
        densités de courant) disponibles sur demande pour chaque référence.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {HIGHLIGHTS.map((category) => (
          <div
            key={category.slug}
            className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent-from/60 transition-colors"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-accent-from to-accent-to mb-5 opacity-80 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-sm font-medium mb-3">{category.title}</h3>
            <ul className="space-y-1">
              {category.products.slice(0, 4).map((product) => (
                <li key={product.slug} className="text-xs text-muted font-mono">
                  {product.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link
        href="/produits"
        className="inline-block mt-10 text-sm text-accent-from hover:underline underline-offset-4"
      >
        Voir le catalogue complet →
      </Link>
    </section>
  );
}
