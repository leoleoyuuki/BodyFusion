import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

export function Promotions() {
  const ifoodUrl = "https://www.ifood.com.br/delivery/sao-paulo-sp/body-fusion---parque-sao-domingos-city-america/a8b3bc5c-c751-410b-b671-91e8a9449302?utm_medium=share&fbclid=PAZXh0bgNhZW0CMTEAAaeGZR1MxZNFWLTdCb48TSHzlLs2QEY5EsCezwGIVxNCSzI558xVB302-2ekVg_aem_1yy17sr0xVXeJEAq0oKHTw";

  return (
    <section id="promotions" className="py-12 md:py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Oferta Especial da Semana!
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">
              Ganhe 20% de desconto em todos os suplementos pré-treino. Potencialize seus treinos e economize. Oferta por tempo limitado!
            </p>
          </div>
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold text-lg px-8 py-6">
              <a href={ifoodUrl} target="_blank" rel="noopener noreferrer">
                <Gift className="mr-2 h-5 w-5" />
                Aproveitar Oferta
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
