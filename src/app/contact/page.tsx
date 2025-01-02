import { Metadata } from "next";
import { ContactIndexScreen } from "~/screens/contact/contact-index-screen";
import Head from 'next/head';

export const metadata: Metadata = {
    title: "Contact - Mayar Deeb, Senior Front-end Developer in Dubai",
    description: "Send me a message Whether you’re interested in my services, get in touch with me.",
    openGraph: {
        url: "https://mayar-deeb.dev/contact"
    }
};

export default function Page() {
    return (
        <>
            <Head>
                <link rel="canonical" href={metadata.openGraph?.url as string} />
                <meta property="og:url" content={metadata.openGraph?.url as string} />
                <meta property="og:title" content={metadata.title as string} />
                <meta property="og:description" content={metadata.description as string} />
            </Head>
            <ContactIndexScreen />
        </>
    );
}
