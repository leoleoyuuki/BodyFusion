import { BodyFusionLogo } from "./BodyFusionLogo";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#products", label: "Produtos" },
  { href: "#promotions", label: "Promoções" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#location", label: "Localização" },
  { href: "#contact", label: "Contato" },
  { href: "#faq", label: "Dúvidas" },
];

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <BodyFusionLogo />
            <p className="text-sm text-muted-foreground">
              Sua fonte #1 de suplementos fitness em São Paulo.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-headline">Links Rápidos</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-headline">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Termos de Serviço
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-headline">Siga-nos</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Button key={social.label} variant="ghost" size="icon" asChild>
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BodyFusion. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
