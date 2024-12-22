import "./globals.css";
import { HomeLayout, HomeLayoutMetaData } from "~/screens/home/home-layout";
import { Metadata } from "next";

export const metadata: Metadata = HomeLayoutMetaData;

export default function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <HomeLayout>
      {children}
    </HomeLayout>
  );
}
