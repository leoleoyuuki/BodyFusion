import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Promotions } from "@/components/Promotions";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductShowcase />
        <Promotions />
        <Testimonials />
        <Location />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
