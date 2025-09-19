"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Pagination } from 'swiper/modules';
import { useTranslations } from '@/lib/i18n';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import projects data
import projectsDataEn from '@/lib/projects-en.json';
import projectsDataPt from '@/lib/projects-pt.json';

export function ProjectsCarousel() {
  const { t, locale } = useTranslations();
  const projectsData = locale === 'en' ? projectsDataEn : projectsDataPt;
  const [randomProjects, setRandomProjects] = useState(projectsData.slice(0, 6));
  const carouselText = (t as any).projectsCarousel;

  // Shuffle projects on component mount
  useEffect(() => {
    const shuffled = [...projectsData].sort(() => Math.random() - 0.5);
    setRandomProjects(shuffled.slice(0, 6));
  }, [locale, projectsData]);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 text-center sm:text-left sm:ml-4">
          {carouselText?.title || "J&A Automation projects"}
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={12}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-projects',
              prevEl: '.swiper-button-prev-projects',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={800}
            className="projects-swiper w-full"
            breakpoints={{
              500: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3.2,
                spaceBetween: 20,
              }
            }}
          >
            {/* Primeiro slide com o conteúdo de texto */}
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-full flex flex-col p-4 sm:p-6 min-h-[300px] sm:min-h-[350px]">
                <div className="flex flex-col justify-center h-full max-w-md mx-auto">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                    {carouselText?.description || "Manufacturers and bottlers of beverages and food rely on J&A Automation and report on their experiences with our automation lines. Find out first-hand when there are new machine and plant solutions for the beverage and food industry."}
                  </p>

                  <Link
                    href={`/${locale}/cases`}
                    className="inline-block border-2 border-red-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-white hover:text-red-600 transition-all duration-200 bg-red-600 text-center"
                  >
                    {carouselText?.linkText || "To the J&A Magazine"}
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Project cards */}
            {randomProjects.map((project) => (
              <SwiperSlide key={project.id} >
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-3 sm:space-x-4 mt-4 sm:mt-6">
            <button
              className="swiper-button-prev-projects w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 shadow-sm"
              aria-label={carouselText?.prevButton || "Previous"}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="swiper-button-next-projects w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 shadow-sm"
              aria-label={carouselText?.nextButton || "Next"}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



