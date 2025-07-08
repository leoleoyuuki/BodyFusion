
'use server';

import { answerStoreQuestions } from '@/ai/flows/answer-store-questions';
import { z } from 'zod';

const schema = z.object({
  question: z.string().min(1, { message: 'Question cannot be empty' }),
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
      error: 'Sorry, something went wrong. Please try again later.',
      question
    };
  }
}
