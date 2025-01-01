'use server'

import { z } from 'zod'
import { Resend } from 'resend';
import { EmailTemplate } from '~/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    message: z.string(),
})

export async function contactMe(formData: FormData) {
    const validatedFields = schema.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        message: formData.get('message'),
    })

    // Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { error, data } = await resend.batch.send([
        {
            from: 'Acme <no-replay@mayar-deeb.dev>',
            to: ['mayar.i.deeb@gmail.com'],
            subject: `Website Form( ${formData.get('firstName')?.toString()}--${formData.get('lastName')?.toString()}--${formData.get('email')?.toString()} )`,
            html: ` ${formData.get('message')?.toString()}`,
        },
        {
            from: 'Acme <no-replay@mayar-deeb.dev>',
            to: [`${formData.get('email')?.toString()}`],
            subject: 'Thank You for Reaching Out',
            react: EmailTemplate({ firstName: formData.get('firstName') }) as React.ReactElement
        },
    ]);

    if (error) {
        throw new Error(`${error.name}: ${error.message}`)
    }

}