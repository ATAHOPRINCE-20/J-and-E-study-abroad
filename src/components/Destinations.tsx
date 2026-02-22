import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

interface DestinationsProps {
  limit?: number;
}

const allCountries = [
  { name: "Australia", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be", path: "/destinations/australia", color: "from-blue-600/20" },
  { name: "Canada", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce", path: "/destinations/canada", color: "from-cyan-600/20" },
  { name: "United Kingdom", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad", path: "/destinations/uk", color: "from-red-600/20" },
  { name: "USA", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74", path: "/destinations/usa", color: "from-indigo-600/20" },
  { name: "Germany", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b", path: "/destinations/germany", color: "from-amber-600/20" },
  { name: "Ireland", image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e", path: "/destinations/ireland", color: "from-green-600/20" },
  { name: "New Zealand", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad", path: "/destinations/newzealand", color: "from-teal-600/20" },
];

export function Destinations({ limit }: DestinationsProps) {
  const displayedCountries = limit ? allCountries.slice(0, limit) : allCountries;

  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-[#6B2C3E] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Where to Study</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#6B2C3E] leading-tight">Study Destinations</h2>
          </div>
          {limit && (
            <Link to="/destinations" className="group flex items-center gap-3 text-gray-900 font-bold text-lg hover:text-[#6B2C3E] transition-colors">
              Explore All
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#6B2C3E] group-hover:bg-[#6B2C3E] group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </div>
            </Link>
          )}
        </div>

        {/* Country Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCountries.map((dest) => (
            <Link 
              key={dest.name} 
              to={dest.path} 
              className="group relative block overflow-hidden rounded-[32px] bg-gray-100 aspect-[4/5] min-h-[450px]"
            >
              {/* Image & Overlays */}
              <div className="absolute inset-0">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${dest.color} to-transparent opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{dest.name}</h3>
                    <p className="text-white/70 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Programs</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:bg-white group-hover:text-gray-900 transition-all duration-500">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}