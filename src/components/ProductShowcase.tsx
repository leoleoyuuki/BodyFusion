import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const products = [
  {
    name: "Whey Protein Fusion",
    description: "Premium blend for muscle growth and recovery.",
    image: "https://placehold.co/400x400.png",
    aiHint: "supplement bottle"
  },
  {
    name: "Creatine Monohydrate",
    description: "Pure creatine for increased strength and power.",
    image: "https://placehold.co/400x400.png",
    aiHint: "supplement powder"
  },
  {
    name: "Pre-Workout Ignite",
    description: "Explosive energy and focus for your workouts.",
    image: "https://placehold.co/400x400.png",
    aiHint: "energy drink"
  },
  {
    name: "BCAA Amino-Boost",
    description: "Supports muscle repair and reduces fatigue.",
    image: "https://placehold.co/400x400.png",
    aiHint: "supplement pills"
  },
];

export function ProductShowcase() {
  return (
    <section id="products" className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Our Featured Products
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            A curated selection of top-tier supplements to help you achieve your goals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  data-ai-hint={product.aiHint}
                  width={400}
                  height={400}
                  className="object-cover w-full h-auto aspect-square"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
                <CardDescription className="mt-2">{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
