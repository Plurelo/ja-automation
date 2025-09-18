import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a Consulting Company. Estamos prontos para ajudar sua empresa a alcançar novos patamares de crescimento.",
  openGraph: {
    title: "Contato - Consulting Company",
    description: "Entre em contato com a Consulting Company. Estamos prontos para ajudar sua empresa a alcançar novos patamares de crescimento.",
    url: "https://consulting-website.com/contato",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
