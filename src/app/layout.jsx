import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/Components/ThemeProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "ZohoAI Assistant — Your Intelligent Zoho Command Centre",
  description: "One AI-powered command centre that connects all your Zoho apps, answers questions in plain English, automates tasks, and surfaces business insights.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
