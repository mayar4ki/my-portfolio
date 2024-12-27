import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "~/providers/theme-provider";
import { Header } from "./layout/header";
import { Footer } from "./layout/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const font = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
    display: "swap",
});

const font2 = Roboto_Mono({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

export const HomeLayoutMetaData: Metadata = {
    title: "Mayar Deeb",
    description: "Senior Front-end Developer with experience building and maintaining web applications using various technologies and frameworks.",
    keywords: "Senior Front end developer, React, Nextjs, React native, Web development, Hire Mayar Deeb",
    authors: { name: "Mayar Deeb", url: "https://www.linkedin.com/in/mayar-i-deeb/" },
};

export const HomeLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <html lang="en">
            <head>
                <link rel="website icon" href="/favicon.ico" type="image/png" />

                <meta property="og:title" content={HomeLayoutMetaData.title as string} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="image/mayar-deeb.jpg" />
                <meta property="og:description" content={HomeLayoutMetaData.description as string} />

            </head>
            <body className={font.className + font2.className} >
                <ThemeProvider>
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
                <SpeedInsights dsn="y8NAEPFx4PlNkGL3teb0vSDzKuR" />
                <Analytics />
            </body>
        </html>
    );
}
