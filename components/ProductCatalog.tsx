"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { categories, type Category, type Product } from "@/data/products";

type Filter = Category | "Todos";

interface ProductCatalogProps {
  products: readonly Product[];
}

export default function ProductCatalog({ products }: ProductCatalogProps) {
  const [active, setActive] = useState<Filter>("Todos");
  const filters: readonly Filter[] = ["Todos", ...categories];

  const visible =
    active === "Todos"
      ? products
      : products.filter((product) => product.category === active);

  return (
    <div>
      <div
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        role="group"
        aria-label="Filtrar por categoría"
      >
        {filters.map((filter) => {
          const selected = filter === active;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(filter)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest ${
                selected
                  ? "border-forest bg-forest text-white"
                  : "border-forest/20 bg-white text-forest hover:border-forest/50"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            unit={product.unit}
            image={product.image}
            category={product.category}
            origin={product.origin}
            tag={product.tag}
          />
        ))}
      </div>
    </div>
  );
}
