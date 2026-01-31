import { Services } from '../components/Services';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen text-white overflow-hidden flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1565598494553-5685d762031c"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.5), rgba(0, 0, 0, 0.4))', zIndex: 2 }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-base sm:text-xl text-white/90">Comprehensive support for your study abroad journey</p>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Ready to Start Your Journey?</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">Book a free consultation with our expert counselors today</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold text-sm sm:text-base"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}