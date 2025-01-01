

export interface EmailTemplateProps {
    firstName: FormDataEntryValue | null;
}

export const EmailTemplate = ({ firstName }: EmailTemplateProps) => {

    return <div>
        Hi {firstName?.toString()}<br />
        Thank you for your message! I appreciate you getting in touch. I’m currently unavailable at the moment, but I’ll get back to you as soon as I can.
        Your patience is appreciated, and I look forward to connecting with you soon.<br />
        Best regards,<br />
        Mayar Deeb<br />
        +971 56 812 9757
    </div>
}