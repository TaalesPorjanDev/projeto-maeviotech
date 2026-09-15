import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://projeto-maeviotech.vercel.app"),
  title: {
    default: "MaevioTech — Soluções Tecnológicas para Negócios Modernos",
    template: "%s | MaevioTech",
  },
  description:
    "Desenvolvemos sites e sistemas web sob medida para empresas que querem vender mais e se destacar online.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://projeto-maeviotech.vercel.app",
  },
  openGraph: {
    title: "MaevioTech — Soluções Tecnológicas para Negócios Modernos",
    description:
      "Desenvolvemos sites e sistemas web sob medida para empresas que querem vender mais e se destacar online.",
    url: "https://projeto-maeviotech.vercel.app",
    siteName: "MaevioTech",
    locale: "pt_BR",
    type: "website",
    images: [
      {
      url: "/og-image.png",
      width: 1366,
      height: 768,
      alt: "MaevioTech — Sites e sistemas web que fazem sua empresa vender mais",
    },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MaevioTech — Soluções Tecnológicas para Negócios Modernos",
    description:
      "Desenvolvemos sites e sistemas web sob medida para empresas que querem vender mais e se destacar online.",
    images: ["/og-image.png"]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}