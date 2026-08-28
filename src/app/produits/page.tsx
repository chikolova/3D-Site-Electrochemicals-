import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CatalogClient from "./CatalogClient";
import { PRODUCT_CATEGORIES, PRODUCT_COUNT } from "@/data/products";

export const metadata: Metadata = {
  title: "Catalogue produits — ELECTROCHEMICALS",
  description:
    "Catalogue complet des produits chimiques ELECTROCHEMICALS pour le traitement de surface et la galvanoplastie.",
};

export default function ProductsPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 max-w-6xl mx-auto px-6">
        <Link
          href="/#products"
          className="text-xs uppercase tracking-wider text-muted hover:text-accent-from transition-colors"
        >
          ← Retour à l&apos;accueil
        </Link>

        <p className="text-xs uppercase tracking-[0.3em] text-accent-from mt-8 mb-4">
          Catalogue produits
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
          {PRODUCT_COUNT} produits répartis en {PRODUCT_CATEGORIES.length} catégories.
        </h1>
        <p className="text-muted max-w-xl mb-14">
          Contactez notre service commercial pour toute question sur une
          référence ou pour un devis.
        </p>

        <CatalogClient categories={PRODUCT_CATEGORIES} />
      </main>
      <Footer />
    </>
  );
}
