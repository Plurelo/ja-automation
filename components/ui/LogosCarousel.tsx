"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const logos = [
  { name: "Avon", src: "/images/home/logos/Avon.png" },
  { name: "BMW", src: "/images/home/logos/BMW.png" },
  { name: "BR", src: "/images/home/logos/BR.png" },
  { name: "Campari", src: "/images/home/logos/campari.png" },
  { name: "Citroen", src: "/images/home/logos/Citroen.png" },
  { name: "Coca Cola", src: "/images/home/logos/coca cola.png" },
  { name: "Ford", src: "/images/home/logos/ford.png" },
  { name: "Heineken", src: "/images/home/logos/heineken.png" },
  { name: "Johnson & Johnson", src: "/images/home/logos/johnson-and-johnson.png" },
  { name: "Mercedes Benz", src: "/images/home/logos/Mercedes Benz.png" },
  { name: "Peugeot", src: "/images/home/logos/Peugeot.png" },
  { name: "Tesla", src: "/images/home/logos/tesla.png" },
  { name: "Toyota", src: "/images/home/logos/Toyota.png" },
];

export function LogosCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Se chegou ao final, volta para o início sem animação
        if (nextIndex >= logos.length) {
          // Reset sem animação
          if (containerRef.current) {
            containerRef.current.style.transition = 'none';
            containerRef.current.style.transform = 'translateX(0%)';
            // Força um reflow
            containerRef.current.offsetHeight;
            // Reativa a animação
            containerRef.current.style.transition = 'transform 1000ms ease-in-out';
          }
          return 0;
        }
        return nextIndex;
      });
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          {/* Fade esquerdo */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          
          {/* Fade direito */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={containerRef}
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / logos.length)}%)` }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-4"
                style={{ width: `${100 / logos.length}%` }}
              >
                <div className="relative w-24 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 96px, 96px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
