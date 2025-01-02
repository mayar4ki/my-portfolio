import "./globals.css";
import { HomeLayout } from "~/screens/home/home-layout";
import { Metadata } from "next";

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from "next/head";
config.autoAddCss = false;


export const metadata: Metadata = {
  title: "Mayar Deeb, Senior Front-end Developer in Dubai",
  description: "Senior Front-end Developer with experience building and maintaining web applications using various technologies and frameworks.",
  keywords: "Senior Front end developer, React, Nextjs, React native, Web development, Hire Mayar Deeb",
  authors: { name: "Mayar Deeb", url: "https://www.linkedin.com/in/mayar-i-deeb/" },
  openGraph: {
    url: "https://www.mayar-deeb.dev/"
  }
};

export default function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <HomeLayout>
      <Head>
        <link rel="website icon" href="/favicon.ico" type="image/png" />

        <link rel="canonical" href={metadata.openGraph?.url as string} />
        <meta property="og:url" content={metadata.openGraph?.url as string} />

        <meta property="og:title" content={metadata.title as string} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="image/mayar-deeb.jpg" />
        <meta property="og:description" content={metadata.description as string} />
      </Head>
      {children}
    </HomeLayout>
  );
}
