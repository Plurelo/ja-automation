import Image from 'next/image';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    date: string;
    category: string;
    description: string;
    technologies: string[];
    tags: string[];
    image: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full ">
      {/* Header Image */}
      <div className="relative">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        {/* Bookmark Icon */}
        <button className="absolute top-3 right-3 p-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
          </svg>
        </button>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Category */}
        <div className="text-sm text-red-500 font-medium mb-3">{project.category}</div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Hashtags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.slice(0, 5).map((tag, index) => (
            <span 
              key={index} 
              className="text-xs text-gray-500 hover:text-red-600 cursor-pointer transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <span>{project.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}