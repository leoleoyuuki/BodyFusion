import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";

export function Location() {
  const address = "Av. do Anastácio, 955 - Parque Sao Domingos, São Paulo - SP, 05119-000";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Visite Nossa Loja
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Encontre-nos no coração do Parque São Domingos. Estamos prontos para te ajudar pessoalmente.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.8999174062405!2d-46.734323499999995!3d-23.500114099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef91a7fb9df49%3A0xd71897491468631b!2sBody%20Fusion%20Suplementos%20-%20Parque%20S%C3%A3o%20Domingos!5e0!3m2!1spt-BR!2sbr!4v1752075975777!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da localização da BodyFusion Suplementos"
              ></iframe>
            </div>
          </Card>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-headline">BodyFusion</h3>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <p className="text-lg text-muted-foreground">
                Av. do Anastácio, 955 <br />
                Parque Sao Domingos, São Paulo - SP <br />
                05119-000
              </p>
            </div>
            <Button asChild size="lg">
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="mr-2 h-5 w-5" />
                Obter Direções
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
