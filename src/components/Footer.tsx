export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <p>© {new Date().getFullYear()} Voltara Materials. All rights reserved.</p>
        <p>Engineered for the energy transition.</p>
      </div>
    </footer>
  );
}
