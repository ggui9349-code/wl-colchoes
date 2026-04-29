import { Instagram, Mail, MessageCircle, MapPin, Clock, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gradient-luxury text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-3 md:px-8">
        <div className="space-y-4">
          <h4 className="text-lg font-bold">{COMPANY.name}</h4>
          <p className="text-sm opacity-80">{COMPANY.slogan}</p>
          <div className="space-y-2 text-sm opacity-90">
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {COMPANY.contact.location}</p>
            <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> {COMPANY.contact.hours}</p>
            <a href={`tel:${COMPANY.contact.phone}`} className="flex items-center gap-2 font-semibold text-gold hover:underline">
              <Phone className="h-4 w-4" /> {COMPANY.contact.phoneShort}
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-bold">Links Rápidos</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["#hero", "Início"],
              ["#solution", "Serviços"],
              ["#how-it-works", "Como Funciona"],
              ["#about", "Sobre Nós"],
              ["#guarantee", "Garantia"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="opacity-80 transition hover:opacity-100">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-bold">Conecte-se</h4>
          <div className="flex gap-3">
            <a href={COMPANY.contact.whatsapp} target="_blank" rel="noopener noreferrer"
               className="grid h-11 w-11 place-items-center rounded-full bg-whatsapp text-white transition hover:scale-110" title="WhatsApp">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href={COMPANY.contact.instagram} target="_blank" rel="noopener noreferrer"
               className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-tr from-copper via-gold to-primary-light text-white transition hover:scale-110" title="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href={`mailto:${COMPANY.contact.email}`}
               className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:scale-110" title="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm opacity-80">{COMPANY.contact.email}</p>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-sm opacity-70">
        <p>© {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.</p>
        <p className="mt-1">Reforma • Fabricação • Colchões de Luxo</p>
      </div>
    </footer>
  );
}
