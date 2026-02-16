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

export function IrelandDestinationPage() {
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
            src="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e"
            alt="Study in Ireland"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.5), rgba(0, 0, 0, 0.4))', zIndex: 2 }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">Study in Ireland</h1>
          <p className="text-lg sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Experience world-class research, ancient heritage, and a vibrant modern economy in the Heart of Europe.
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
                Your Emerald Gateway to <span className="text-[#10B981]">Success</span>
              </h2>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Ireland is a hub of innovation and creativity, home to some of the world's most prestigious universities and the European headquarters of global giants like Google, Apple, and Facebook. Known for its warm hospitality ("Céad Míle Fáilte"), Ireland offers a safe, English-speaking environment for students to excel academically and professionally.
                </p>
                <p className="text-lg leading-relaxed font-medium text-gray-900 italic">
                  "Ireland offers an unbeatable combination of high-quality education and access to a massive European job market."
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
                  src="https://images.unsplash.com/photo-1549247796-5d8f09e9034b" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1528728329032-2972f65dfb3f" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1529260839312-41777c08238d" 
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
          Why Study in Ireland
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
                    ? "text-[#10B981]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
                <div
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#10B981] transition-all duration-300 ${
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
                <span className="text-[#10B981] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
                  Academics
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                  Europe's Center of Research & Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Irish universities are among the top 1% of research institutions in the world. With campuses that blend historic architecture with cutting-edge laboratories, Ireland provides a rigorous academic environment. The Irish National Framework of Qualifications (NFQ) ensures your degree is recognized and respected globally.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Home to historic Trinity College Dublin",
                  "Strong focus on Tech, Pharma, and Finance",
                  "English-speaking destination in the EU",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="text-[#10B981] shrink-0" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch order-1 lg:order-2">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback src="https://images.unsplash.com/photo-1590579491624-f98f36d4c763" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1564959130747-897fb406b9af" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1617246610501-d11b4829436b" className="w-full h-full object-cover" />
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
                <ImageWithFallback src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1521791136064-7986c29596ad" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1552664730-d307ca884978" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-4">
              <div>
                <span className="text-[#10B981] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Experience</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">Vibrant Career Pathways</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Ireland's "Third Level Graduate Programme" allows international graduates to remain in Ireland to look for work or apply for a work permit for up to 24 months. With the world's leading companies choosing Ireland as their European base, students have unprecedented access to internships and high-value career opportunities.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex justify-between">Graduate Rights <ArrowRight size={20} className="text-[#10B981]" /></h4>
                  <p className="text-2xl font-black text-gray-900">24 Months <span className="text-sm font-medium text-gray-500 ml-1">post-study</span></p>
                </div>
                <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex justify-between">Work Rights <ArrowRight size={20} className="text-[#10B981]" /></h4>
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
                <span className="text-[#10B981] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Lifestyle</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">The Joy of Irish Living</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Known for its breathtaking landscapes and safe, friendly cities, Ireland offers a life balance like no other. Whether you're hiking the Cliffs of Moher or enjoying traditional music in a cozy Dublin pub, the "craic" is never far away. Students in Ireland experience a deep sense of community and a rich cultural heritage.
              </p>
            </div>
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch order-1 lg:order-2">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback src="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1549247796-5d8f09e9034b" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1528728329032-2972f65dfb3f" className="w-full h-full object-cover" />
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
                <ImageWithFallback src="https://images.unsplash.com/photo-1529126300588-48ed57bb1c20" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1521791136064-7986c29596ad" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-4">
              <div>
                <span className="text-[#10B981] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Community</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">The Warmest Welcome</h3>
                <p className="text-gray-600 leading-relaxed text-lg mt-8">
                  Ireland is world-famous for its "thousand welcomes." For international students, this translates into a safe, supportive, and incredibly sociable environment. From vibrant student societies to local community groups, you'll find it easy to make friends and feel at home in the Emerald Isle.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mt-6">
                  As an English-speaking country in the EU, Ireland provides a seamless cultural transition while offering a uniquely European perspective on community and global citizenship.
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
            <span className="text-[#10B981] text-sm font-bold uppercase tracking-widest mb-4 block">Student Visa</span>
            <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">Irish Study Visa</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Full support for your Ireland Study Visa (D-Type) application.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Offer Letter", desc: "Receive a firm offer of a place on a full-time course." },
              { title: "Fees Payment", desc: "Pay tuition fees in full to your chosen institution." },
              { title: "Visa App", desc: "Submit your online application via AVATS." },
              { title: "Arrival", desc: "Register with INIS upon entry to Ireland." },
            ].map((step, i) => (
              <div key={step.title} className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col">
                <span className="text-2xl font-bold text-[#10B981]">0{i + 1}</span>
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
          <img src="https://images.unsplash.com/photo-1564959130747-897fb406b9af" alt="Apply now" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.6), rgba(0, 0, 0, 0.6))', zIndex: 2 }}></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Begin Your Irish Adventure</h2>
          <p className="mb-10 text-xl text-white/90">Join thousand of international students thriving in Ireland.</p>
          <Link to="/contact" className="px-6 py-3 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all shadow-lg">
            Speak to Advisor
          </Link>
        </div>
      </section>
      <OtherDestinations currentCountry="Ireland" />
    </div>
  );
}
