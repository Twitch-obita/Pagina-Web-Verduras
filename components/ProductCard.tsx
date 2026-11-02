import Image from "next/image";
import Icon from "@/components/Icon";
import type { Product } from "@/data/products";
import { whatsappLink } from "@/lib/site";

type ProductCardProps = Omit<Product, "id">;

const clp = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

export default function ProductCard({
  name,
  price,
  unit,
  image,
  category,
  origin,
  tag,
}: ProductCardProps) {
  const quote = whatsappLink(`Hola, quiero cotizar ${name} (${unit}).`);

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-forest/10 bg-white shadow-[0_1px_2px_rgba(15,61,46,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,61,46,0.35)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <Image
          src={image}
          alt={`${name}, ${unit}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        {tag && (
          <span className="absolute left-3 top-3 rounded-full bg-lime px-3 py-1 text-xs font-semibold text-forest-dark shadow-sm">
            {tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-leaf">
          {category}
        </p>
        <h3 className="mt-1 font-display text-2xl text-forest">{name}</h3>
        <p className="mt-1 text-sm text-ink/60">
          {unit} · {origin}
        </p>

        <div className="mt-5 flex items-end justify-between gap-3 border-t border-forest/10 pt-4">
          <div>
            <p className="text-xs text-ink/50">Precio referencial</p>
            <p className="text-xl font-bold text-forest">{clp.format(price)}</p>
          </div>
          <a
            href={quote}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-forest px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-leaf focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
          >
            Cotizar
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
