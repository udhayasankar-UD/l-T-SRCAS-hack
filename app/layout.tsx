import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit, Poppins } from "next/font/google";
import "./globals.css";
import GlassNavBar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ViewTransitions } from 'next-view-transitions'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hackbyte.in'), // Replace with your actual domain
  title: {
    default: "HackByte 3.0 | IIITDMJ Hackathon",
    template: "%s | HackByte 3.0"
  },
  description: "HackByte is IIITDMJ's student-run hackathon. Join us for 3 days of coding, innovation, and fun. April 3-5, 2026.",
  keywords: ["Hackathon", "IIITDMJ", "Coding", "HackByte", "Jabalpur", "Tech Event"],
  openGraph: {
    title: "HackByte 3.0 | IIITDMJ Hackathon",
    description: "Join us for 3 days of coding, innovation, and fun at IIITDM Jabalpur.",
    url: 'https://hackbyte.in',
    siteName: 'HackByte',
    images: [
      {
        url: '/hackbyte_home_page.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} ${poppins.className} antialiased overflow-x-hidden bg-black`}
        >
          <GlassNavBar />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
