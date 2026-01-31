import { CheckCircle, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import VisionMissionValues from '../components/VisionMissionValues';

export function AboutPage() {


  const whyChooseUs = [
    'Licensed and experienced educational consultancy',
    'Personalized one-on-one counseling sessions',
    'Success stories across 8+ countries',
    'Comprehensive visa and immigration support',
    'Strong partnerships with top universities worldwide',
    'Free initial consultation and assessment',
  ];

  const team = [
    {
      name: 'Dr. James Otieno',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      bio: 'Over 15 years of experience in international education consulting.',
    },
    {
      name: 'Emily Wanjiru',
      position: 'Director of Student Services',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: 'Specialized in student counseling and university placement.',
    },
    {
      name: 'Michael Odhiambo',
      position: 'Visa & Immigration Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Expert in visa processing and immigration documentation.',
    },
    {
      name: 'Sarah Akinyi',
      position: 'Student Counselor',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bio: 'Passionate about helping students achieve their academic dreams.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen text-white overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2OTI3MjMzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Team"
            className="w-full h-full object-cover"
          />
          {/* Force overlay with inline styles to bypass any CSS build issues temporarily */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.5), rgba(0, 0, 0, 0.4))', zIndex: 2 }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            About J&E Study Abroad
          </h1>
          <p className="text-base sm:text-xl text-white/90 leading-relaxed">
            Your trusted partner in making international education dreams a reality
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
            <div>
              <div className="inline-block px-4 sm:px-6 py-2 bg-[#6B2C3E]/10 rounded-full mb-6">
                <span className="text-xs sm:text-sm font-semibold text-[#6B2C3E] tracking-wide uppercase">Our Story</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  J&amp;E Study Abroad Company Limited is a privately held educational services company
located at Mirage Complex, Port Bell Road, Kampala (2nd Floor, Room MC205). We
specialise in supporting students who aspire to study overseas by offering expert guidance
throughout the entire process — from career counselling and university selection to
application and visa support.
                </p>
                <p>
                 We are committed to integrity, professionalism, and personalised service, ensuring that every
student receives accurate information and practical guidance tailored to their academic and
career goals.
                </p>
                <p>
                  Living and studying in another country is an opportunity to learn about new cultures, make international friends, and grow as an independent adult. All of these experiences will help you become more fully-rounded personally and professionally, preparing you for success in an increasingly globalized world.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1725618878496-233974f2fd59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwZWR1Y2F0aW9uJTIwZGl2ZXJzZSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2OTI2NzAzOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="International students"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#6B2C3E]/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Vision, Mission, Values Section */}
          <div className="mb-16 sm:mb-24 overflow-hidden rounded-3xl shadow-xl">
            <VisionMissionValues />
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-[#6B2C3E]">J&E Study Abroad?</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#6B2C3E] flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-gray-700">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-16 sm:mt-24">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Meet Our <span className="text-[#6B2C3E]">Team</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                The dedicated professionals behind your success
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#6B2C3E]/20 hover:-translate-y-2">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#6B2C3E] to-[#8B3C4E] rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{member.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{member.position}</p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2">{member.bio}</p>
                  <div className="mt-4 flex items-center justify-center">
                    <a href="#" className="text-[#6B2C3E] hover:text-[#8B3C4E] mr-4">
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <a href="#" className="text-[#6B2C3E] hover:text-[#8B3C4E]">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}