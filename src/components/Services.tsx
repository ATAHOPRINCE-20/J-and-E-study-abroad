import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';

interface ServicesProps {
  limit?: number;
  showViewAll?: boolean;
}

export type Service = {
  slug: string;
  image: string;
  title: string;
  description?: string;
  bullets?: string[];
  fullDescription?: string;
  paragraphs?: string[];
};

export const allServices: Service[] = [
  {
    slug: 'Education and Career Counseling',
    image:
      'https://images.unsplash.com/photo-1460518451285-97b6aa326961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Education and Career Counseling',
    description:
      'Counselling Covers:',
    bullets: [
    'Career guidance and goal setting',
    'Course and qualification assessment',
    'Entry requirement evaluation',
    'Alternative education pathways',
    'Long-term career planning'
  ],
    fullDescription: 'Our counselling services are student-centred, practical, and future-oriented. We help you understand your strengths and match them with realistic education pathways.',
    paragraphs: [
      'This service is ideal for students unsure about what to study or where to study.',
    ],
  },
  {
    slug: 'application-support',
    image:
      'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Application Support Services',
    description: 'Our team offers step-by-step support with:',
    bullets: [
      'Online and manual applications',
      'Statement of Purpose (SOP) guidance',
      'Motivation letters and CV preparation',
      'Academic document organisation',
      'Application tracking and follow-ups',
    ],
    fullDescription: 'We walk with you through every stage of the application process to ensure accuracy and completeness.',
    paragraphs: [
      'Our goal is to maximise your chances of admission by presenting a strong and well-prepared application.'
    ],
  },
  {
    slug: 'visa-immigration',
    image:
      'https://images.unsplash.com/photo-1554224155-1696413565d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Visa & Immigration Guidance',
    description: 'We assist students with:',
    bullets: [
      'Understanding visa requirements',
      'Explanation of visa requirements and processes',
      'Document preparation and review',
      'Application form guidance',
      'Visa interview preparation',
      'Submission readiness checks'
       
    ],
    fullDescription: 'Navigating visa requirements is often the most stressful part of studying abroad. Our immigration specialists stay updated on the latest policy changes for the UK, USA, Canada, Europe, and beyond. We provide comprehensive checklists, mock interview sessions, and detailed guidance on financial documentation to maximize your chances of visa approval.',
  },
  {
    slug: 'Education-Pathway-Advisory',
    image:
      'https://images.unsplash.com/photo-1567206163313-9e34c830557a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Education Pathway Advisory',
    description: 'Pathway Options Include:',
    bullets: [
      'Foundation programs',
      'Diploma-to-degree pathways',
      'Bridge courses',
      'Language preparation programs',
      
       
    ],
    fullDescription: 'Not everyone meets direct entry requirements — and that’s okay. We guide students through alternative pathways that still lead to recognised qualifications.',
    paragraphs:['We help you choose legitimate pathways that save time and money while protecting your academic future.'],
  },
  {
    slug: 'pre-departure-and-student-support',
    image:
      'https://images.unsplash.com/photo-1758525861622-f4e7ac86a2d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Pre-Departure and Student Support',
    description: 'Pre-Departure Support Includes:',
    fullDescription: 'Before you travel, we ensure you are fully prepared for your new academic and cultural environment.',
    bullets:[
      'Travel and settlement guidance',
      'Academic expectations briefing',
      'Cultural adjustment tips',
      '24/7 emergency support contacts',
      'Student responsibility orientation',
    ],
    paragraphs:[
      'Our support continues even after you arrive, with check-ins and assistance throughout your studies.'
    ],
  },
  // {
  //   slug: 'scholarships-aid',
  //   image:
  //     'https://images.unsplash.com/photo-1538356390198-964cc56764d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  //   title: 'Scholarships & Aid',
  //   description: 'Guidance to find and apply for scholarships and financial aid opportunities.',
  //   fullDescription: 'We believe that financial constraints should not stand in the way of global education. Our consultants help you identify merit-based, need-based, and government-funded scholarships. We guide you through the scholarship application process, helping you articulate your value to potential donors.',
  // },
  // {
  //   slug: 'scholarships-aid',
  //   image:
  //     'https://images.unsplash.com/photo-1538356390198-964cc56764d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  //   title: 'Scholarships & Aid',
  //   description: 'Guidance to find and apply for scholarships and financial aid opportunities.',
  //   fullDescription: 'We believe that financial constraints should not stand in the way of global education. Our consultants help you identify merit-based, need-based, and government-funded scholarships. We guide you through the scholarship application process, helping you articulate your value to potential donors.',
  // },
];

export function Services({ limit, showViewAll = false }: ServicesProps) {
  const displayedServices = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#6B2C3E]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A574]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-6 py-2 bg-[#6B2C3E]/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#6B2C3E] tracking-wide uppercase">Services Offered</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6 font-bold">
            Comprehensive Study Abroad <span className="text-[#6B2C3E]">Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            From application to arrival, we provide end-to-end support for your international education journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#6B2C3E]/30 hover:-translate-y-2"
            >
              {/* Service Image */}
              <Link to={`/services/${service.slug}`} className="block relative h-56 overflow-hidden outline-none">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </Link>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#6B2C3E] transition-colors">
                  {service.title}
                </h3>

                {service.paragraphs && service.paragraphs.length > 0 && (
                  <div className="space-y-2 mb-3">
                    {service.paragraphs.map((p, idx) => (
                      <p key={idx} className="text-sm text-gray-600 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                )}

                {service.description && (
                  <p className="text-sm text-gray-600 leading-relaxed mb-3 font-semibold">
                    {service.description}
                  </p>
                )}

                {Array.isArray(service.bullets) && service.bullets.length > 0 && (
                  <ul className="text-sm text-gray-600 leading-relaxed mb-4 list-disc pl-5 space-y-1">
                    {service.bullets.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                <Link 
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B2C3E] group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        {showViewAll && (
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}