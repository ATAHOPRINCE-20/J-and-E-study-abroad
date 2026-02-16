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

export function UKDestinationPage() {
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
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
            alt="Study in United Kingdom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.5), rgba(0, 0, 0, 0.4))', zIndex: 2 }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">Study in the UK</h1>
          <p className="text-lg sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Build your future in a global hub of academic excellence and historic prestige.
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
                The Heritage of <span className="text-[#CF142B]">Gold Standard</span> Education
              </h2>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  The United Kingdom is home to some of the world's most ancient and respected educational institutions. From the legendary spires of Oxford to the modern research hubs in London, the UK offers a diverse range of programs designed to prepare students for global leadership. 
                </p>
                <p className="text-lg leading-relaxed font-medium text-gray-900 italic">
                  "A degree from a UK university is a mark of distinction that opens doors at the highest levels of global industry."
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
                  src="https://images.unsplash.com/photo-1543735206-a24c53f2203f" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad" 
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
          Why Study in the UK
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
                    ? "text-[#C8102E]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
                style={{ color: activeSection === item.id ? '#C8102E' : '' }}
              >
                {item.label}
                <div
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#C8102E] transition-all duration-300 ${
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
                <span className="text-[#CF142B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
                  Academics
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                  Academic Excellence Without Compromise
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  UK universities are consistently ranked at the top of the QS World University Rankings. With shorter course durations compared to other countries—typically 3 years for under-graduate and 1 year for Masters—international students can graduate sooner and start their careers with high-impact qualifications.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Prestigious Russell Group of Research Universities",
                  "Intensive 1-year Masters programs",
                  "Global leader in Law, Finance, and the Arts",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="text-[#CF142B] shrink-0" size={24} />
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
                <ImageWithFallback src="https://images.unsplash.com/photo-1507679799987-c73779587ccf" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1497366754035-f200968a6e72" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-4">
              <div>
                <span className="text-[#CF142B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Experience</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">London and Beyond</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  The UK's Graduate Route visa (Post-Study Work) allows international students to stay and work in the UK for 2 years after completing their degree. London is a global financial heart, but cities like Manchester, Birmingham, and Edinburgh are also major tech and creative hubs offering incredible career entry points.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex justify-between">Graduate Route <ArrowRight size={20} className="text-[#CF142B]" /></h4>
                  <p className="text-2xl font-black text-gray-900">2 Years <span className="text-sm font-medium text-gray-500 ml-1">post-study</span></p>
                </div>
                <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex justify-between">Part-Time Jobs <ArrowRight size={20} className="text-[#CF142B]" /></h4>
                  <p className="text-2xl font-black text-gray-900">20 Hrs <span className="text-sm font-medium text-gray-500 ml-1">per week</span></p>
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
                <span className="text-[#CF142B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Lifestyle</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">Quintessentially British</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                The UK offers a rich tapestry of cultural experiences. From the historic castles of Edinburgh to the iconic landmarks of London and the rolling green hills of the Cotswolds, life in the UK is a blend of heritage and modernity. Enjoy world-class theater, a legendary music scene, and some of the best sports stadiums on the planet.
              </p>
            </div>
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch order-1 lg:order-2">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback src="https://images.unsplash.com/photo-1543735206-a24c53f2203f" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad" className="w-full h-full object-cover" />
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
                <ImageWithFallback src="https://images.unsplash.com/photo-1517602302552-4732e76a5c24" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1511632765486-a01980e01a18" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-4">
              <div>
                <span className="text-[#CF142B] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Community</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">Diversity and Global Connection</h3>
                <p className="text-gray-600 leading-relaxed text-lg mt-8">
                  The UK is a truly international society, with student populations representing every corner of the globe. This creates a vibrant, multicultural atmosphere where you can learn from different perspectives and build a worldwide professional network.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mt-6">
                  British universities provide extensive support networks, from personal tutors to international student offices, ensuring you feel supported and socially integrated throughout your studies.
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
            <span className="text-[#CF142B] text-sm font-bold uppercase tracking-widest mb-4 block">Student Visa</span>
            <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">Student Visa (CAS)</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Seamless guidance for your Student Visa application.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "CAS Number", desc: "Receive your Confirmation of Acceptance for Studies." },
              { title: "Financials", desc: "Show evidence of funds to cover tuition and maintenance." },
              { title: "Online App", desc: "Submit your student visa application via GOV.UK." },
              { title: "BRP Card", desc: "Collect your Biometric Residence Permit upon arrival." },
            ].map((step, i) => (
              <div key={step.title} className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col">
                <span className="text-2xl font-bold text-[#CF142B]">0{i + 1}</span>
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
          <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad" alt="Apply now" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.6), rgba(0, 0, 0, 0.6))', zIndex: 2 }}></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Start Your UK Journey</h2>
          <p className="mb-10 text-xl text-white/90">Join the elite network of UK university graduates.</p>
          <Link to="/contact" className="px-6 py-3 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all shadow-lg">
            Speak to Advisor
          </Link>
        </div>
      </section>
      <OtherDestinations currentCountry="UK" />
    </div>
  );
}
