import "./globals.css";
import { HomeLayout } from "~/screens/home/home-layout";
import { Metadata } from "next";

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { seo } from "~/constants";
config.autoAddCss = false;


export const metadata: Metadata = seo.index;

export default function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <HomeLayout>
      {children}
    </HomeLayout>
  );
}
