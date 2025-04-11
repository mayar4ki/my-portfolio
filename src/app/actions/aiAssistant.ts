"use server";

import { z } from "zod";
import OpenAI from "openai";
import { gptOptions } from "~/constants/gptOptions";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const schema = z.object({
  previous_response_id: z.string().nullable(),
  message: z.string().trim().min(1, { message: "Required field" }),
});

export async function aiAssistant(formData: FormData) {
  const validatedFields = schema.safeParse({
    previous_response_id: formData.get("previous_response_id"),
    message: formData.get("message"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const response = await openai.responses.create({
    ...gptOptions,

    input: validatedFields.data.previous_response_id
      ? validatedFields.data.message
      : [
          ...(gptOptions.input as any),
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text: validatedFields.data.message,
              },
            ],
          },
        ],

    previous_response_id: validatedFields.data.previous_response_id,
  });

  if (response.error) {
    throw new Error(`${response.error.code}: ${response.error.message}`);
  }

  return { id: response.id, message: response.output_text };
}
