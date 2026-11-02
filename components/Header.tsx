"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { site, whatsappLink } from "@/lib/site";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contacto", label: "Contacto" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
          light ? "bg-lime text-forest-dark" : "bg-forest text-lime"
        }`}
      >
        <Icon name="leaf" className="h-6 w-6" />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-xl ${light ? "text-white" : "text-forest"}`}
        >
          {site.name}
        </span>
        <span
          className={`block text-[11px] font-medium uppercase tracking-[0.14em] ${
            light ? "text-white/60" : "text-ink/55"
          }`}
        >
          {site.tagline}
        </span>
      </span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/90 backdrop-blur">
      <div className="hidden bg-forest-dark text-xs text-white/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2">
          <span className="flex items-center gap-2">
            <Icon name="clock" className="h-3.5 w-3.5" />
            {site.hours}
          </span>
          <span className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <Icon name="phone" className="h-3.5 w-3.5" />
              {site.phoneLabel}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="mail" className="h-3.5 w-3.5" />
              {site.email}
            </span>
          </span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#inicio" aria-label={`${site.name}, ir al inicio`}>
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-ink/75 transition hover:text-forest"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink("Hola, quiero cotizar productos al por mayor.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-leaf sm:inline-flex"
          >
            Solicitar cotización
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-forest/20 text-forest lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Menú móvil"
          className="border-t border-forest/10 bg-cream px-5 pb-5 lg:hidden"
        >
          <ul className="divide-y divide-forest/10">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-base font-medium text-forest"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink("Hola, quiero cotizar productos al por mayor.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center rounded-full bg-forest px-5 py-3.5 text-base font-semibold text-white"
          >
            Solicitar cotización
          </a>
        </nav>
      )}
    </header>
  );
}
