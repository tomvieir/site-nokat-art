import type { Metadata } from "next";
import { Manrope, Raleway } from "next/font/google";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const bodyFont = Manrope({
  variable: "--font-inter",
  subsets: ["latin"],
});

const displayFont = Raleway({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOKAT art | Film & Photography",
  description:
    "Wedding films and photography by Jeff, a Brazilian creator based in Kerry, Ireland, told with softness and a less usual point of view.",
  keywords: [
    "NOKAT art",
    "wedding filmmaker",
    "wedding photography",
    "cinematic storytelling",
    "Kerry Ireland photographer",
  ],
  openGraph: {
    title: "NOKAT art | Film & Photography",
    description:
      "Wedding films and photography with a warm, cinematic sense of intimacy, atmosphere, and memory.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOKAT art | Film & Photography",
    description:
      "Wedding films and photography with a warm, cinematic sense of intimacy, atmosphere, and memory.",
  },
  icons: {
    icon: [
      { url: `${basePath}/icon?any`, type: "image/png", sizes: "64x64" },
      { url: `${basePath}/icon?mask`, type: "image/png", sizes: "64x64" },
    ],
    apple: [{ url: `${basePath}/icon?apple`, type: "image/png", sizes: "64x64" }],
    shortcut: [`${basePath}/icon`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
