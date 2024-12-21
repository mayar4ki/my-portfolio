import type { Metadata } from "next";
import { Roboto_Condensed, Roboto } from "next/font/google";
import { ThemeProvider } from "~/providers/theme-provider";
import { Header } from "./layout/header";
import { Footer } from "./layout/footer";
const roboto = Roboto_Condensed({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
    display: "swap",
});

export const HomeLayoutMetaData: Metadata = {
    title: "Mayar Deeb Portfolio"
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
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
