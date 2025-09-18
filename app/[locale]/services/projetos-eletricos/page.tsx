"use client";

import Image from "next/image";
import { useTranslations } from "@/lib/i18n";

export default function ElectricalProjectsPage() {
  const { t } = useTranslations();
  const serviceDetails = (t as any).servicesDetails?.["electrical-projects"];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image 
            src="/images/home/services/service_card.avif"
            alt="Projetos Elétricos"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{serviceDetails?.title || "Projetos Elétricos"}</h1>
          <p className="text-xl md:text-2xl max-w-3xl opacity-90">
            {serviceDetails?.description || "Projeto elétrico (Em Eplan e Cad) de máquinas e equipamentos"}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Overview Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Visão Geral</h2>
          <p className="text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
          </p>
          <p className="text-lg text-gray-700">
            Suspendisse in orci enim. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nossos Serviços de Projetos Elétricos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Projetos Elétricos Industriais</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Automação de Processos</h3>
              <p className="text-gray-600">
                Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Painéis de Controle</h3>
              <p className="text-gray-600">
                Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nosso Processo</h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold text-center">Análise de Requisitos</h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold text-center">Projeto e Desenvolvimento</h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-700">
                  Suspendisse in orci enim. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold text-center">Implementação</h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-700">
                  Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">4</div>
                <h3 className="text-xl font-semibold text-center">Testes e Validação</h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-700">
                  Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
