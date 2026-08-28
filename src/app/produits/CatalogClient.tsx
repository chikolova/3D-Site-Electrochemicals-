"use client";

import { useMemo, useState } from "react";
import type { ProductCategory } from "@/data/products";

export default function CatalogClient({
  categories,
}: {
  categories: ProductCategory[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;

    return categories
      .map((cat) => ({
        ...cat,
        products: cat.title.toLowerCase().includes(q)
          ? cat.products
          : cat.products.filter((p) => p.name.toLowerCase().includes(q)),
      }))
      .filter((cat) => cat.products.length > 0);
  }, [categories, query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher un produit ou une catégorie…"
        className="w-full max-w-md rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent-from transition-colors mb-14"
      />

      {filtered.length === 0 && (
        <p className="text-muted text-sm">Aucun produit ne correspond à votre recherche.</p>
      )}

      <div className="space-y-14">
        {filtered.map((cat) => (
          <div key={cat.slug}>
            <h2 className="text-lg font-medium mb-1">{cat.title}</h2>
            <p className="text-sm text-muted mb-5">{cat.note}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.products.map((product) => (
                <div
                  key={product.slug}
                  className="rounded-xl border border-border bg-surface px-5 py-4 hover:border-accent-from/60 transition-colors"
                >
                  <p className="font-mono text-sm">{product.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
