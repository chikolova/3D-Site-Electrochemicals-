const STATS = [
  { value: "20+", label: "Années d'expérience" },
  { value: "13", label: "Secteurs industriels servis" },
  { value: "10", label: "Procédés électrolytiques maîtrisés" },
  { value: "3", label: "Métiers : chimie, équipements, eaux" },
];

export default function About() {
  return (
    <section id="about" className="relative max-w-6xl mx-auto px-6 py-28 scroll-mt-24">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent-from mb-4">
            À propos d&apos;ELECTROCHEMICALS
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
            Fournisseur et intégrateur de lignes de traitement de surface.
          </h2>
          <p className="text-muted leading-relaxed">
            Basée à Mohammadia, Alger, ELECTROCHEMICALS fournit depuis plus de
            20 ans les produits chimiques et équipements de traitement de
            surface et de galvanoplastie. Nous allons au-delà de la simple
            fourniture de produits : nous concevons, construisons et
            installons des lignes automatisées complètes, expédiées et mises
            en service partout dans le monde.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Nos produits répondent aux normes environnementales en vigueur, et
            notre division dédiée au traitement des eaux et effluents
            accompagne nos clients sur l&apos;ensemble du cycle de production.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-l border-border pl-4">
              <div className="text-2xl sm:text-3xl font-semibold text-gradient">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
