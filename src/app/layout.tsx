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
    default: "BTechi: IIT Madras BS Management & Data Science, organised",
    template: "%s · BTechi",
  },
  description:
    "Every IIT Madras BS in Management and Data Science course, Foundation to Degree, with notes, videos, PYQs and practice, organised week by week.",
  applicationName: "BTechi",
  keywords: ["BTechi", "IIT Madras BS", "IITM BS", "Management and Data Science", "IITM BS notes", "IITM BS PYQ", "quiz 1", "end term", "BSMA1001", "BSMS"],
  openGraph: {
    type: "website",
    siteName: "BTechi",
    title: "BTechi: IIT Madras BS Management & Data Science, organised",
    description: "Notes, videos, PYQs and practice for every IITM BS course.",
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
