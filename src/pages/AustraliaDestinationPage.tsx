import { useRef, useState, useEffect } from "react";
import {
  GraduationCap,
  Briefcase,
  Heart,
  Users,
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  FileCheck,
} from "lucide-react";
import { Link } from "react-router";
// import { AustraliaUniversities } from "../components/AustraliaUniversities";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { OtherDestinations } from "../components/OtherDestinations";

export function WhyStudyAustralia() {

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
    <div>
      {/* ------------------------------------ */}
      {/* HERO */}
      {/* ------------------------------------ */}

      <section className="relative min-h-screen text-white overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9"
            alt="Study in Australia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.5), rgba(0, 0, 0, 0.4))', zIndex: 2 }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">Study in Australia</h1>
          <p className="text-base sm:text-xl text-white/90 leading-relaxed">
            Experience world-class education, sun-drenched lifestyles, and
            transparent career pathways in one of the world's most beautiful countries.
          </p>
        </div>
      </section>

    <section className="bg-white">

      {/* ------------------------------------ */}
      {/* INTRODUCTION */}
      {/* ------------------------------------ */}

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-[1.1] mb-8">
                Your Journey to <span className="text-[#2563EB]">Study in Australia</span> Starts Here
              </h2>
              
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Australia is more than just a beautiful destination; it's a global leader 
                in education. With world-ranked universities, a vibrant outdoor culture, 
                and a strong economy, it's the perfect place to build your future. 
                Learn everything you need to know about starting your Australian 
                adventure right here.
              </p>

              <Link
                to="/contact"
                className="mt-8 px-6 py-3 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all shadow-md"
              >
                Start Your Journey
              </Link>
            </div>

            {/* Right Image Layout */}
            <div className="relative flex gap-4 h-[600px] items-stretch">
              {/* Main Large Image */}
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be" 
                  alt="Opera House Sydney"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Two Stacked Images */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9" 
                    alt="Bondi Beach"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be" 
                    alt="Melbourne City"
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
          Why Study in Australia
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
                    ? "text-[#6B2C3E]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
                <div
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#6B2C3E] transition-all duration-300 ${
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
        {/* ACADEMICS */}
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
                  Globally Respected Australian Education
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                 Australia offers plenty of exciting, high-quality options for your study abroad journey. The country’s many prestigious universities and trade institutes are recognized around the world for their quality and innovation. In fact, Australia’s education system is closely regulated by the government to uphold its high standard of quality.

If you’re looking for a premium education that will challenge you and help you grow as a lifelong learner and professional, consider pursuing an Australian education!.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Prestigious Group of Eight (Go8) universities",
                  "Closely regulated quality standards",
                  "World-leading research & vocational training",
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
                  src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* CAREER */}
        {/* ================================= */}

        <div ref={careerRef} className="scroll-mt-40">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            
            {/* Left: Grid */}
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
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
                  Work While Studying and After Graduation
                </h3>

                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    For most international students, a great education abroad is a stepping stone to an exciting lifelong career. Thankfully, Australia offers generous work-while-studying rules to help you fund your studies and build connections. Many study programs also offer co-op and internship elements, helping you get crucial early experience working in your specific field.
                  </p>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    Under normal circumstances, Australia allows international students to work up to 48 hours per fortnight (every two weeks) while studying. Then, when your studies finish, you may qualify to stay and work for a set amount of time after graduating thanks to Australia’s Temporary Graduate visa (subclass 485), also known as a post-study work visa.
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
                    48 Hrs <span className="text-sm font-medium text-gray-500 ml-1">every 2 weeks</span>
                  </p>
                </div>

                <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-bold text-gray-900">Work After Study</h4>
                    <ArrowRight className="text-[#2563EB] transform group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                  <p className="text-2xl font-black text-gray-900">
                    1 to 3 Years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* LIFE */}
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
                  Discover the Vibrant Australian Lifestyle
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                There’s a reason Australia is associated with a laid-back, enjoyable, high quality of life. According to the OECD Better Life Index, Australia ranks above average in life satisfaction, health, education, civic engagement, and more. If you want to enjoy life on the beach among some of the world’s most breathtaking natural scenery, Australia is a wonderful place to be!

Plus, Australia’s well-funded education system creates a high-quality learning environment. By studying and living in Australia, students become global citizens by learning empathy and cross-cultural awareness, as well as building important practical skills that lead to successful, fulfilling careers.
              </p>
            </div>

            {/* Right: Grid */}
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch order-1 lg:order-2">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1520116468816-95b69f847357" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* COMMUNITY */}
        {/* ================================= */}

        <div ref={communityRef} className="scroll-mt-40">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            
            {/* Left: Grid */}
            <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch">
              <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac" 
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
                  Authentic Australian Multiculturalism
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                Australia’s known for its natural beauty, multicultural cities, and friendly people! No matter which side of Australia you end up on, you’ll find safe and vibrant communities full of caring, kind people.

As a particularly diverse and multicultural society, Australia is very welcoming to immigrants and international students alike—meaning you’ll find friendly faces wherever in the country you go.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>

    {/* ---------------------------------- */}
    {/* UNIVERSITIES */}
    {/* ---------------------------------- */}

    {/* <div className="py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AustraliaUniversities />
      </div>
    </div> */}

    {/* ---------------------------------- */}
    {/* VISA PROCESS */}
    {/* ---------------------------------- */}

    <div className="bg-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <FileCheck className="mx-auto text-[#6B2C3E] mb-6" size={48} />
          <h2 className="text-4xl font-bold text-gray-900">
            Getting Your Australian Student Visa
          </h2>
          <p className="mt-4 text-gray-600">Step-by-step guide for the Subclass 500 visa process</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Confirmation of Enrolment", desc: "Receive your CoE from an Australian provider" },
            { title: "Gather Documents", desc: "Identity, financial, and health documentation" },
            { title: "Apply Subclass 500", desc: "Submit your application through ImmiAccount" },
            { title: "Visa Outcome", desc: "Receive your visa and plan your travel" },
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

    {/* ---------------------------------- */}
    {/* CTA SECTION */}
    {/* ---------------------------------- */}

    <section className="relative py-32 text-white text-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be"
          alt="Apply now"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.6), rgba(0, 0, 0, 0.6))', zIndex: 2 }}></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">
          Start Your Study Abroad Journey Today
        </h2>

        <p className="mb-10 text-xl text-white/90 leading-relaxed">
          Our expert advisors help with university selection, visa applications,
          and career guidance every step of the way.
        </p>

        <Link
          to="/contact"
          className="px-6 py-3 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all shadow-lg"
        >
          Speak to Advisor
          {/* <ArrowRight size={20} /> */}
        </Link>
      </div>
    </section>

    <OtherDestinations currentCountry="Australia" />
  </div>
  );
}
