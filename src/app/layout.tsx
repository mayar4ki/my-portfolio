import "./globals.css";
import { HomeLayout, HomeLayoutMetaData } from "~/screens/home/home-layout";
import { Metadata } from "next";

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;


export const metadata: Metadata = HomeLayoutMetaData;

export default function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <HomeLayout>
      {children}
    </HomeLayout>
  );
}
