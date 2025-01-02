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

export const HomeLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <html lang="en">
            <head>
                <link rel="website icon" href="/favicon.ico" type="image/png" />
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
