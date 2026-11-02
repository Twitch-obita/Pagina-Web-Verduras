import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Header, { Logo } from "@/components/Header";
import Icon, { StarIcon, type IconName } from "@/components/Icon";
import ProductCatalog from "@/components/ProductCatalog";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/products";
import { site, whatsappLink } from "@/lib/site";

interface Feature {
  icon: IconName;
  title: string;
  text: string;
}

interface Step {
  icon: IconName;
  title: string;
  text: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const heroStats = [
  { value: "+15", label: "años en el rubro" },
  { value: "+200", label: "clientes activos" },
  { value: "48 h", label: "del campo a tu bodega" },
] as const;

const features: readonly Feature[] = [
  {
    icon: "thermometer",
    title: "Cadena de frío",
    text: "Camiones refrigerados y bodegas a temperatura controlada, de origen a destino.",
  },
  {
    icon: "shield",
    title: "Calidad certificada",
    text: "Proveedores auditados y control de calidad en cada lote que recibimos.",
  },
  {
    icon: "truck",
    title: "Despacho puntual",
    text: "Rutas diarias y ventanas horarias acordadas con tu negocio.",
  },
  {
    icon: "leaf",
    title: "Trazabilidad total",
    text: "Sabes de dónde viene cada producto y cuándo fue cosechado.",
  },
];

const values = [
  "Contrato de abastecimiento con precio y volumen acordado",
  "Ejecutivo comercial dedicado a tu cuenta",
  "Reposición inmediata ante cualquier reclamo de calidad",
] as const;

const steps: readonly Step[] = [
  {
    icon: "chat",
    title: "Cotiza",
    text: "Cuéntanos qué productos y volúmenes necesitas. Respondemos en menos de 2 horas.",
  },
  {
    icon: "search",
    title: "Confirmamos",
    text: "Validamos stock, calidad y precio final según tu frecuencia de compra.",
  },
  {
    icon: "package",
    title: "Preparamos",
    text: "Seleccionamos y embalamos tu pedido con control de calidad.",
  },
  {
    icon: "truck",
    title: "Entregamos",
    text: "Despachamos en camión refrigerado directo a tu local o bodega.",
  },
];

const testimonials: readonly Testimonial[] = [
  {
    quote:
      "Desde que trabajamos con ellos no hemos tenido un solo quiebre de stock. La verdura llega fresca y a la hora acordada.",
    name: "Marcela Rojas",
    role: "Dueña, restaurante La Huerta",
  },
  {
    quote:
      "El trato directo y la reposición inmediata marcan la diferencia. Es un proveedor en el que realmente se puede confiar.",
    name: "Andrés Fuentes",
    role: "Jefe de compras, supermercado Mercado Sur",
  },
  {
    quote:
      "Precios estables durante todo el año y una calidad muy pareja. Nos permite planificar mejor cada temporada.",
    name: "Camila Torres",
    role: "Administradora, Feria Los Aromos",
  },
];

const footerLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contacto", label: "Contacto" },
] as const;

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-lime/30 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-24 lg:pt-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 px-4 py-1.5 text-sm font-medium text-forest">
                <span className="h-2 w-2 rounded-full bg-leaf" aria-hidden="true" />
                Importación directa · Venta mayorista
              </p>
              <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] tracking-tight text-forest sm:text-6xl lg:text-7xl">
                Verdura fresca para{" "}
                <span className="italic text-leaf">abastecer</span> tu negocio,
                todos los días.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-ink/70">
                Distribuimos hortalizas seleccionadas a restaurantes, ferias y
                supermercados, con cadena de frío, precios estables y despacho
                puntual.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#catalogo"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-8 py-4 text-base font-semibold text-white shadow-lg shadow-forest/20 transition hover:bg-leaf focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                >
                  Ver Catálogo
                  <Icon name="arrow" className="h-5 w-5" />
                </a>
                <a
                  href={whatsappLink("Hola, quiero cotizar productos al por mayor.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-forest/25 bg-white/60 px-8 py-4 text-base font-semibold text-forest transition hover:border-forest hover:bg-white"
                >
                  Hablar con un ejecutivo
                </a>
              </div>

              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-forest/10 pt-8">
                {heroStats.map(({ value, label }) => (
                  <div key={label}>
                    <dd className="font-display text-3xl text-forest sm:text-4xl">
                      {value}
                    </dd>
                    <dt className="mt-1 text-xs leading-snug text-ink/60 sm:text-sm">
                      {label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-sand shadow-2xl shadow-forest/25">
                <Image
                  src="/hero-main.webp"
                  alt="Cajas de tomates frescos listas para despacho"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -left-2 bottom-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-left-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime text-forest-dark">
                  <Icon name="truck" className="h-6 w-6" />
                </span>
                <span className="text-sm leading-tight">
                  <strong className="block text-forest">Despacho en 48 h</strong>
                  <span className="text-ink/60">a todo Santiago</span>
                </span>
              </div>
              <div className="absolute -right-2 top-16 flex items-center gap-3 rounded-2xl bg-forest px-4 py-3 text-white shadow-xl sm:-right-6">
                <Icon name="shield" className="h-6 w-6 text-lime" />
                <span className="text-sm font-medium leading-tight">
                  Calidad
                  <br />
                  certificada
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Ventajas */}
        <section aria-label="Ventajas" className="border-y border-forest/10 bg-white">
          <ul className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
            {features.map(({ icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest/5 text-forest">
                  <Icon name={icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-forest">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink/65">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Quiénes somos */}
        <section id="nosotros">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand">
                <Image
                  src="/nosotros.webp"
                  alt="Verduras de hoja, zanahorias y cebollas recién cosechadas"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-4 rounded-2xl bg-forest px-6 py-5 text-white shadow-xl sm:-right-6">
                <p className="font-display text-4xl text-lime">15+</p>
                <p className="text-sm text-white/80">años de experiencia</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-leaf">
                Quiénes somos
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-forest sm:text-5xl">
                Un socio comercial, no solo un proveedor.
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink/70">
                Somos una importadora y distribuidora con más de 15 años
                conectando a productores con el comercio. Trabajamos con
                proveedores certificados, cuidamos la cadena de frío y
                entregamos en tiempo y forma.
              </p>
              <p className="mt-4 leading-7 text-ink/70">
                Nuestro compromiso es simple: producto fresco, trato directo y
                una relación de largo plazo con cada cliente.
              </p>
              <ul className="mt-8 space-y-3">
                {values.map((value) => (
                  <li key={value} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-forest-dark">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span className="text-ink/80">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Catálogo */}
        <section id="catalogo" className="bg-sand/50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-leaf">
                  Catálogo
                </p>
                <h2 className="mt-3 font-display text-4xl leading-tight text-forest sm:text-5xl">
                  Productos de temporada, en formato mayorista.
                </h2>
              </div>
              <p className="max-w-sm text-ink/65">
                Precios referenciales con IVA incluido. Los valores finales
                dependen del volumen y la frecuencia de compra.
              </p>
            </div>
            <ProductCatalog products={products} />
          </div>
        </section>

        {/* Proceso */}
        <section id="proceso" className="bg-forest text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">
                Cómo trabajamos
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                De tu cotización a tu bodega en cuatro pasos.
              </h2>
            </div>
            <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ icon, title, text }, index) => (
                <li
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-forest-dark">
                      <Icon name={icon} className="h-6 w-6" />
                    </span>
                    <span className="font-display text-5xl text-white/15">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Clientes */}
        <section id="clientes">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-leaf">
                Clientes
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-forest sm:text-5xl">
                Negocios que confían en nosotros.
              </h2>
            </div>
            <ul className="mt-14 grid gap-6 lg:grid-cols-3">
              {testimonials.map(({ quote, name, role }) => (
                <li
                  key={name}
                  className="flex flex-col rounded-3xl border border-forest/10 bg-white p-7"
                >
                  <div className="flex gap-1 text-amber-500" aria-label="5 de 5 estrellas">
                    {Array.from({ length: 5 }, (_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 leading-7 text-ink/80">
                    “{quote}”
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3 border-t border-forest/10 pt-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest font-semibold text-lime">
                      {name.charAt(0)}
                    </span>
                    <span className="text-sm leading-tight">
                      <strong className="block text-forest">{name}</strong>
                      <span className="text-ink/60">{role}</span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="relative isolate overflow-hidden bg-forest-dark">
          <Image
            src="/hero.webp"
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover opacity-25"
          />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
            <div className="text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">
                Contacto
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                Hablemos de tu próximo pedido.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-white/75">
                Cotiza sin compromiso. Un ejecutivo comercial te contactará con
                una propuesta a tu medida.
              </p>
              <ul className="mt-10 space-y-5">
                {(
                  [
                    { icon: "phone", text: site.phoneLabel },
                    { icon: "mail", text: site.email },
                    { icon: "pin", text: site.address },
                    { icon: "clock", text: site.hours },
                  ] as const
                ).map(({ icon, text }) => (
                  <li key={icon} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lime">
                      <Icon name={icon} className="h-5 w-5" />
                    </span>
                    <span className="text-white/90">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-forest-dark text-white/70">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-6">
              Importación y distribución mayorista de verduras frescas para
              restaurantes, ferias y supermercados.
            </p>
          </div>
          <nav aria-label="Pie de página">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="transition hover:text-lime">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>{site.phoneLabel}</li>
              <li>{site.email}</li>
              <li>{site.address}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">
          © {site.name}. Todos los derechos reservados.
        </div>
      </footer>

      <WhatsAppButton />
    </>
  );
}
