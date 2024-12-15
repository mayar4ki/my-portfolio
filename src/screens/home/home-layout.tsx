import type { Metadata } from "next";
import { Roboto_Condensed, Roboto } from "next/font/google";
import { ThemeProvider } from "~/providers/theme-provider";


const roboto = Roboto_Condensed({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
    display: "swap",
});

export const HomeLayoutMetaData: Metadata = {
    title: "Next.js + Tailwind Portfolio Page",
    description:
        "Introducing Tailwind Portfolio Page, a versatile and stylish portfolio template built on the foundation of Tailwind CSS and Material Tailwind.",
};

export const HomeLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <html lang="en">
            <head>
                <link rel="shortcut icon" href="/favicon.png" type="image/png" />
            </head>
            <body className={roboto.className}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
