import { ImageWithFallback } from './figma/ImageWithFallback';

export function MissionVisionValues() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {/* Vision Section - Blue */}
      <div className="bg-[#005B8D] text-white p-10 lg:p-16 flex flex-col min-h-[700px]">
        <div className="mb-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-[#FDB813]">
            Our Vision
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed">
            Our vision is to be recognized worldwide as delivering the highest quality of educational options to international students looking to study abroad.
          </p>
        </div>
        
        <div className="relative mt-16">
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden mx-auto lg:mx-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
              alt="Students collaborating"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 lg:left-0 w-20 h-20 lg:w-24 lg:h-24 bg-[#FDB813]"></div>
        </div>
      </div>

      {/* Mission Section - Yellow */}
      <div className="bg-[#FDB813] text-gray-900 p-10 lg:p-16 flex flex-col min-h-[700px]">
        <div className="mb-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-[#005B8D]">
            Our Mission
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed">
            Our mission is to provide quality end to end solutions for people seeking to study abroad, so they receive a first-class education to equip themselves in an everchanging global market.
          </p>
        </div>
        
        <div className="relative mt-16">
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden mx-auto lg:mx-0">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-l from-[#8B5FBF]/40 to-transparent z-10"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop"
                alt="Student counseling"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute top-0 left-8 lg:left-12 w-20 h-20 lg:w-24 lg:h-24 bg-[#007A3D]"></div>
        </div>
      </div>

      {/* Values Section - Green */}
      <div className="bg-[#007A3D] text-white p-10 lg:p-16 flex flex-col min-h-[700px]">
        <div className="mb-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Our Values
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed">
            We provide personalized and authentic study abroad experiences, grounded in integrity and honesty. Our commitment is to empower students with comprehensive support, access to top institutions, and a global community, all designed to help them achieve their academic and professional goals.
          </p>
        </div>
        
        <div className="relative mt-16">
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden mx-auto lg:mx-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=800&fit=crop"
              alt="Student community"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-20 h-20 lg:w-24 lg:h-24 bg-[#FDB813]"></div>
        </div>
      </div>
    </div>
  );
}
