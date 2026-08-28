const LINKS = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Materials" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-background/70 backdrop-blur-md border-b border-border/60">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#top" className="text-sm font-semibold tracking-[0.2em] uppercase">
          Voltara<span className="text-gradient">Materials</span>
        </a>
        <ul className="hidden sm:flex items-center gap-8 text-sm text-muted">
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
          Get in touch
        </a>
      </nav>
    </header>
  );
}
