"use client";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/lib/i18n";

export default function ServicesPage() {
  const { t, locale } = useTranslations();
  const services = [
    { id: "plc-ihm", icon: "⚙️" },
    { id: "robotic-simulation", icon: "📋" },
    { id: "biw", icon: "🔄" },
    { id: "virtual-commissioning", icon: "⚡" },
    { id: "montagem-paineis", icon: "🔧" },
    { id: "suporte-tecnico", icon: "🆘" },
    { id: "treinamentos", icon: "🎓" },
    // { id: "nr12", icon: "🛡️" },
    // { id: "pneumaticos", icon: "💨" },
    // { id: "mitsubishi", icon: "🏢" },
  ];

  // const services = [
  //   { id: "plc-ihm", icon: "⚙️" },
  //   { id: "consultoria", icon: "📋" },
  //   { id: "vfd", icon: "🔄" },
  //   { id: "projetos-eletricos", icon: "⚡" },
  //   { id: "montagem-paineis", icon: "🔧" },
  //   { id: "suporte-tecnico", icon: "🆘" },
  //   { id: "treinamentos", icon: "🎓" },
  //   { id: "nr12", icon: "🛡️" },
  //   { id: "pneumaticos", icon: "💨" },
  //   { id: "mitsubishi", icon: "🏢" },
  // ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[url('/images/home/automation.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{t.servicesPage.title}</h1>
            <p className="text-xl md:text-2xl font-light text-gray-200 max-w-3xl mx-auto">{t.servicesPage.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100"
              >
                <div className="h-64 relative overflow-hidden bg-red-50">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-800/20 to-red-600/20"></div>
                  <Image
                    src={`/images/home/services/service_card.avif`}
                    alt={t.servicesPage.services[service.id]?.title || service.id}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-14 h-14 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center shadow-md">
                    <div className="text-red-600 text-2xl">{service.icon}</div>
                  </div>
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.servicesPage.services[service.id]?.title || service.id}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t.servicesPage.services[service.id]?.description || "Description not available"}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"></h3>
                    <ul className="space-y-3">
                      {t.servicesPage.services[service.id]?.features?.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/${locale}/services/${service.id}`}
                    className="inline-flex items-center text-red-600 font-medium hover:text-red-800 transition-colors"
                  >
                    {t.servicesPage.learnMore}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
