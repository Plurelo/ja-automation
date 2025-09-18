import { Service, Testimonial, CaseStudy, CompanyInfo } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    title: "Consultoria Estratégica",
    description: "Desenvolvemos estratégias personalizadas para acelerar o crescimento do seu negócio.",
    icon: "chart-bar",
    features: ["Análise de mercado e concorrência", "Planejamento estratégico", "Definição de objetivos e metas", "Implementação de KPIs"],
    slug: "consultoria-estrategica",
  },
  {
    id: "2",
    title: "Transformação Digital",
    description: "Modernizamos processos e implementamos tecnologias para otimizar sua operação.",
    icon: "lightning-bolt",
    features: ["Automação de processos", "Implementação de sistemas", "Integração de tecnologias", "Treinamento de equipes"],
    slug: "transformacao-digital",
  },
  {
    id: "3",
    title: "Gestão de Pessoas",
    description: "Desenvolvemos talentos e otimizamos a performance das equipes.",
    icon: "users",
    features: ["Recrutamento e seleção", "Desenvolvimento de liderança", "Avaliação de desempenho", "Programas de capacitação"],
    slug: "gestao-de-pessoas",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Silva",
    company: "TechCorp",
    position: "CEO",
    content: "A consultoria transformou completamente nossa operação. Aumentamos nossa eficiência em 40% em apenas 6 meses.",
    rating: 5,
  },
  {
    id: "2",
    name: "João Santos",
    company: "InnovaCorp",
    position: "Diretor de Operações",
    content: "Profissionais extremamente competentes. Nos ajudaram a implementar processos que revolucionaram nosso negócio.",
    rating: 5,
  },
  {
    id: "3",
    name: "Ana Costa",
    company: "GrowthLtda",
    position: "Fundadora",
    content: "Recomendo fortemente! A expertise da equipe foi fundamental para nosso crescimento sustentável.",
    rating: 5,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Transformação Digital em Empresa de Logística",
    client: "LogiTech Solutions",
    industry: "Logística",
    challenge: "Processos manuais causavam atrasos e erros na operação",
    solution: "Implementação de sistema integrado de gestão e automação de processos",
    results: ["Redução de 60% no tempo de processamento", "Diminuição de 80% nos erros operacionais", "Aumento de 35% na satisfação do cliente"],
    slug: "transformacao-digital-logistica",
  },
  {
    id: "2",
    title: "Reestruturação Estratégica em Startup",
    client: "InnovaStart",
    industry: "Tecnologia",
    challenge: "Crescimento desordenado e falta de processos estruturados",
    solution: "Desenvolvimento de planejamento estratégico e implementação de governança",
    results: ["Crescimento de 150% no faturamento", "Estruturação de 5 novos departamentos", "Captação de investimento série A"],
    slug: "reestruturacao-startup",
  },
];

export const companyInfo: CompanyInfo = {
  address: {
    street: "Av. Paulista, 1000 - Conjunto 101",
    city: "São Paulo",
    state: "SP",
    zipCode: "01310-100",
    country: "Brasil",
  },
  contact: {
    phone: "+55 (11) 99999-9999",
    email: "contato@consultingcompany.com.br",
    whatsapp: "+5511999999999",
  },
  social: {
    linkedin: "https://linkedin.com/company/consulting-company",
    instagram: "https://instagram.com/consultingcompany",
    facebook: "https://facebook.com/consultingcompany",
  },
};
