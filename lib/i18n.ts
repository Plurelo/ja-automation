import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// Tipos para as traduções
export type Locale = "pt" | "en";

export interface Translations {
  navigation: {
    company: string;
    cases: string;
    services: string;
    contact: string;
    all: string;
    close: string;
  };
  services: {
    "plc-ihm": string;
    vfd: string;
    "electrical-projects": string;
    "panel-assembly": string;
    "nr12-compliance": string;
    "technical-support": string;
    consulting: string;
    training: string;
    "pneumatic-projects": string;
    "mitsubishi-representation": string;
  };
  industries: {
    beverages: string;
    energy: string;
    automotive: string;
    cosmetics: string;
  };
  common: {
    readMore: string;
    learnMore: string;
    contactUs: string;
    getQuote: string;
    viewAll: string;
    backToTop: string;
  };
  footer: {
    rightsReserved: string;
    followUs: string;
    quickLinks: string;
    contactInfo: string;
    socialMedia: string;
    home: string;
    solutions: string;
    cases: string;
    contact: string;
    copyright: string;
    continents: {
      americas: string;
      europe: string;
      africaAsia: string;
    };
    countries: {
      brazil: string;
      usa: string;
      argentina: string;
      chile: string;
      colombia: string;
      mexico: string;
      panama: string;
      peru: string;
      paraguay: string;
      canada: string;
      uruguay: string;
      haiti: string;
      bahamas: string;
      bolivia: string;
      england: string;
      france: string;
      belgium: string;
      netherlands: string;
      germany: string;
      switzerland: string;
      austria: string;
      italy: string;
      czechRepublic: string;
      turkey: string;
      serbia: string;
      congoDR: string;
      nigeria: string;
      angola: string;
      qatar: string;
      saudiArabia: string;
      philippines: string;
      papuaNewGuinea: string;
    };
  };
  servicesGrid: {
    title: string;
    subtitle: string;
    ctaText: string;
    viewAllServices: string;
    getInTouch: string;
    services: Array<{
      id: number;
      title: string;
      description: string;
      icon: string;
    }>;
  };
  projectsCarousel: {
    title: string;
    description: string;
    linkText: string;
    prevButton: string;
    nextButton: string;
  };

  casesPage: {
    title: string;
    subtitle: string;
    altText: string;
    stats: {
      projects: string;
      industries: string;
      years: string;
      successRate: string;
    };
    projectPeriod: string;
    projectDescription: string;
    projectImage: string;
    noProjectsFound: string;
    noProjectsMessage: string;
    viewAllProjects: string;
  };

  caseStudies: {
    [key: string]: {
      project: string;
      description: string;
    };
  };

  servicesPage: {
    title: string;
    subtitle: string;
    brands: string;
    differentials: string;
    learnMore: string;
    services: {
      [key: string]: {
        title: string;
        description: string;
        features: string[];
      };
    };
  };

  contactPage: {
    title: string;
    subtitle: string;
    subtitle2: string;
    description: string;
    contactPerson: string;
    sendMessage: string;
    form: {
      fullName: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
    };
  };
}

// Função para carregar traduções
export async function getTranslations(locale: Locale): Promise<Translations> {
  try {
    const translations = await import(`../locales/${locale}/common.json`);
    return translations.default;
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`, error);
    // Fallback para português se houver erro
    const fallback = await import("../locales/pt/common.json");
    return fallback.default as any;
  }
}

// Hook para usar traduções em componentes client-side
export function useTranslations() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const [translations, setTranslations] = useState<Translations | null>(null);

  useEffect(() => {
    getTranslations(locale).then(setTranslations);
  }, [locale]);

  // Fallback para traduções em português se ainda não carregou
  const fallbackTranslations: Translations = {
    navigation: {
      company: "Empresa",
      cases: "Cases",
      services: "Serviços",
      contact: "Contato",
      all: "Todos",
      close: "Fechar",
    },
    services: {
      "plc-ihm": "Programação de PLC e IHM",
      vfd: "Programação de Drivers e Inversores",
      "electrical-projects": "Projeto Elétrico",
      "panel-assembly": "Montagem de Painéis",
      "nr12-compliance": "Adequação de Máquinas a Norma NR-12",
      "technical-support": "Suporte Técnico",
      consulting: "Consultoria em Engenharia e Projetos",
      training: "Treinamentos",
      "pneumatic-projects": "Projeto Pneumático, Hidráulico e Vácuo",
      "mitsubishi-representation": "Representação Mitsubishi",
    },
    industries: {
      beverages: "Beverages",
      energy: "Energy",
      automotive: "Automotive",
      cosmetics: "Cosmetics",
    },
    common: {
      readMore: "Leia mais",
      learnMore: "Saiba mais",
      contactUs: "Entre em contato",
      getQuote: "Solicitar orçamento",
      viewAll: "Ver todos",
      backToTop: "Voltar ao topo",
    },
    footer: {
      rightsReserved: "Todos os direitos reservados",
      followUs: "Siga-nos",
      quickLinks: "Links rápidos",
      contactInfo: "Informações de contato",
      socialMedia: "Redes Sociais",
      home: "Home",
      solutions: "Soluções",
      cases: "Cases",
      contact: "Contato",
      copyright: "© {year} J&A Automação. Todos os direitos reservados.",
      continents: {
        americas: "Américas",
        europe: "Europa",
        africaAsia: "África & Ásia",
      },
      countries: {
        brazil: "Brasil",
        usa: "EUA",
        argentina: "Argentina",
        chile: "Chile",
        colombia: "Colômbia",
        mexico: "México",
        panama: "Panamá",
        peru: "Peru",
        paraguay: "Paraguai",
        canada: "Canadá",
        uruguay: "Uruguai",
        haiti: "Haiti",
        bahamas: "Bahamas",
        bolivia: "Bolívia",
        england: "Inglaterra",
        france: "França",
        belgium: "Bélgica",
        netherlands: "Países Baixos",
        germany: "Alemanha",
        switzerland: "Suíça",
        austria: "Áustria",
        italy: "Itália",
        czechRepublic: "República Tcheca",
        turkey: "Turquia",
        serbia: "Sérvia",
        congoDR: "Congo DR",
        nigeria: "Nigéria",
        angola: "Angola",
        qatar: "Catar",
        saudiArabia: "Arábia Saudita",
        philippines: "Filipinas",
        papuaNewGuinea: "Papua-Nova Guiné",
      },
    },
    servicesGrid: {
      title: "Nossos Serviços",
      subtitle: "Soluções completas para automação industrial e otimização de processos",
      ctaText: "Pronto para transformar seus processos industriais?",
      viewAllServices: "Ver Todos os Serviços",
      getInTouch: "Entre em Contato",
      services: [
        {
          id: 1,
          title: "Programação de PLC e IHM",
          description: "Especialistas em programação de controladores lógicos programáveis e interfaces homem-máquina",
          icon: "⚙️",
        },
        {
          id: 2,
          title: "Programação de Drivers e Inversores",
          description: "Configuração e programação de inversores de frequência para controle de motores",
          icon: "🔄",
        },
        {
          id: 3,
          title: "Projeto Elétrico",
          description: "Projeto elétrico (Em Eplan e Cad) de máquinas e equipamentos",
          icon: "⚡",
        },
        {
          id: 4,
          title: "Montagem de Painéis",
          description: "Montagem e instalação de painéis elétricos industriais",
          icon: "🔧",
        },
        {
          id: 5,
          title: "Adequação de Máquinas a Norma NR-12",
          description: "Adequação de máquinas e equipamentos às normas de segurança do trabalho",
          icon: "🛡️",
        },
        {
          id: 6,
          title: "Suporte Técnico",
          description: "Suporte técnico para manutenção de PLC e especificação de máquinas e equipamentos",
          icon: "🆘",
        },
        {
          id: 7,
          title: "Consultoria em Engenharia e Projetos",
          description: "Consultoria para usuário final, gerenciando todas as etapas do projeto",
          icon: "📋",
        },
        {
          id: 8,
          title: "Treinamentos",
          description: "Treinamento em lógica, dimensionamento e integração entre engenharias",
          icon: "🎓",
        },
        {
          id: 9,
          title: "Projeto Pneumático, Hidráulico e Vácuo",
          description: "Projeto Pneumático, Hidráulico e Vácuo (Plano A e P)",
          icon: "💨",
        },
        {
          id: 10,
          title: "Representação Mitsubishi",
          description: "Representação em PLC e VFD Mitsubishi e treinamento de programação",
          icon: "🏢",
        },
      ],
    },
    projectsCarousel: {
      title: "Projetos da TAS Automação",
      description:
        "Fabricantes e engarrafadores de bebidas e alimentos confiam na TAS Automação e relatam suas experiências com nossas linhas de automação. Descubra em primeira mão quando há novas soluções de máquinas e plantas para a indústria de bebidas e alimentos.",
      linkText: "Para a Revista TAS",
      prevButton: "Anterior",
      nextButton: "Próximo",
    },

    casesPage: {
      title: "Cases de Sucesso",
      subtitle: "Descubra como a J&A Automação transformou processos de manufatura em múltiplas indústrias com soluções de automação de ponta.",
      altText: "Cases de Sucesso - Automação Industrial",
      stats: {
        projects: "Projetos",
        industries: "Indústrias",
        years: "Anos",
        successRate: "Taxa de Sucesso",
      },
      projectPeriod: "Período do Projeto:",
      projectDescription: "Descrição do Projeto",
      projectImage: "Imagem do Projeto",
      noProjectsFound: "Nenhum Projeto Encontrado",
      noProjectsMessage: "Não conseguimos encontrar projetos para a indústria selecionada.",
      viewAllProjects: "Ver Todos os Projetos",
    },

    caseStudies: {},

    servicesPage: {
      title: "Soluções em Automação Industrial",
      subtitle: "Tecnologia de ponta e expertise técnica para otimizar seus processos industriais e aumentar a produtividade",
      brands: "Marcas",
      differentials: "Diferenciais",
      learnMore: "Saiba mais",
      services: {},
    },

    contactPage: {
      title: "Vamos conversar.",
      subtitle: "Conte-nos sobre seu",
      subtitle2: "projeto.",
      description: "Vamos criar algo juntos 🤝",
      contactPerson: "Pessoa de Contato",
      sendMessage: "Envie-nos uma mensagem🚀",
      form: {
        fullName: "Nome completo*",
        email: "Endereço de email*",
        subject: "Assunto",
        message: "Conte-nos mais sobre seu projeto*",
        submit: "Enviar mensagem",
      },
    },
  };

  return {
    locale,
    t: translations || fallbackTranslations,
    changeLocale: (newLocale: Locale) => {
      const pathWithoutLocale = getPathWithoutLocale(pathname);
      router.push(`/${newLocale}${pathWithoutLocale}`);
    },
  };
}

// Função utilitária para obter tradução por chave
export function getTranslationKey(translations: Translations, key: string): string {
  const keys = key.split(".");
  let value: any = translations;

  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  }

  return value;
}

// Função para obter o idioma baseado na URL ou navegador
export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/");
  const firstSegment = segments[1];

  if (firstSegment === "en") return "en";
  if (firstSegment === "pt") return "pt";

  // Fallback para português
  return "pt";
}

// Função para obter o caminho sem o idioma
export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split("/");
  const locale = segments[1];

  if (locale === "en" || locale === "pt") {
    return "/" + segments.slice(2).join("/");
  }

  return pathname;
}
