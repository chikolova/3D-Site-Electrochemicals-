const METALS = [
  { metal: "Nickel", forms: "Planches, carrées, laminées, elliptiques, ronds, billes", grade: "INCO R/S/P" },
  { metal: "Cuivre", forms: "Planches, laminées, elliptiques, blocanodes, boules", grade: "Électro-phosphore, OFF" },
  { metal: "Laiton", forms: "Planches, blocanodes, berlignots", grade: "64/36, 70/30" },
  { metal: "Étain", forms: "Planches lisses/cannelées, billes, grenaille", grade: "Haute pureté" },
  { metal: "Étain/Plomb", forms: "Elliptiques, planches, billes, grenaille", grade: "60/40, 63/37" },
  { metal: "Plomb", forms: "Planches, profils cannelés, rondes", grade: "Haute pureté, alliages Sn/Sb" },
  { metal: "Zinc", forms: "Elliptiques, planches, boules, berlignots, fils", grade: "Haute pureté" },
  { metal: "Cadmium", forms: "Planches, boules, baguettes", grade: "Haute pureté" },
  { metal: "Argent", forms: "Planches, profilés, fils, grenaille", grade: "Haute pureté" },
  { metal: "Or", forms: "Feuilles", grade: "—" },
];

export default function Anodes() {
  return (
    <section id="anodes" className="relative max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <p className="text-xs uppercase tracking-[0.3em] text-accent-from mb-4">
        Anodes & Métaux
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10 max-w-xl">
        Anodes et métaux pour toutes les applications galvaniques.
      </h2>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-muted border-b border-border">
              <th className="px-5 py-4 font-medium">Métal</th>
              <th className="px-5 py-4 font-medium">Formes disponibles</th>
              <th className="px-5 py-4 font-medium">Qualité / grade</th>
            </tr>
          </thead>
          <tbody>
            {METALS.map((row, i) => (
              <tr
                key={row.metal}
                className={i % 2 === 0 ? "bg-surface" : "bg-transparent"}
              >
                <td className="px-5 py-4 font-medium whitespace-nowrap">{row.metal}</td>
                <td className="px-5 py-4 text-muted">{row.forms}</td>
                <td className="px-5 py-4 text-muted whitespace-nowrap">{row.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
