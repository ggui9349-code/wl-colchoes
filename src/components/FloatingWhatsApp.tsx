import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <a
      href={COMPANY.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-elegant transition hover:scale-110 md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp opacity-40" />
    </a>
  );
}
