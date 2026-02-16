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

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { OtherDestinations } from "../components/OtherDestinations";

export function NewZealandDestinationPage() {
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
            src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad"
            alt="Study in New Zealand"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", zIndex: 1 }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(130, 24, 26, 0.5), rgba(0, 0, 0, 0.4))",
              zIndex: 2,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Study in New Zealand
          </h1>
          <p className="text-base sm:text-xl text-white/90 leading-relaxed">
            Discover world-class education, breathtaking landscapes, and a
            unique Kiwi lifestyle in one of the world's most innovative
            countries.
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
                  Your Journey to{" "}
                  <span className="text-[#2563EB]">Study in New Zealand</span>{" "}
                  Starts Here
                </h2>

                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  New Zealand is famous for its outstanding education system,
                  offering a high standard of living and a safe environment for
                  students. With all eight of its universities ranked in the top
                  3% globally, New Zealand provides a premium learning
                  experience that combines academic rigor with practical skills.
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
                <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
                    alt="New Zealand Nature"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1477505982272-ead89926a577"
                      alt="Queenstown"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1589802829985-817e5113933c"
                      alt="Mount Cook"
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
            Why Study in New Zealand
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
              <div className="flex flex-col order-2 lg:order-1 justify-between py-4">
                <div>
                  <span className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
                    Academics
                  </span>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                    High-Ranked Universities and Innovative Learning
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    New Zealand’s education system is based on the prestigious
                    British model. Every one of its eight universities is ranked
                    within the top 3% globally, known for excellence in research
                    and teaching. Whether you're interested in Engineering,
                    Environmental Science, or Hospitality, New Zealand offers
                    specialized programs that are globally recognized.
                  </p>
                </div>

                <ul className="space-y-4 shadow-sm p-6 rounded-2xl bg-gray-50/50">
                  {[
                    "All 8 universities in top 3% globally",
                    "Personalized learning and low student-to-teacher ratios",
                    "Internationally recognized qualifications (NZQA)",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-gray-700 font-medium"
                    >
                      <CheckCircle2
                        className="text-[#6B2C3E] shrink-0"
                        size={24}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch order-1 lg:order-2">
                <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1523050335392-9bc5675e4739"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3"
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
              <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch">
                <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
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

              <div className="flex flex-col justify-between py-4">
                <div>
                  <span className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
                    Experience
                  </span>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                    Work Rights and Career Growth
                  </h3>

                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      International students in New Zealand can work part-time
                      up to 20 hours per week during their studies and full-time
                      during holidays. This provides a great opportunity to gain
                      local work experience and help cover living costs.
                    </p>

                    <p className="text-gray-600 leading-relaxed text-lg">
                      New Zealand’s Post-Study Work Visa allows graduates to
                      stay and work for up to three years, depending on their
                      level of study, making it one of the most attractive
                      options for long-term career development.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                  <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-bold text-gray-900">
                        Work & Study
                      </h4>
                      <ArrowRight
                        className="text-[#2563EB] transform group-hover:translate-x-1 transition-transform"
                        size={20}
                      />
                    </div>
                    <p className="text-2xl font-black text-gray-900">
                      20 Hrs{" "}
                      <span className="text-sm font-medium text-gray-500 ml-1">
                        per week
                      </span>
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-bold text-gray-900">
                        Post-Study Visa
                      </h4>
                      <ArrowRight
                        className="text-[#2563EB] transform group-hover:translate-x-1 transition-transform"
                        size={20}
                      />
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
          {/* LIFE */}
          {/* ================================= */}

          <div ref={lifeRef} className="scroll-mt-40">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
              <div className="flex flex-col order-2 lg:order-1 justify-between py-4">
                <div>
                  <span className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
                    Lifestyle
                  </span>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                    High Quality of Life and Adventure
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg">
                  New Zealand consistently ranks as one of the safest and
                  happiest countries in the world. Widely regarded for its
                  honesty and transparency, it's an ideal place for peaceful
                  living. Beyond safety, the country is an adventure-seeker’s
                  paradise, offering world-famous hiking, skiing, and coastal
                  activities.
                </p>

                <p className="text-gray-600 leading-relaxed text-lg">
                  Students enjoy a perfect balance between academic rigor and
                  life enrichment, exploring majestic fjords and glaciers while
                  studying in some of the world's most liveable cities like
                  Auckland and Wellington.
                </p>
              </div>

              <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch order-1 lg:order-2">
                <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1477505982272-ead89926a577"
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
              <div className="flex gap-4 h-[400px] sm:h-[600px] items-stretch">
                <div className="flex-[1.2] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex-[1.8] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
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

              <div className="flex flex-col justify-between py-4">
                <div>
                  <span className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
                    Community
                  </span>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                    A Safe and Welcoming Society
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg">
                  New Zealanders, or "Kiwis," are known for being friendly,
                  open, and direct. The country has a long history of welcoming
                  newcomers and international students. The principle of
                  **Manaakitanga** (hospitality and care for others) is deeply
                  ingrained in the culture.
                </p>

                <p className="text-gray-600 leading-relaxed text-lg">
                  Whether you’re in a bustling city or a small town, you’ll find
                  a supportive environment that celebrates diversity and offers
                  a sense of belonging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------- */}
      {/* VISA PROCESS */}
      {/* ---------------------------------- */}

      <div className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <FileCheck className="mx-auto text-[#6B2C3E] mb-6" size={48} />
            <h2 className="text-4xl font-bold text-gray-900">
              Getting Your New Zealand Student Visa
            </h2>
            <p className="mt-4 text-gray-600">
              Steps to secure your New Zealand Fee-Paying Student Visa
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Offer of Place",
                desc: "Secure a place at a certified New Zealand university",
              },
              {
                title: "Proof of Funds",
                desc: "Proof you can cover tuition and living costs",
              },
              {
                title: "Health & Character",
                desc: "Identity, medical, and police certificates",
              },
              {
                title: "Application",
                desc: "Online submission to Immigration New Zealand",
              },
            ].map((step, i) => (
              <div
                key={step.title}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
              >
                <span className="text-2xl font-bold text-[#6B2C3E]">
                  0{i + 1}
                </span>
                <h4 className="mt-4 text-gray-900 font-bold">{step.title}</h4>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
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
            src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad"
            alt="Apply now"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", zIndex: 1 }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(130, 24, 26, 0.6), rgba(0, 0, 0, 0.6))",
              zIndex: 2,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Kiwi Adventure Today
          </h2>

          <p className="mb-10 text-xl text-white/90 leading-relaxed">
            Our expert advisors help with university selection, visa
            applications, and career guidance every step of the way.
          </p>

          <Link
            to="/contact"
            className="px-6 py-3 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all shadow-lg"
          >
            Speak to Advisor
          </Link>
        </div>
      </section>

      <OtherDestinations currentCountry="New Zealand" />
    </div>
  );
}
