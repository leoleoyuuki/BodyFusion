import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Person working out"
        data-ai-hint="fitness workout"
        fill
        className="object-cover"
        priority
      />
      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Forge Your Ultimate Physique
          </h1>
          <p className="mt-6 text-lg leading-8 md:text-xl">
            Welcome to BodyFusion SP. We are dedicated to providing the highest quality supplements to fuel your fitness journey. Strength, energy, and results start here.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="font-bold">
              <a href="#products">Explore Products</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black font-bold">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
