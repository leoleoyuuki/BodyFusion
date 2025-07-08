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
    quote: "The supplements from BodyFusion SP completely transformed my workouts. I've never felt stronger!",
    image: "https://placehold.co/100x100.png",
    aiHint: "happy customer"
  },
  {
    name: "Juliana Pereira",
    quote: "Amazing products and even better customer service. They helped me pick exactly what I needed to reach my goals.",
    image: "https://placehold.co/100x100.png",
    aiHint: "fitness success"
  },
  {
    name: "Ricardo Alves",
    quote: "I was skeptical at first, but the results speak for themselves. The best supplements in São Paulo, hands down.",
    image: "https://placehold.co/100x100.png",
    aiHint: "strong man"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Success Stories from Our Community
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Real people, real results. See how we've helped others on their fitness journey.
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
                        className="rounded-full mb-4"
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
