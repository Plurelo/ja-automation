"use client";

import Image from "next/image";
import Link from "next/link";

export function CareerBanner() {
  return (
    <section className="relative w-full h-[550px] overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/automation.jpg"
          alt="Automação Industrial"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay escuro para melhorar legibilidade do texto */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Conteúdo do banner */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Hashtag */}
            <div className="mb-6">
              <span className="text-white/80 text-lg font-medium" style={{ fontFamily: 'Noto Sans Condensed Black, sans-serif' }}>
                #SEJAPARTEJAUTOMATION
              </span>
            </div>

            {/* Título principal */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                WITH J&A AUTOMATION I BELONG TO A POWERFUL TEAM.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
