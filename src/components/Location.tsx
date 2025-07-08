import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";

export function Location() {
  const address = "Parque São Domingos, São Paulo, Brazil";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Visit Our Store
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Find us in the heart of Parque São Domingos. We're ready to help you in person.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58534.5828731306!2d-46.78918115136718!3d-23.513470700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8e1e7616559%3A0x1d580f4f535818e6!2sParque%20S%C3%A3o%20Domingos%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1688581824345!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of BodyFusion SP location"
              ></iframe>
            </div>
          </Card>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-headline">BodyFusion SP</h3>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <p className="text-lg text-muted-foreground">
                Main Street, 123 <br />
                Parque São Domingos, São Paulo - SP <br />
                Brazil
              </p>
            </div>
            <Button asChild size="lg">
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="mr-2 h-5 w-5" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
