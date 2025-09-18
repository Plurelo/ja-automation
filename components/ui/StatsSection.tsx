"use client";

interface StatsSectionProps {
  stats: {
    totalProjects: number;
    satisfactionRate: string;
    averageROI: string;
    responseTime: string;
    industries: number;
    teamMembers: string;
    yearsExperience: string;
  };
}

export function StatsSection({ stats }: StatsSectionProps) {
  const statItems = [
    {
      value: `${stats.totalProjects}+`,
      label: 'Projetos Concluídos',
      description: 'Cases de sucesso em diferentes indústrias'
    },
    {
      value: stats.satisfactionRate,
      label: 'Taxa de Satisfação',
      description: 'Clientes satisfeitos com nossos serviços'
    },
    {
      value: stats.averageROI,
      label: 'ROI Médio',
      description: 'Retorno sobre investimento médio'
    },
    {
      value: stats.responseTime,
      label: 'Tempo de Resposta',
      description: 'Resposta inicial aos clientes'
    },
    {
      value: `${stats.industries}`,
      label: 'Indústrias Atendidas',
      description: 'Setores onde atuamos'
    },
    {
      value: stats.teamMembers,
      label: 'Especialistas',
      description: 'Profissionais em nossa equipe'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Números Falam por Si
          </h2>
          <p className="text-red-100 text-lg max-w-2xl mx-auto">
            Resultados que comprovam nossa excelência e compromisso com o sucesso dos nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {statItems.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-200">
                {item.value}
              </div>
              <div className="text-red-100 font-semibold mb-1">
                {item.label}
              </div>
              <div className="text-red-200 text-sm">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
