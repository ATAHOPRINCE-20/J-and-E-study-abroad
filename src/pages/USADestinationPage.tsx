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

export function USADestinationPage() {
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
            src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74"
            alt="Study in United States"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.5), rgba(0, 0, 0, 0.4))', zIndex: 2 }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">Study in the USA</h1>
          <p className="text-lg sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Innovate, lead, and excel in the world's most dynamic educational landscape.
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
                Land of Opportunity and <span className="text-[#B22234]">Innovation</span>
              </h2>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  The United States is home to more top-ranked universities than any other country. Known for its flexible curriculum, cutting-edge research, and diverse student body, the USA offers a truly global education. From the tech innovation of Silicon Valley to the financial power of Wall Street, students have direct access to the world's leading economies.
                </p>
                <p className="text-lg leading-relaxed font-medium text-gray-900 italic">
                  "A US education is more than a degree; it's an immersive experience in the heart of global innovation."
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
                  src="https://images.unsplash.com/photo-1541339907198-e08756edd811" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1523050335102-c89b43963428" 
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
      </section>

      {/* ------------------------------------ */}
      {/* SECTION TITLE */}
      {/* ------------------------------------ */}

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Why Study in the USA
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
                    ? "text-[#3C3B6E]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
                <div
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#3C3B6E] transition-all duration-300 ${
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
                <span className="text-[#3C3B6E] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
                  Academics
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                  World-Class Powerhouses of Learning
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  With over 4,000 degree-granting institutions, the US offers unparalleled choice. Whether you're aiming for the elite Ivy League, a massive state research university, or a specialized liberal arts college, the US system is designed to help you find your perfect fit and customize your academic journey through "majors" and "minors".
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Home to the world-renowned Ivy League",
                  "Global leader in STEM and Entrepreneurship",
                  "Flexible 'Liberal Arts' educational model",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="text-[#3C3B6E] shrink-0" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch order-1 lg:order-2">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback src="https://images.unsplash.com/photo-1562774053-701939374585" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1492538363713-33bc8836ba33" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1523580494863-6f3031224b94" className="w-full h-full object-cover" />
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
                <ImageWithFallback src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" className="w-full h-full object-cover" />
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
                <span className="text-[#3C3B6E] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Experience</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">Career Catalyst: OPT & CPT</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  The US offers Optional Practical Training (OPT), allowing graduates to work for 12 months in their field. For STEM graduates, this can be extended for an additional 24 months, providing 3 full years of work experience in the world's largest economy. Curricular Practical Training (CPT) also allows for internships during your studies.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex justify-between">STEM OPT Extension <ArrowRight size={20} className="text-[#3C3B6E]" /></h4>
                  <p className="text-2xl font-black text-gray-900">3 Years <span className="text-sm font-medium text-gray-500 ml-1">total work</span></p>
                </div>
                <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex justify-between">Internships <ArrowRight size={20} className="text-[#3C3B6E]" /></h4>
                  <p className="text-2xl font-black text-gray-900">CPT <span className="text-sm font-medium text-gray-500 ml-1">during study</span></p>
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
                <span className="text-[#3C3B6E] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Lifestyle</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">The American Campus Dream</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Experience the vibrant life of an American college campus. From high-stakes college football games and diverse student clubs to the cultural richness of major cities and the natural beauty of national parks, the US offers a lifestyle of endless variety. It's a place where you can truly find your tribe and explore your passions.
              </p>
            </div>
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch order-1 lg:order-2">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1541339907198-e08756edd811" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1523050335102-c89b43963428" className="w-full h-full object-cover" />
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
                <ImageWithFallback src="https://images.unsplash.com/photo-1521791136064-7986c29596ad" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-4">
              <div>
                <span className="text-[#3C3B6E] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Community</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">Diversity and Global Connection</h3>
                <p className="text-gray-600 leading-relaxed text-lg mt-8">
                  The USA is a truly international society, with student populations representing every corner of the globe. This creates a vibrant, multicultural atmosphere where you can learn from different perspectives and build a worldwide professional network.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mt-6">
                  American universities provide extensive support networks, from personal tutors to international student offices, ensuring you feel supported and socially integrated throughout your studies.
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
            <span className="text-[#3C3B6E] text-sm font-bold uppercase tracking-widest mb-4 block">Student Visa</span>
            <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">F-1 Student Visa</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Expert navigation through the SEVIS and F-1 visa process.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "I-20 Form", desc: "Receive your Certificate of Eligibility from your school." },
              { title: "SEVIS Fee", desc: "Pay the I-901 SEVIS fee to activate your record." },
              { title: "DS-160", desc: "Complete the online non-immigrant visa application." },
              { title: "Interview", desc: "Attend your visa interview at the US Embassy/Consulate." },
            ].map((step, i) => (
              <div key={step.title} className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col">
                <span className="text-2xl font-bold text-[#3C3B6E]">0{i + 1}</span>
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
          <img src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74" alt="Apply now" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.6), rgba(0, 0, 0, 0.6))', zIndex: 2 }}></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Your US Future Starts Here</h2>
          <p className="mb-10 text-xl text-white/90">Join thousands of students achieving their dreams in the USA.</p>
          <Link to="/contact" className="px-6 py-3 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all shadow-lg">
            Speak to Advisor
          </Link>
        </div>
      </section>
      <OtherDestinations currentCountry="USA" />
    </div>
  );
}
