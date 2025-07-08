import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const products = [
  {
    name: "Whey Protein Fusion",
    description: "Blend premium para crescimento e recuperação muscular.",
    image: "https://placehold.co/400x400.png",
    aiHint: "supplement bottle"
  },
  {
    name: "Creatina Monohidratada",
    description: "Creatina pura para aumento de força e potência.",
    image: "https://placehold.co/400x400.png",
    aiHint: "supplement powder"
  },
  {
    name: "Pré-Treino Ignite",
    description: "Energia explosiva e foco para seus treinos.",
    image: "https://placehold.co/400x400.png",
    aiHint: "energy drink"
  },
  {
    name: "BCAA Amino-Boost",
    description: "Auxilia na reparação muscular e reduz a fadiga.",
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
            Nossos Produtos em Destaque
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Uma seleção criteriosa de suplementos de primeira linha para ajudá-lo a alcançar seus objetivos.
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
