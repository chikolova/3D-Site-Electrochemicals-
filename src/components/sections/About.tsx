const STATS = [
  { value: "99.999%", label: "Electrolyte purity" },
  { value: "40+", label: "Formulations shipped" },
  { value: "12", label: "Patents in electrochemistry" },
  { value: "24/7", label: "Analytical QC" },
];

export default function About() {
  return (
    <section id="about" className="relative max-w-6xl mx-auto px-6 py-28 scroll-mt-24">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent-from mb-4">
            About Voltara
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
            Precision chemistry for the energy transition.
          </h2>
          <p className="text-muted leading-relaxed">
            We design electrolyte systems and electrochemical materials at the
            molecular level — balancing ionic conductivity, thermal stability,
            and manufacturability. Our lab-to-plant pipeline takes a
            formulation from bench synthesis to qualified production batches
            without losing performance along the way.
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
