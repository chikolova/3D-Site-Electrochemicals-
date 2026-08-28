const LINKS = [
  { href: "#about", label: "À propos" },
  { href: "#processes", label: "Procédés" },
  { href: "#products", label: "Produits" },
  { href: "#equipment", label: "Équipements" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-background/70 backdrop-blur-md border-b border-border/60">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#top" className="text-sm font-semibold tracking-[0.2em] uppercase">
          ELECTRO<span className="text-gradient">CHEMICALS</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-xs uppercase tracking-wider border border-border rounded-full px-4 py-2 hover:border-accent-from hover:text-accent-from transition-colors"
        >
          Nous contacter
        </a>
      </nav>
    </header>
  );
}
