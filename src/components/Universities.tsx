import { ExternalLink } from 'lucide-react';

export function Universities() {
  const universities = [
    { name: 'University of Oxford', country: 'UK', ranking: '#1 UK' },
    { name: 'University of Toronto', country: 'Canada', ranking: 'Top 20 Global' },
    { name: 'Massachusetts Institute of Technology', country: 'USA', ranking: '#1 Global' },
    { name: 'University of Melbourne', country: 'Australia', ranking: '#1 Australia' },
    { name: 'Trinity College Dublin', country: 'Ireland', ranking: '#1 Ireland' },
    { name: 'University of Warsaw', country: 'Poland', ranking: 'Top 3 Poland' },
    { name: 'University of Amsterdam', country: 'Netherlands', ranking: 'Top 60 Global' },
    { name: 'Technical University of Munich', country: 'Germany', ranking: 'Top 50 Global' },
  ];

  return (
    <section id="universities" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-6 py-2 bg-[#6B2C3E]/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#6B2C3E] tracking-wide uppercase">Partner Universities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6 font-bold">
            Featured Universities & <span className="text-[#6B2C3E]">Partners</span>
          </h2>
          <p className="text-lg text-gray-600">
            Access to world-class institutions across multiple countries.
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-[#6B2C3E]/30 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B2C3E]/10 to-[#D4A574]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  🎓
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[3rem]">
                {uni.name}
              </h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{uni.country}</span>
                <span className="text-[#6B2C3E] text-xs font-semibold bg-[#6B2C3E]/10 px-2 py-1 rounded-full">{uni.ranking}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold">
            View All Partner Universities
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}