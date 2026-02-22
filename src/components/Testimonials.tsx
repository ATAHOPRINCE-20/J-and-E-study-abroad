import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Swalini Kagungube',
      degree: 'Bachelor of Science in Civil Engineering (B.S.C.E.)',
      university: 'Arkansas State University',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      text: 'Before leaving for university, I was told about Sharz Consults - these have been some of the most amazing people in my life. I didn\'t know if I would find a good university or a fake one... these guys did more than I expected them to do.',
      photo: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBhYnJvYWQlMjBjYW1wdXN8ZW58MXx8fHwxNzY5MjY3MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Michael Chen',
      degree: 'Master of Business Administration (MBA)',
      university: 'University of Toronto',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      text: 'The team at J&E was incredibly supportive throughout my journey. They helped me secure admission to my dream university in Canada and made the process so smooth. I couldn\'t have done it without them.',
      photo: 'https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBkaXZlcnNlfGVufDF8fHx8MTc2OTI2NzU2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Amara Okoye',
      degree: 'Bachelor of Computer Science',
      university: 'Technical University of Munich',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      text: 'Professional, knowledgeable, and always available to answer questions. J&E helped me navigate the complex German university system with ease. Their dedication to student success is unmatched.',
      photo: 'https://images.unsplash.com/photo-1591218214141-45545921d2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdHVkZW50cyUyMGNlbGVicmF0aW5nfGVufDF8fHx8MTc2OTI2NzU2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'David Martinez',
      degree: 'Bachelor of Engineering',
      university: 'University of Melbourne',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      text: 'From choosing the right course to settling in Australia, J&E was with me every step of the way. Their expertise and dedication are truly commendable. Highly recommended for anyone planning to study abroad.',
      photo: 'https://images.unsplash.com/photo-1544002176-eacb96b939c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2OTI2NzU2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);


  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
              <ImageWithFallback
                src={currentTestimonial.photo}
                alt="Students"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - Testimonial Content */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            {/* Label */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#D4A574] rounded-sm"></div>
              <span className="text-xs sm:text-sm font-semibold text-[#6B2C3E] tracking-wider uppercase">
                Testimonials
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#6B2C3E] leading-tight">
              WHAT OUR STUDENTS SAY ABOUT US
            </h2>

            {/* Decorative Wave */}
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="my-4 sm:my-6">
              <path
                d="M0 10C5 10 5 15 10 15C15 15 15 10 20 10C25 10 25 5 30 5C35 5 35 10 40 10C45 10 45 15 50 15C55 15 55 10 60 10"
                stroke="#D4A574"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            {/* Testimonial Card */}
            <div className="relative bg-gradient-to-br from-[#6B2C3E] to-[#8B3C4E] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-xl">
              {/* Quote Icon */}
              <Quote className="absolute top-4 sm:top-6 left-4 sm:left-6 w-6 h-6 sm:w-8 sm:h-8 text-[#D4A574]/30" />


              {/* Testimonial Text */}
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 pl-6 sm:pl-8">
                "{currentTestimonial.text}"
              </p>

              {/* Student Info */}
              <div className="flex items-center gap-3 sm:gap-4">
                <ImageWithFallback
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover ring-2 sm:ring-4 ring-[#D4A574]/50"
                />
                <div>
                  <h4 className="font-bold text-base sm:text-lg">{currentTestimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-white/90">
                    {currentTestimonial.degree}, {currentTestimonial.university}
                  </p>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 pt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all rounded-full ${
                    currentIndex === index
                      ? 'bg-[#6B2C3E] w-6 sm:w-8 h-2'
                      : 'bg-gray-300 w-2 h-2 hover:bg-[#D4A574]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}