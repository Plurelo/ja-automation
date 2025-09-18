"use client";

import { useState } from "react";

interface Industry {
  id: string;
  name: string;
  count: number;
}

interface IndustryFilterProps {
  industries: Industry[];
  activeIndustry: string;
  onIndustryChange: (industryId: string) => void;
}

export function IndustryFilter({ industries, activeIndustry, onIndustryChange }: IndustryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {industries.map((industry) => (
        <button
          key={industry.id}
          onClick={() => onIndustryChange(industry.id)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
            activeIndustry === industry.id
              ? 'bg-red-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
          aria-pressed={activeIndustry === industry.id}
        >
          {industry.name}
          <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
            activeIndustry === industry.id
              ? 'bg-white/20 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}>
            {industry.count}
          </span>
        </button>
      ))}
    </div>
  );
}
