"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { translations } from "./translations";
import ContactCTASection from "@/components/sections/ContactCTASection";

export default function VirtualCommissioningPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "pt";
  const t = (translations as any)[locale] || translations.pt;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image src="/images/home/services/service_card.avif" alt="Virtual Commissioning" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Virtual Commissioning (VCx)</h1>
          <p className="text-xl md:text-2xl max-w-3xl opacity-90">
            {locale === "en"
              ? "Virtual validation of systems before physical implementation"
              : "Validação virtual de sistemas antes da implementação física"}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Overview Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.overview.title}</h2>
          <p className="text-lg text-gray-700 mb-6">
            <strong>{t.overview.subtitle}</strong>
          </p>
          <p className="text-lg text-gray-700 mb-6">{t.overview.description}</p>
          <div className="text-lg text-gray-700 mb-4">
            {t.overview.benefits.map((benefit: string, index: number) => (
              <p key={index} className="mb-2">
                • {benefit}
              </p>
            ))}
          </div>
          <p className="text-lg text-gray-700 mb-4">{t.overview.conclusion}</p>
          <p className="text-lg text-gray-700 font-semibold">{t.overview.cta}</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.steps.title}</h2>
          <p className="text-center text-lg text-gray-600 mb-8">{t.steps.subtitle}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.steps.items.map((step: any, index: number) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-red-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section>
        <ContactCTASection />
      </section>
    </div>
  );
}
