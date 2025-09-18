"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useTranslations, getTranslationKey } from "@/lib/i18n";

// Individual Case Card Component with its own intersection observer
function CaseCard({ caseStudy, index, t }: { caseStudy: any, index: number, t: any }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "50px"
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col lg:flex-row gap-8 transition-all duration-1000 ease-out ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
        } ${isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-24 scale-90'
        }`}
    >
      {/* Content */}
      <div className="flex-1">
        <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200 ease-out">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {t.caseStudies[caseStudy.id]?.project || caseStudy.id}
            </h2>
            <p className="text-gray-600 font-medium">{t.casesPage.projectPeriod} {caseStudy.date}</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{t.casesPage.projectDescription}</h3>
              <p className="text-gray-700">
                {t.caseStudies[caseStudy.id]?.description || 'Description not available'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="flex-1">
        <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 ease-out">
          <span className="text-gray-500 font-medium">{t.casesPage.projectImage}</span>
        </div>
      </div>
    </div>
  );
}
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { caseStudies, industries } from "@/lib/casesData";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function CasesPage() {
  const [activeIndustry, setActiveIndustry] = useState("all");
  const searchParams = useSearchParams();
  const { t } = useTranslations();

  // Aplicar filtro baseado no parâmetro da URL
  useEffect(() => {
    const industryParam = searchParams.get('industry');
    console.log('Industry param from URL:', industryParam); // Debug log
    if (industryParam && industries.some(industry => industry.id === industryParam)) {
      setActiveIndustry(industryParam);
      console.log('Filter applied for industry:', industryParam); // Debug log
    }
  }, [searchParams]);

  const filteredCases = useMemo(() => {
    if (activeIndustry === "all") {
      return caseStudies;
    }
    return caseStudies.filter(caseStudy => caseStudy.industry === activeIndustry);
  }, [activeIndustry]);



  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <section className="relative w-full h-[500px] overflow-hidden mt-20">
        {/* Imagem de fundo */}
        <div className="absolute inset-0">
          <Image
            src="/images/cases/banner_2.png"
            alt={t.casesPage.altText}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay escuro para melhorar legibilidade do texto */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {t.casesPage.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
                  {t.casesPage.subtitle}
                </p>
              </div>

              {/* Professional Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <AnimatedCounter
                    end={caseStudies.length}
                    duration={2000}
                    className="text-4xl font-bold text-white mb-2"
                  />
                  <div className="text-gray-300 text-sm font-medium uppercase tracking-wide">{t.casesPage.stats.projects}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <AnimatedCounter
                    end={industries.length - 1}
                    duration={2200}
                    className="text-4xl font-bold text-white mb-2"
                  />
                  <div className="text-gray-300 text-sm font-medium uppercase tracking-wide">{t.casesPage.stats.industries}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <AnimatedCounter
                    end={15}
                    duration={2400}
                    suffix="+"
                    className="text-4xl font-bold text-white mb-2"
                  />
                  <div className="text-gray-300 text-sm font-medium uppercase tracking-wide">{t.casesPage.stats.years}</div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                className={`px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 border ${activeIndustry === industry.id
                  ? 'bg-red-500/10 text-red-700 border-red-500/30 shadow-sm'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm'
                  }`}
              >
                {getTranslationKey(t, industry.nameKey)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredCases.length > 0 ? (
              <div className="space-y-12">
                {filteredCases.map((caseStudy, index) => (
                  <CaseCard
                    key={caseStudy.id}
                    caseStudy={caseStudy}
                    index={index}
                    t={t}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t.casesPage.noProjectsFound}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t.casesPage.noProjectsMessage}
                </p>
                <button
                  onClick={() => setActiveIndustry("all")}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  {t.casesPage.viewAllProjects}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
