import "./globals.css";
import { HomeLayout } from "~/screens/home/home-layout";
import { Metadata } from "next";

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;


export const metadata: Metadata = {
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
};

export default function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <HomeLayout>
      {children}
    </HomeLayout>
  );
}
