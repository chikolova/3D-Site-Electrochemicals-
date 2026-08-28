"use client";

import { useState } from "react";

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
            Let&apos;s formulate something.
          </h2>
          <p className="text-muted leading-relaxed max-w-sm">
            Tell us about your cell chemistry, target application, or volume
            requirements — our materials team responds within one business
            day.
          </p>
          <div className="mt-10 space-y-2 text-sm text-muted">
            <p>hello@voltaramaterials.com</p>
            <p>+1 (555) 019-0042</p>
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
              Name
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
            {submitted ? "Sent — thank you" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
