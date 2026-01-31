import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import hero1 from '../assets/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-bench-with-school-items-laptops-notebooks.jpg';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: hero1,
      title: 'Study at World-Class Universities',
      subtitle: 'Expert guidance for top universities in the UK, USA, Canada & Europe.',
      ctaText: 'Get Free Consultation',
      badge: '',
      trustText: '',
    },
    {
      image: 'https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBkaXZlcnNlfGVufDF8fHx8MTc2OTI2NzU2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Study in World-Class Universities',
      subtitle: 'Access top institutions across UK, USA, Canada, and Europe',
      badge: 'Find Your Potential',
      ctaText: 'Get Started Today',
    },
    {
      image: 'https://images.unsplash.com/photo-1591218214141-45545921d2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdHVkZW50cyUyMGNlbGVicmF0aW5nfGVufDF8fHx8MTc2OTI2NzU2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Your Success is Our Mission',
      subtitle: '98% success rate with 1000+ students placed worldwide',
      badge: 'Find Your Potential',
      ctaText: 'Get Started Today',
    },
    {
      image: 'https://images.unsplash.com/photo-1544002176-eacb96b939c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2OTI2NzU2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Expert Guidance Every Step',
      subtitle: 'From career counseling to visa assistance and beyond',
      badge: 'Find Your Potential',
      ctaText: 'Get Started Today',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen min-h-[450px] sm:min-h-[600px] overflow-hidden">
      {/* Slider Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Force overlay with inline styles to bypass any CSS build issues temporarily */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.5), rgba(0, 0, 0, 0.4))', zIndex: 2 }}></div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl text-center w-full">
            {/* Trust Info Consolidation */}
            {slides[currentSlide].trustText && (
              <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 border border-white/20">
                <span className="text-[10px] sm:text-xs text-white font-semibold tracking-wide uppercase">
                  {slides[currentSlide].trustText}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 lg:mb-8 leading-relaxed max-w-xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all"
              >
                <span className="text-sm sm:text-base font-semibold">{slides[currentSlide].ctaText}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center hover:bg-white/20 transition-all group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:-translate-x-1 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center hover:bg-white/20 transition-all group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? 'bg-white w-6 sm:w-8 h-2'
                : 'bg-white/40 w-2 h-2 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}