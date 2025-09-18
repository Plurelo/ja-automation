"use client";

import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/lib/casesData";

interface CaseCardProps {
  caseStudy: CaseStudy;
  variant?: 'default' | 'featured';
}

export function CaseCard({ caseStudy, variant = 'default' }: CaseCardProps) {
  return (
    <article className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Placeholder */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-500 font-medium">Imagem do Projeto</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Industry Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            {caseStudy.industry}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
            {caseStudy.project}
          </h3>
          <p className="text-gray-600 font-medium text-sm">
            Período: {caseStudy.date}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-3">
          {caseStudy.description}
        </p>

        {/* CTA */}
        <Link
          href={`/cases/${caseStudy.id}`}
          className="inline-flex items-center justify-center w-full bg-red-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 group-hover:shadow-lg"
        >
          Saiba Mais
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
