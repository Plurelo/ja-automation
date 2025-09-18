"use client";

import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Seu Próximo Case de Sucesso Começa Aqui
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Junte-se às empresas que já transformaram seus processos e alcançaram resultados extraordinários 
            com nossas soluções de automação industrial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Solicitar Proposta
            </Link>
            
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Conhecer Soluções
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Confiança de empresas líderes em:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-sm font-semibold text-gray-600">Beverages</div>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <div className="text-sm font-semibold text-gray-600">Energy</div>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <div className="text-sm font-semibold text-gray-600">Automotive</div>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <div className="text-sm font-semibold text-gray-600">Cosmetics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
