import { Metadata } from "next";
import { seo } from "~/constants";
import { Contact } from "~/screens/home/components/contact";


export const metadata: Metadata = seo.contact;

export default function Page() {
    return (
        <Contact />
    );
}
