/** Datos de contacto y marca. Cambiar aquí para actualizar todo el sitio. */
export const site = {
  name: "Verdes del Valle",
  tagline: "Importadora & Distribuidora",
  /** Formato internacional, sin "+" ni espacios (número de prueba). */
  whatsapp: "56912345678",
  phoneLabel: "+56 9 1234 5678",
  email: "ventas@verdesdelvalle.cl",
  address: "Av. Lo Espejo 1234, Central de Abastos, Santiago",
  hours: "Lun a Sáb · 05:00 – 18:00",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
