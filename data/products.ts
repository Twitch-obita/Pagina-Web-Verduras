export const categories = [
  "Hortalizas de fruto",
  "Raíces y bulbos",
  "Hojas y crucíferas",
] as const;

export type Category = (typeof categories)[number];

export interface Product {
  id: number;
  name: string;
  /** Precio referencial en pesos chilenos (CLP), IVA incluido. */
  price: number;
  /** Formato de venta mayorista, ej. "Caja 18 kg". */
  unit: string;
  /** Ruta estática dentro de /public. */
  image: string;
  category: Category;
  origin: string;
  tag?: "Más vendido" | "Temporada";
}

export const products: readonly Product[] = [
  {
    id: 1,
    name: "Tomate Larga Vida",
    price: 14900,
    unit: "Caja 18 kg",
    image: "/tomate.webp",
    category: "Hortalizas de fruto",
    origin: "Valle de Quillota",
    tag: "Más vendido",
  },
  {
    id: 2,
    name: "Malla de Cebollas",
    price: 9500,
    unit: "Malla 20 kg",
    image: "/cebolla.webp",
    category: "Raíces y bulbos",
    origin: "Zona central",
  },
  {
    id: 3,
    name: "Pimentón Tricolor",
    price: 18900,
    unit: "Caja 10 kg",
    image: "/pimenton.webp",
    category: "Hortalizas de fruto",
    origin: "Importación directa",
    tag: "Temporada",
  },
  {
    id: 4,
    name: "Coliflor Premium",
    price: 11200,
    unit: "Caja 12 un.",
    image: "/coliflor.webp",
    category: "Hojas y crucíferas",
    origin: "Región Metropolitana",
  },
  {
    id: 5,
    name: "Zanahoria Fresca",
    price: 8700,
    unit: "Saco 25 kg",
    image: "/zanahoria.webp",
    category: "Raíces y bulbos",
    origin: "Valle de Aconcagua",
    tag: "Más vendido",
  },
  {
    id: 6,
    name: "Repollo Verde",
    price: 7800,
    unit: "Caja 15 kg",
    image: "/repollo.webp",
    category: "Hojas y crucíferas",
    origin: "Región Metropolitana",
  },
];
