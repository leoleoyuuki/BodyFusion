'use client';

import { useFormStatus } from 'react-dom';
import { askAI } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useActionState, useEffect, useRef, useState } from 'react';
import { MessageSquare, Loader2 } from 'lucide-react';

const initialState = {
  question: '',
  answer: '',
  error: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <MessageSquare className="mr-2 h-4 w-4" />}
      Perguntar à IA
    </Button>
  );
}

export function Faq() {
  const [state, formAction] = useActionState(askAI, initialState);
  const [accordionValue, setAccordionValue] = useState<string | undefined>();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.answer) {
      setAccordionValue('item-1');
      formRef.current?.reset();
    }
  }, [state.answer]);

  return (
    <section id="faq" className="py-12 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Perguntas Frequentes
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Tem alguma dúvida? Pergunte ao nosso assistente de IA para uma resposta rápida sobre nossa loja e produtos.
          </p>
        </div>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Faça uma Pergunta</CardTitle>
            <CardDescription>Obtenha respostas instantâneas para suas perguntas.</CardDescription>
          </CardHeader>
          <form ref={formRef} action={formAction}>
            <CardContent>
              <Input
                name="question"
                placeholder="ex: Qual o horário de funcionamento?"
                required
              />
              {state.error && <p className="text-sm text-destructive mt-2">{state.error}</p>}
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>

          {state.answer && (
            <div className="px-6 pb-6">
              <Accordion type="single" collapsible value={accordionValue} onValueChange={setAccordionValue} className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-headline">{state.question}</AccordionTrigger>
                  <AccordionContent className="text-base">
                    {state.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
