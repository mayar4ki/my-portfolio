'use server'

import { z } from 'zod'
import { Resend } from 'resend';
import { EmailTemplate } from '~/components/EmailTemplate';
import { MY_EMAIL } from '~/constants';

const resend = new Resend(process.env.RE_SEND_API_KEY);

const schema = z.object({
    firstName: z.string().trim().min(1, { message: "Required field" }),
    lastName: z.string().trim().min(1, { message: "Required field" }),
    email: z.string().email(),
    message: z.string().trim().min(1, { message: "Required field" }),
})

export async function contactMe(prevState: any, formData: FormData) {

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
            from: 'Website Form <no-replay@mayar-deeb.dev>',
            to: [MY_EMAIL],
            subject: `${validatedFields.data.firstName}-${validatedFields.data.lastName}::${validatedFields.data.email}`,
            html: ` ${validatedFields.data.message}`,
        },
        {
            from: 'Mayar Deeb <no-replay@mayar-deeb.dev>',
            to: [validatedFields.data.email],
            subject: 'Thank You for Reaching Out',
            react: EmailTemplate({ firstName: validatedFields.data.firstName }) as React.ReactElement
        },
    ]);

    if (error) {
        throw new Error(`${error.name}: ${error.message}`)
    }

}