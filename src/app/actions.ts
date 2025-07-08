
'use server';

import { answerStoreQuestions } from '@/ai/flows/answer-store-questions';
import { z } from 'zod';

const schema = z.object({
  question: z.string().min(1, { message: 'A pergunta não pode estar vazia' }),
});

interface IState {
  answer?: string;
  error?: string;
  question?: string;
}

export async function askAI(prevState: IState, formData: FormData): Promise<IState> {
  const question = formData.get('question') as string;
  const validatedFields = schema.safeParse({
    question,
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.question?.[0],
      question
    };
  }

  try {
    const result = await answerStoreQuestions({ question: validatedFields.data.question });
    return { answer: result.answer, question };
  } catch (e) {
    return { 
      error: 'Desculpe, algo deu errado. Por favor, tente novamente mais tarde.',
      question
    };
  }
}
