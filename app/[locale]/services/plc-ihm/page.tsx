"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { translations } from "./translations";

export default function PLCIHMPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "pt";
  const t = (translations as any)[locale] || translations.pt;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image src="/images/home/services/service_card.avif" alt="PLC & HMI Programming" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl opacity-90">{t.hero.description}</p>
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

        {/* Features Section */}
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

        {/* Process Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.steps.sectionTitle}</h2>

          <div className="space-y-8">
            {t.steps.items.map((step: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
