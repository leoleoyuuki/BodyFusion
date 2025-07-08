'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export function Contact() {
  const [message, setMessage] = useState('');
  const phoneNumber = '5511999999999';
  const preFilledText = "Olá, gostaria de saber mais sobre os produtos da BodyFusion.";

  const handleSendMessage = () => {
    const fullMessage = message ? `${preFilledText}\n\nMinha mensagem: ${message}` : preFilledText;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-12 md:py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Entre em Contato
          </h2>
          <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl mt-4">
            Estamos aqui para ajudar. Envie-nos uma mensagem no WhatsApp para qualquer dúvida.
          </p>
        </div>
        <Card className="max-w-2xl mx-auto bg-card text-card-foreground">
          <CardHeader>
            <CardTitle>Enviar Mensagem no WhatsApp</CardTitle>
            <CardDescription>Adicione uma mensagem pessoal abaixo (opcional) e entraremos em contato em breve!</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Sua mensagem opcional..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </CardContent>
          <CardFooter>
            <Button onClick={handleSendMessage} className='w-full' size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Enviar via WhatsApp
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
