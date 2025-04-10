import { Metadata } from "next";
import { AiIndexScreen } from "~/screens/ai/ai-index-screen";

export const metadata: Metadata = {
  title: "AI - Mayar Deeb, Senior Front-end Developer in Dubai",
  description: "AI will answer all of your questions about me",
  openGraph: {
    url: "https://mayar-deeb.dev/ai",
    title: "AI - Mayar Deeb, Senior Front-end Developer in Dubai",
    description: "AI will answer all of your questions about me",
  },
  alternates: {
    canonical: "https://mayar-deeb.dev/ai",
  },
};

export default function Page() {
  return <AiIndexScreen />;
}
