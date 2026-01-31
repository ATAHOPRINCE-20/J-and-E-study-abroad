import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-[#6B2C3E] via-[#7B3C4E] to-[#8B4C5E] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-white space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Welcome to J&E Study Abroad!
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">
              J&amp;E Study Abroad Company Limited is a professional education consultancy based in
Kampala, Uganda, dedicated to guiding students and professionals toward credible and
life changing study abroad opportunities. We provide authentic, transparent, and
student centred support services to help our clients successfully access international education
pathways.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#D4A574] hover:bg-[#C49564] text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              More About Us
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>

          {/* Right Side - Photo Collage */}
          <div className="relative">
            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px]">
              {/* Photo 1 - Top Left */}
              <div className="absolute top-0 left-0 w-36 sm:w-48 lg:w-56 bg-white p-2 sm:p-3 shadow-2xl transform rotate-[-8deg] hover:rotate-[-4deg] transition-transform duration-300 z-20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1658252844173-ba5de80a3015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudCUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjkyNjkwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Student 1"
                  className="w-full h-40 sm:h-48 lg:h-56 object-cover"
                />
              </div>

              {/* Photo 2 - Top Right */}
              <div className="absolute top-8 sm:top-12 right-0 sm:right-8 lg:right-12 w-32 sm:w-44 lg:w-52 bg-white p-2 sm:p-3 shadow-2xl transform rotate-[5deg] hover:rotate-[2deg] transition-transform duration-300 z-30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758270705902-f50dde4add9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdW5pdmVyc2l0eSUyMHN0dWRlbnRzJTIwaGFwcHl8ZW58MXx8fHwxNzY5MjY5MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Student 2"
                  className="w-full h-36 sm:h-44 lg:h-52 object-cover"
                />
              </div>

              {/* Photo 3 - Bottom Left */}
              <div className="absolute bottom-8 left-8 sm:left-12 lg:left-16 w-28 sm:w-40 lg:w-48 bg-white p-2 sm:p-3 shadow-2xl transform rotate-[12deg] hover:rotate-[8deg] transition-transform duration-300 z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1731983568664-9c1d8a87e7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudCUyMHN0dWR5aW5nJTIwYm9va3N8ZW58MXx8fHwxNzY5MjY5MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Student 3"
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover"
                />
              </div>

              {/* Photo 4 - Bottom Right */}
              <div className="absolute bottom-0 right-0 w-40 sm:w-52 lg:w-64 bg-white p-2 sm:p-3 shadow-2xl transform rotate-[-4deg] hover:rotate-[-1deg] transition-transform duration-300 z-40">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1765648636065-fd5c0884b629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjkyNjkwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Student 4"
                  className="w-full h-44 sm:h-56 lg:h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}