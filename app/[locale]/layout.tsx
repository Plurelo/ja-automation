import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getTranslations } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://consulting-website.com"),
  title: {
    default: "Consulting Company - Soluções Empresariais Inovadoras",
    template: "%s | Consulting Company",
  },
  description: "Empresa de consultoria especializada em soluções empresariais inovadoras. Transformamos desafios em oportunidades de crescimento.",
  keywords: ["consultoria", "soluções empresariais", "inovação", "crescimento", "estratégia"],
  authors: [{ name: "Consulting Company" }],
  creator: "Consulting Company",
  publisher: "Consulting Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://consulting-website.com",
    siteName: "Consulting Company",
    title: "Consulting Company - Soluções Empresariais Inovadoras",
    description: "Empresa de consultoria especializada em soluções empresariais inovadoras. Transformamos desafios em oportunidades de crescimento.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Consulting Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulting Company - Soluções Empresariais Inovadoras",
    description: "Empresa de consultoria especializada em soluções empresariais inovadoras. Transformamos desafios em oportunidades de crescimento.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ 
  children, 
  params 
}: { 
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params?.locale || 'pt';
  const lang = locale === 'en' ? 'en-US' : 'pt-BR';
  
  // Validar se o idioma é suportado
  if (!['pt', 'en'].includes(locale)) {
    return <div>Idioma não suportado</div>;
  }
  
  return (
    <html lang={lang} className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
