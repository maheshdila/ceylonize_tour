'use server';

/**
 * @fileOverview Image suggestion flow based on the location the user navigates to.
 *
 * - suggestImage - A function that suggests an image based on the location.
 * - SuggestImageInput - The input type for the suggestImage function.
 * - SuggestImageOutput - The return type for the suggestImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestImageInputSchema = z.object({
  location: z.string().describe('The location the user navigates to.'),
});

export type SuggestImageInput = z.infer<typeof SuggestImageInputSchema>;

const SuggestImageOutputSchema = z.object({
  imageUrl: z.string().describe('The URL of the suggested image.'),
});

export type SuggestImageOutput = z.infer<typeof SuggestImageOutputSchema>;

export async function suggestImage(input: SuggestImageInput): Promise<SuggestImageOutput> {
  return suggestImageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestImagePrompt',
  input: {schema: SuggestImageInputSchema},
  output: {schema: SuggestImageOutputSchema},
  prompt: `You are an AI assistant designed to suggest relevant images based on the location the user navigates to.

  Suggest an image URL that is relevant to the following location: {{{location}}}
  The image should be visually appealing and enhance the user's browsing experience.
  The URL should be a direct link to the image.
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
    ],
  },
});

const suggestImageFlow = ai.defineFlow(
  {
    name: 'suggestImageFlow',
    inputSchema: SuggestImageInputSchema,
    outputSchema: SuggestImageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
