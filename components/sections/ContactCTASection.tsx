import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useParams } from "next/navigation";

export default function ContactCTASection() {
  const params = useParams();
  const locale = (params?.locale as string) || "pt";
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm px-6 py-10 sm:px-12 sm:py-12 lg:px-16">
          {/* Decorative elements */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Icon */}
            {/* <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
              <MessageCircle className="h-8 w-8 text-rose-600" />
            </div> */}

            {/* Heading */}
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {locale === "pt" ? "Fale com Nossa Equipe" : "Talk to Our Team"}
            </h2>

            {/* Description */}
            <p className="mb-8 max-w-2xl text-pretty text-lg text-gray-600 sm:text-xl">
              {locale === "pt"
                ? "Tem alguma dúvida ou precisa de ajuda? Nossa equipe está pronta para atender você. Entre em contato e teremos prazer em ajudar!"
                : "Do you have any questions or need assistance? Our team is ready to help you. Get in touch and we will be happy to assist!"}
            </p>

            {/* CTA Button */}
            <Link
              href="/contato"
              // className="group inline-flex items-center gap-2 rounded-lg bg-rose-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-rose-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-rose-600/30 sm:text-lg"
              className="group inline-flex items-center gap-2 border-2 border-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-white hover:text-red-600 transition-all duration-200 bg-red-600"
            >
              {locale === "pt" ? "Entrar em Contato" : "Contact Us"}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
