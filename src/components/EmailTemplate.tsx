

export interface EmailTemplateProps {
    firstName: string;
}

export const EmailTemplate = ({ firstName }: EmailTemplateProps) => {

    return <div>
        Hi {firstName?.toString()}<br />
        Thank you for your message!<br />
        I’m currently unavailable at the moment, but I’ll get back to you as soon as I can.<br />
        Your patience is appreciated, and I look forward to connecting with you soon.<br /><br />
        Best regards,<br /><br />
        Mayar Deeb<br />
        +971 56 812 9757<br />
    </div>
}