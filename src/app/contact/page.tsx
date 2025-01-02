import { Metadata } from "next";
import { ContactIndexScreen } from "~/screens/contact/contact-index-screen";

export const metadata: Metadata = {
    title: "Contact - Mayar Deeb, Senior Front-end Developer in Dubai",
    description: "Send me a message Whether you’re interested in my services, get in touch with me.",
    openGraph: {
        url: "https://mayar-deeb.dev/contact",
        title: "Contact - Mayar Deeb, Senior Front-end Developer in Dubai",
        description: "Send me a message Whether you’re interested in my services, get in touch with me.",
    },
    alternates: {
        canonical: "https://mayar-deeb.dev/contact"
    }
};

export default function Page() {
    return (
        <ContactIndexScreen />
    );
}
