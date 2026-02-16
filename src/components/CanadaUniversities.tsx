import { ExternalLink, Star } from 'lucide-react';

export function CanadaUniversities() {
  const universities = [
    { name: 'University of Toronto', location: 'Toronto, Ontario', ranking: '#1 in Canada', description: "Global leader in research and innovation." },
    { name: 'McGill University', location: 'Montreal, Quebec', ranking: '#2 in Canada', description: "Known for its medical school and diverse student body." },
    { name: 'University of British Columbia', location: 'Vancouver, BC', ranking: '#3 in Canada', description: "Excellence in teaching, learning and research." },
    { name: 'University of Alberta', location: 'Edmonton, Alberta', ranking: 'Top 5 in Canada', description: "Leading public research university." },
    { name: 'University of Waterloo', location: 'Waterloo, Ontario', ranking: 'Innovation Leader', description: "Famous for its cooperative education programs." },
    { name: 'Western University', location: 'London, Ontario', ranking: 'Top 1% Global', description: "Offers a unique student experience and research excellence." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0A7EA4] mb-4">Top Canadian Institutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with Canada's most prestigious universities and colleges to offer you the best education opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((uni, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all border border-gray-100 group">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🏛️</span>
                </div>
                <span className="bg-[#0A7EA4]/10 text-[#0A7EA4] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> {uni.ranking}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{uni.name}</h3>
              <p className="text-sm text-gray-500 mb-4 font-medium">{uni.location}</p>
              <p className="text-gray-600 mb-6 text-sm">{uni.description}</p>
              
              <button className="text-[#0A7EA4] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
