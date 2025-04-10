"use server";

import { z } from "zod";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const schema = z.object({
  message: z.string().trim().min(1, { message: "Required field" }),
});

const previous_response_id = null;

export async function aiAssistant(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    message: formData.get("message"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log(validatedFields.data.message);

  //   const response = await openai.responses.create({
  //     model: "gpt-4o",
  //     input: "Write a one-sentence bedtime story about a unicorn.",
  //   });

  //   console.log(response.output_text);
}
