import { whatsappLink } from "@/lib/site";

interface WhatsAppButtonProps {
  message?: string;
}

export default function WhatsAppButton({
  message = "Hola, me gustaría cotizar productos al por mayor.",
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-white/70 transition hover:scale-110 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 motion-reduce:hidden" />
      <svg viewBox="0 0 32 32" className="h-8 w-8 fill-current" aria-hidden="true">
        <path d="M16.003 3C8.83 3 3 8.827 3 15.997c0 2.292.6 4.53 1.737 6.5L3 29l6.667-1.713a12.97 12.97 0 0 0 6.336 1.62h.005C23.17 28.907 29 23.08 29 15.91 29 8.827 23.17 3 16.003 3zm0 23.7h-.004a10.77 10.77 0 0 1-5.49-1.503l-.394-.234-3.956 1.017 1.056-3.857-.257-.396a10.7 10.7 0 0 1-1.65-5.73c0-5.94 4.84-10.775 10.79-10.775 2.88 0 5.587 1.12 7.622 3.158a10.71 10.71 0 0 1 3.157 7.62c-.003 5.942-4.84 10.7-10.774 10.7zm5.91-8.07c-.324-.162-1.917-.946-2.214-1.054-.297-.108-.513-.162-.73.162-.216.324-.837 1.054-1.026 1.27-.19.216-.378.243-.702.08-.324-.162-1.37-.505-2.608-1.61-.964-.86-1.614-1.92-1.803-2.245-.19-.324-.02-.5.142-.66.146-.145.324-.378.486-.567.162-.19.216-.324.324-.54.108-.216.054-.405-.027-.567-.08-.162-.73-1.76-1-2.41-.264-.633-.532-.547-.73-.557l-.62-.01c-.216 0-.567.08-.864.405-.297.324-1.134 1.108-1.134 2.7 0 1.594 1.16 3.135 1.322 3.35.162.216 2.283 3.487 5.532 4.89.773.334 1.376.533 1.846.683.776.247 1.482.212 2.04.128.622-.093 1.917-.784 2.187-1.54.27-.757.27-1.405.19-1.54-.08-.135-.297-.216-.62-.378z" />
      </svg>
    </a>
  );
}
