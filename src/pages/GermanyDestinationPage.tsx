import { useRef, useState, useEffect } from "react";
import {
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Globe,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { OtherDestinations } from "../components/OtherDestinations";

export function GermanyDestinationPage() {
  const academicsRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const lifeRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("academics");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const refs = [
      { id: "academics", ref: academicsRef },
      { id: "career", ref: careerRef },
      { id: "life", ref: lifeRef },
      { id: "community", ref: communityRef },
    ];

    refs.forEach((item) => {
      if (item.ref.current) {
        item.ref.current.id = item.id;
        observer.observe(item.ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FAFAFA]">
      {/* ------------------------------------ */}
      {/* HERO SECTION */}
      {/* ------------------------------------ */}
      <section className="relative min-h-screen text-white overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b"
            alt="Study in Germany"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.5), rgba(0, 0, 0, 0.4))', zIndex: 2 }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">Study in Germany</h1>
          <p className="text-lg sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Empower your career with world-class engineering and tuition-free excellence in Europe's economic powerhouse.
          </p>
        </div>
      </section>

      {/* ------------------------------------ */}
      {/* INTRODUCTION SECTION */}
      {/* ------------------------------------ */}
      <section className="py-24 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Content */}
            <div className="max-w-2xl">
              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
                Overview
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">
                Precision Education, <span className="text-[#FFCC00]">Global Impact</span>
              </h2>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Germany is a global leader in technology, engineering, and manufacturing. With a significant number of English-taught programs and public universities that offer virtually tuition-free education to international students, Germany is one of the most attractive study destinations in the world. It provides a unique combination of historic academic traditions and futuristic research.
                </p>
                <p className="text-lg leading-relaxed font-medium text-gray-900 italic">
                  "Germany's dual-education system and strong industry ties ensure students graduate with both theoretical knowledge and practical expertise."
                </p>
              </div>

              <Link
                to="/contact"
                className="mt-8 px-6 py-3 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all shadow-md"
              >
                Start Your Journey
              </Link>
            </div>

            {/* Right: Premium Image Grid */}
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1527610276295-f3c7ea134376" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------ */}
      {/* SECTION TITLE */}
      {/* ------------------------------------ */}

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Why Study in Germany
        </h2>
      </div>

      {/* ------------------------------------ */}
      {/* NAVIGATION BAR */}
      {/* ------------------------------------ */}
      <div className="border-y sticky top-24 bg-white/80 backdrop-blur-md z-30 shadow-md">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex h-24 justify-between items-stretch text-sm font-semibold tracking-wider uppercase">
            {[
              { label: "Academics", ref: academicsRef, id: "academics" },
              { label: "Experience", ref: careerRef, id: "career" },
              { label: "Life", ref: lifeRef, id: "life" },
              { label: "Community", ref: communityRef, id: "community" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.ref)}
                className={`h-full flex items-center transition-all duration-300 relative ${
                  activeSection === item.id
                    ? "text-[#000000]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
                <div
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#000000] transition-all duration-300 ${
                    activeSection === item.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------------------------ */}
      {/* CONTENT WRAPPER */}
      {/* ------------------------------------ */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32 space-y-40">

        {/* ACADEMICS */}
        <div ref={academicsRef} className="scroll-mt-40">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            <div className="flex flex-col order-2 lg:order-1 justify-between py-4">
              <div>
                <span className="text-[#000000] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
                  Academics
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                  High-Quality Public Education
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  German degrees are synonymous with quality and practical relevance. The country's TU9 alliance represents the leading technical universities, but Germany also excels in Medicine, Law, and Social Sciences. With a growing number of English-taught Bachelor's and Master's programs, Germany has never been more accessible to international students.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Tuition-free public universities",
                  "Global leader in Mechanical & Automotive Engineering",
                  "Prestigious TU9 technical university alliance",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="text-[#000000] shrink-0" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch order-1 lg:order-2">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback src="https://images.unsplash.com/photo-1541339907198-e08756edd811" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1523050335102-c89b43963428" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div ref={careerRef} className="scroll-mt-40">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback src="https://images.unsplash.com/photo-1521737711867-e3b97375f902" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1552664730-d307ca884978" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-4">
              <div>
                <span className="text-[#000000] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Experience</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">Work in the Heart of Europe</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Germany offers an 18-month post-study work visa for graduates to find a job matching their qualifications. As Europe's strongest economy, there is a massive demand for skilled international talent, especially in Engineering, IT, and Healthcare. Students can also work up to 20 hours a week while studying.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex justify-between">Job Search Visa <ArrowRight size={20} className="text-[#000000]" /></h4>
                  <p className="text-2xl font-black text-gray-900">18 Months <span className="text-sm font-medium text-gray-500 ml-1">post-study</span></p>
                </div>
                <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex justify-between">Student Jobs <ArrowRight size={20} className="text-[#000000]" /></h4>
                  <p className="text-2xl font-black text-gray-900">140 Full Days <span className="text-sm font-medium text-gray-500 ml-1">per year</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LIFESTYLE */}
        <div ref={lifeRef} className="scroll-mt-40">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            <div className="flex flex-col order-2 lg:order-1 justify-between py-4">
              <div>
                <span className="text-[#000000] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Lifestyle</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">Culture, Efficiency, and Safety</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Germany offers a high standard of living and a rich cultural scene. Whether you're exploring the historic wall in Berlin, the beer gardens in Munich, or the castle ruins along the Rhine, life in Germany is efficient, clean, and safe. With a central location in Europe, it's also the perfect base to explore the rest of the continent.
              </p>
            </div>
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch order-1 lg:order-2">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1527610276295-f3c7ea134376" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COMMUNITY */}
        <div ref={communityRef} className="scroll-mt-40">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback src="https://images.unsplash.com/photo-1511632765486-a01980e01a18" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-4">
              <div>
                <span className="text-[#000000] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Community</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">Innovation Through Diversity</h3>
                <p className="text-gray-600 leading-relaxed text-lg mt-8">
                  Germany's academic community is one of the most international in Europe. With students and researchers from over 100 countries, you'll be part of a diverse and intellectually stimulating environment that values different perspectives and collaborative problem-solving.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mt-6">
                  German universities offer extensive extracurricular opportunities, from tech clubs and sports teams to cultural festivals, ensuring a well-rounded and socially connected student experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VISA PROCESS */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#000000] text-sm font-bold uppercase tracking-widest mb-4 block">Student Visa</span>
            <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">German Student Visa</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Expert navigation through the Blocked Account and National Visa process.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Zulassung", desc: "Receive your letter of admission from a German university." },
              { title: "Blocked Account", desc: "Open a Sperrkonto to prove financial sufficiency." },
              { title: "Visa App", desc: "Apply for a National Visa (type D) at the German embassy." },
              { title: "Registration", desc: "Complete Meldebescheinigung at the local citizens' office." },
            ].map((step, i) => (
              <div key={step.title} className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col">
                <span className="text-2xl font-bold text-[#000000]">0{i + 1}</span>
                <h4 className="mt-4 text-gray-900 font-bold">{step.title}</h4>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="relative py-32 text-white text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b" alt="Apply now" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.6), rgba(0, 0, 0, 0.6))', zIndex: 2 }}></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Master Your Future in Germany</h2>
          <p className="mb-10 text-xl text-white/90">Join a tradition of engineering and scientific excellence.</p>
          <Link to="/contact" className="px-6 py-3 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all shadow-lg">
            Speak to Advisor
          </Link>
        </div>
      </section>
      <OtherDestinations currentCountry="Germany" />
    </div>
  );
}
