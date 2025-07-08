
'use server';

/**
 * @fileOverview Este arquivo define um fluxo Genkit para responder a perguntas de usuários sobre a loja.
 *
 * - answerStoreQuestions - Uma função que recebe uma pergunta do usuário e retorna uma resposta gerada por IA.
 * - AnswerStoreQuestionsInput - O tipo de entrada para a função answerStoreQuestions.
 * - AnswerStoreQuestionsOutput - O tipo de retorno para a função answerStoreQuestions.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerStoreQuestionsInputSchema = z.object({
  question: z.string().describe('A pergunta que o usuário está fazendo sobre a loja.'),
});
export type AnswerStoreQuestionsInput = z.infer<typeof AnswerStoreQuestionsInputSchema>;

const AnswerStoreQuestionsOutputSchema = z.object({
  answer: z.string().describe('A resposta gerada por IA para a pergunta do usuário.'),
});
export type AnswerStoreQuestionsOutput = z.infer<typeof AnswerStoreQuestionsOutputSchema>;

export async function answerStoreQuestions(input: AnswerStoreQuestionsInput): Promise<AnswerStoreQuestionsOutput> {
  return answerStoreQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerStoreQuestionsPrompt',
  input: {schema: AnswerStoreQuestionsInputSchema},
  output: {schema: AnswerStoreQuestionsOutputSchema},
  prompt: `Você é um assistente de IA prestativo respondendo a perguntas sobre a BodyFusion, uma loja de suplementos no Parque São Domingos, São Paulo. Use as informações a seguir para responder à pergunta.

Informações da Loja:
- Localização: Parque São Domingos, São Paulo
- Produtos: Suplementos de alta qualidade para fitness e saúde.
- Horário de Funcionamento: Segunda a Sexta, das 9h às 19h, e Sábados, das 9h às 15h. Fechamos aos Domingos.
- Opções de Entrega: Oferecemos entrega local em um raio de 10km da nossa loja. Taxas de entrega podem ser aplicadas. Atualmente não oferecemos envio para todo o país.

Pergunta: {{{question}}}

Resposta:`,
});

const answerStoreQuestionsFlow = ai.defineFlow(
  {
    name: 'answerStoreQuestionsFlow',
    inputSchema: AnswerStoreQuestionsInputSchema,
    outputSchema: AnswerStoreQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
