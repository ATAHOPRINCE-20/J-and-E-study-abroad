import { useRef, useState, useEffect } from "react";
import {
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Globe,
  Briefcase,
  Plane,
  FileCheck,
} from "lucide-react";
import { Link } from "react-router";
// import { CanadaUniversities } from "../components/CanadaUniversities";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { OtherDestinations } from "../components/OtherDestinations";

export function CanadaDestinationPage() {
  // Navigation refs for smooth scroll (optional, mirroring Australia)
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
            src="https://images.unsplash.com/photo-1503614472-8c97d50e92ce"
            alt="Study in Canada"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.5), rgba(0, 0, 0, 0.4))', zIndex: 2 }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">Study in Canada</h1>
          <p className="text-lg sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Unlock your potential with a world-class education in one of the most welcoming and diverse countries on the planet.
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
                Your Future Starts in <span className="text-[#2EB3C1]">Canada</span>
              </h2>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Canada is globally recognized for its exceptional quality of education, safe cities, and a multicultural environment that makes international students feel right at home. From the bustling tech hubs of Toronto to the scenic beauty of Vancouver, Canada offers a unique blend of academic excellence and an unparalleled quality of life.
                </p>
                <p className="text-lg leading-relaxed font-medium text-gray-900 italic">
                  "Canada remains a top choice for students seeking both a prestigious degree and a clear path to long-term career success."
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
              {/* Main Portrait */}
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stacked Side Images */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" 
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
          Why Study in Canada
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
                    ? "text-[#2563EB]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
                <div
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#2563EB] transition-all duration-300 ${
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

        {/* ================================= */}
        {/* ACADEMICS SECTION */}
        {/* ================================= */}
        <div ref={academicsRef} className="scroll-mt-40">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            
            {/* Left: Content */}
            <div className="flex flex-col order-2 lg:order-1 justify-between py-4">
              <div>
                <span className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
                  Academics
                </span>
                
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                  Globally Recognized Canadian Education
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  Canadian universities and colleges are ranked among the best in the world. With a strong emphasis on research, innovation, and practical learning, a Canadian degree is a powerful asset in the global job market. The education system is publicly funded and strictly monitored to ensure the highest standards of quality across all provinces.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Prestigious U15 Group of Research Universities",
                  "Industry-aligned college and polytechnic programs",
                  "World-leading research facilities & faculty",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Grid */}
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch order-1 lg:order-2">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1523050335102-c89b43963428" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1541339907198-e08756edd811" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1498243639311-6bbec4d9a2a7" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* CAREER / EXPERIENCE SECTION */}
        {/* ================================= */}
        <div ref={careerRef} className="scroll-mt-40">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            
            {/* Left: Grid */}
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-between py-4">
              <div>
                <span className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
                  Experience
                </span>
                
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                  Work and Thrive in Canada
                </h3>

                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Canada offers international students the opportunity to work while they study and provides one of the most generous post-graduation work permit (PGWP) programs in the world. This allows you to gain valuable Canadian work experience that can even contribute toward future permanent residency applications.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    Students can typically work up to 24 hours per week during academic sessions and full-time during breaks. After graduation, students of eligible programs can stay and work in Canada for up to 3 years.
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-bold text-gray-900">Work While Studying</h4>
                    <ArrowRight className="text-[#2563EB] transform group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                  <p className="text-2xl font-black text-gray-900">
                    24 Hrs <span className="text-sm font-medium text-gray-500 ml-1">per week</span>
                  </p>
                </div>

                <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-bold text-gray-900">After Graduation</h4>
                    <ArrowRight className="text-[#2563EB] transform group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                  <p className="text-2xl font-black text-gray-900">
                    Up to 3 Years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* LIFESTYLE SECTION */}
        {/* ================================= */}
        <div ref={lifeRef} className="scroll-mt-40">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            
            {/* Left: Content */}
            <div className="flex flex-col order-2 lg:order-1 justify-between py-4">
              <div>
                <span className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
                  Lifestyle
                </span>
                
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                  Embrace the Canadian Quality of Life
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                Canada is consistently ranked as one of the best countries in the world to live in. Whether you enjoy exploring vibrant cosmopolitan cities like Montreal and Toronto or prefer the stunning landscapes of the Rocky Mountains and the Atlantic coast, Canada has something for everyone. Canadians are known for their hospitality and kindness, ensuring a warm welcome for all.

International students in Canada enjoy a safe, stable, and high-quality environment where they can grow personally and professionally while experiencing a unique blend of cultures.
              </p>
            </div>

            {/* Right: Grid */}
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch order-1 lg:order-2">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1502021680532-73d74486d5ee" 
                    className="w-full h-full object-cover"
                   />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1526481280693-3bfa756160f7" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* COMMUNITY SECTION */}
        {/* ================================= */}
        <div ref={communityRef} className="scroll-mt-40">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            
            {/* Left: Grid */}
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1521791136064-7986c29596ad" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-between py-4">
              <div>
                <span className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
                  Community
                </span>
                
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                  A Diverse and Inclusive Society
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                Canada’s strength lies in its diversity. As a nation built on immigration, Canada is exceptionally welcoming to international students from all corners of the globe. You’ll find a supportive community that celebrates different cultures and provides numerous resources to help you integrate and succeed.

From student associations to municipal support programs, Canada is dedicated to ensuring its international student population thrives in a safe and inclusive environment.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ------------------------------------ */}
      {/* VISA PROCESS SECTION */}
      {/* ------------------------------------ */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 px-4">
            <span className="text-[#2563EB] text-sm font-bold uppercase tracking-widest mb-4 block">Student Visa</span>
            <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">Study Permit Process</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              We guide you through the entire Canadian study permit application process, ensuring all requirements are met for a successful outcome.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Acceptance", desc: "Obtain a Letter of Acceptance from a Designated Learning Institution (DLI)." },
              { title: "Documents", desc: "Gather required documents including proof of funds and identification." },
              { title: "Application", desc: "Apply for your study permit online through the IRCC website." },
              { title: "Finalization", desc: "Complete biometrics and medical exams if required by your province." },
            ].map((step, i) => (
              <div key={step.title} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                <span className="text-2xl font-bold text-[#6B2C3E]">
                  0{i + 1}
                </span>
                <h4 className="mt-4 text-gray-900 font-bold">{step.title}</h4>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------------------------ */}
      {/* CTA SECTION */}
      {/* ------------------------------------ */}
      <section className="relative py-32 text-white text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517091851292-4d9adbb1bd8d"
            alt="Apply now"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.6), rgba(0, 0, 0, 0.6))', zIndex: 2 }}></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Canadian Dream Today
          </h2>

          <p className="mb-10 text-xl text-white/90 leading-relaxed">
            Our expert advisors help with university selection, study permit applications,
            and settlement guidance every step of the way.
          </p>

          <Link
            to="/contact"
            className="px-6 py-3 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all shadow-lg"
          >
            Speak to Advisor
          </Link>
        </div>
      </section>

      <OtherDestinations currentCountry="Canada" />
    </div>
  );
}
