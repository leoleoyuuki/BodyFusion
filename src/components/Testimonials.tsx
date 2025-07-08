import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Carlos Silva",
    quote: "Os suplementos da BodyFusion transformaram completamente meus treinos. Nunca me senti tão forte!",
    image: "/images/1.jpg",
    aiHint: "happy customer"
  },
  {
    name: "Juliana Pereira",
    quote: "Produtos incríveis e um atendimento ao cliente ainda melhor. Eles me ajudaram a escolher exatamente o que eu precisava para alcançar meus objetivos.",
    image: "/images/2.jpg",
    aiHint: "fitness success"
  },
  {
    name: "Ricardo Alves",
    quote: "No início eu estava cético, mas os resultados falam por si. Os melhores suplementos, sem dúvida.",
    image: "/images/3.jpg",
    aiHint: "strong man"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Histórias de Sucesso da Nossa Comunidade
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Pessoas reais, resultados reais. Veja como ajudamos outras pessoas em sua jornada fitness.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        data-ai-hint={testimonial.aiHint}
                        width={80}
                        height={80}
                        className="rounded-full w-20 h-20 mb-4"
                      />
                      <p className="text-lg font-semibold font-headline">{testimonial.name}</p>
                      <blockquote className="mt-2 text-muted-foreground italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
