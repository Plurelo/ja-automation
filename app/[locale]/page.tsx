import { Metadata } from "next";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { LogosCarousel } from "@/components/ui/LogosCarousel";
import { ProjectsCarousel } from "@/components/sections/ProjectsCarousel";
import { CareerBanner } from "@/components/sections/CareerBanner";

export const metadata: Metadata = {
  title: "Home",
  description: "Bem-vindo à JA Automation. Oferecemos soluções empresariais inovadoras para impulsionar o crescimento do seu negócio.",
  openGraph: {
    title: "JA Automation - Soluções Empresariais Inovadoras",
    description: "Bem-vindo à JA Automation. Oferecemos soluções empresariais inovadoras para impulsionar o crescimento do seu negócio.",
    url: "https://ja-automation.com",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* About Section */}
      <AboutSection />

      {/* Services Grid Section */}
      <ServicesGrid />

      {/* Logos Carousel Section */}
      <LogosCarousel />

      {/* Projects Carousel Section */}
      <ProjectsCarousel />

      {/* Career Banner Section */}
      <CareerBanner />      
    </div>
  );
}
