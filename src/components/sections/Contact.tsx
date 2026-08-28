"use client";

import { useState } from "react";

const CONTACTS = [
  { label: "Directeur Général", name: "A. LAMECHE", value: "alameche@electrochemicals.net" },
  { label: "Direction commerciale", name: "0560 99 95 21", value: "commercial1@electrochemicals.net" },
  { label: "Service commercial", name: "0560 99 95 22", value: "commercial1@electrochemicals.net" },
  { label: "Renseignements généraux", name: "", value: "info@electrochemicals.net" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-6 py-28 scroll-mt-24">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent-from mb-4">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
            Parlons de votre ligne de production.
          </h2>
          <p className="text-muted leading-relaxed max-w-sm">
            Décrivez-nous votre procédé, vos volumes ou votre projet
            d&apos;installation — notre équipe technique vous répond
            rapidement.
          </p>

          <div className="mt-10 space-y-5">
            {CONTACTS.map((contact) => (
              <div key={contact.label} className="text-sm">
                <p className="text-xs uppercase tracking-wider text-muted">
                  {contact.label}
                </p>
                {contact.name && <p className="mt-1">{contact.name}</p>}
                <p className="text-accent-from">{contact.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-border text-sm text-muted leading-relaxed">
            <p>Quartier Villa Longa N°3, Mohammadia, 16058, Alger, Algérie</p>
            <p className="mt-1">Tél / Fax : 023 83 87 48</p>
          </div>
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted mb-2">
              Nom
            </label>
            <input
              required
              type="text"
              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent-from transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted mb-2">
              Email
            </label>
            <input
              required
              type="email"
              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent-from transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted mb-2">
              Message
            </label>
            <textarea
              required
              rows={4}
              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent-from transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-accent-from to-accent-to text-background text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity"
          >
            {submitted ? "Envoyé — merci" : "Envoyer le message"}
          </button>
        </form>
      </div>
    </section>
  );
}
