
'use server';

/**
 * @fileOverview This file defines a Genkit flow for answering user questions about the store.
 *
 * - answerStoreQuestions - A function that takes a user question and returns an AI-generated answer.
 * - AnswerStoreQuestionsInput - The input type for the answerStoreQuestions function.
 * - AnswerStoreQuestionsOutput - The return type for the answerStoreQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerStoreQuestionsInputSchema = z.object({
  question: z.string().describe('The question the user is asking about the store.'),
});
export type AnswerStoreQuestionsInput = z.infer<typeof AnswerStoreQuestionsInputSchema>;

const AnswerStoreQuestionsOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the user question.'),
});
export type AnswerStoreQuestionsOutput = z.infer<typeof AnswerStoreQuestionsOutputSchema>;

export async function answerStoreQuestions(input: AnswerStoreQuestionsInput): Promise<AnswerStoreQuestionsOutput> {
  return answerStoreQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerStoreQuestionsPrompt',
  input: {schema: AnswerStoreQuestionsInputSchema},
  output: {schema: AnswerStoreQuestionsOutputSchema},
  prompt: `You are a helpful AI assistant answering questions about BodyFusion SP, a supplement store in Parque São Domingos, São Paulo. Use the following information to answer the question.

Store Information:
- Location: Parque São Domingos, São Paulo
- Products: High-quality supplements for fitness and health.
- Store Hours: Monday to Friday from 9 AM to 7 PM, and Saturdays from 9 AM to 3 PM. We are closed on Sundays.
- Delivery Options: We offer local delivery within a 10km radius of our store. Delivery fees may apply. We do not currently offer nationwide shipping.

Question: {{{question}}}

Answer:`,
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
