import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { BottomNav, Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SITE_URL } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BTechi: Your entire degree, organised in one place",
    template: "%s · BTechi",
  },
  description:
    "Notes, curriculum, videos, books, previous-year questions and practice, organised by program, semester, subject and topic.",
  applicationName: "BTechi",
  keywords: ["BTechi", "IIT Mandi", "notes", "PYQ", "previous year questions", "statistics", "data science", "BBA", "B.A."],
  openGraph: {
    type: "website",
    siteName: "BTechi",
    title: "BTechi: Your entire degree, organised in one place",
    description: "Notes, videos, books, PYQs and practice, organised for your degree.",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body className="min-h-dvh font-sans antialiased">
        <Providers>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}
