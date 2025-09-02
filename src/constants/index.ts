import { faTelegram, faGithub, faLinkedin, faWhatsapp, faInstagram, faDev, faMedium } from "@fortawesome/free-brands-svg-icons";
import { Metadata } from "next";


export const SOCIAL_LINKS = [
    { name: "Github", href: "https://github.com/mayar4ki", icon: faGithub },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/mayar-i-deeb/", icon: faLinkedin },
    { name: "Telegram", href: "https://t.me/M9321m", icon: faTelegram },
    { name: "WhatsApp", href: "https://wa.me/971568129757?text=Hey%20Mayar%20how%20you%20doing", icon: faWhatsapp },
    { name: "Instagram", href: "https://www.instagram.com/mayar__deeb/", icon: faInstagram },
    { name: "Dev.to", href: "https://dev.to/chrollo4ki", icon: faDev },
    { name: "Medium", href: "https://medium.com/@mayardeeb", icon: faMedium }
];




export const CURRENT_YEAR = new Date().getFullYear();

export const MY_NAME = "Mayar Deeb";
export const MY_EMAIL = "mayar.i.deeb@gmail.com";
export const MY_PHONE = "+971 56 812 9757";


export const seo: Record<string, Metadata> = {
    index: {
        title: "Mayar Deeb, Senior Front-end Developer in Dubai",
        description: "Senior Front-end Developer with experience building and maintaining web applications using various technologies and frameworks.",
        keywords: "Senior Front end developer, React, Nextjs, React native, Web development, Hire Mayar Deeb",
        authors: { name: "Mayar Deeb", url: "https://www.linkedin.com/in/mayar-i-deeb/" },
        openGraph: {
            title: "Mayar Deeb, Senior Front-end Developer in Dubai",
            url: "https://www.mayar-deeb.dev/",
            type: 'website',
            images: ['image/mayar-deeb.jpg'],
            description: "Senior Front-end Developer with experience building and maintaining web applications using various technologies and frameworks.",
        },
        alternates: {
            canonical: "https://mayar-deeb.dev/"
        }
    },
    contact: {
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
    }
}