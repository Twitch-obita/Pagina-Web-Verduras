"use client";

import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

interface FormState {
  name: string;
  company: string;
  message: string;
}

const initial: FormState = { name: "", company: "", message: "" };

const fieldClass =
  "w-full rounded-xl border border-forest/20 bg-white px-4 py-3 text-base text-ink placeholder:text-ink/40 focus:border-forest focus:outline-2 focus:outline-offset-0 focus:outline-lime";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);

  const update =
    (key: keyof FormState) =>
    (event: { target: { value: string } }) =>
      setForm((prev) => ({ ...prev, [key]: event.target.value }));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = [
      `Hola, soy ${form.name}${form.company ? ` de ${form.company}` : ""}.`,
      form.message,
    ].join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setForm(initial);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl bg-white p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] sm:p-8"
    >
      <h3 className="font-display text-2xl text-forest">Solicita tu cotización</h3>
      <p className="text-sm text-ink/60">
        Cuéntanos qué necesitas y te respondemos por WhatsApp.
      </p>

      <div>
        <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-forest">
          Nombre
        </label>
        <input
          id="nombre"
          required
          autoComplete="name"
          value={form.name}
          onChange={update("name")}
          placeholder="Tu nombre"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="empresa" className="mb-1.5 block text-sm font-medium text-forest">
          Empresa o negocio <span className="font-normal text-ink/50">(opcional)</span>
        </label>
        <input
          id="empresa"
          autoComplete="organization"
          value={form.company}
          onChange={update("company")}
          placeholder="Restaurante, feria, supermercado…"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-forest">
          ¿Qué productos necesitas?
        </label>
        <textarea
          id="mensaje"
          required
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder="Ej: 20 cajas de tomate y 10 mallas de cebolla, entrega semanal."
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-forest px-6 py-3.5 text-base font-semibold text-white transition hover:bg-leaf focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
      >
        Enviar por WhatsApp
      </button>
    </form>
  );
}
