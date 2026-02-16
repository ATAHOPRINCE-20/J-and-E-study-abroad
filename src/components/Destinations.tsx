import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Destinations() {
  const [activeCountry, setActiveCountry] = useState('IRELAND');

  const countries = ['AUSTRALIA', 'CANADA', 'IRELAND', 'UNITED KINGDOM', 'UNITED STATES', 'GERMANY', 'NEW ZEALAND'];

  const destinationsData = {
    AUSTRALIA: {
      featured: [
        {
          image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be',
          name: 'The University of Sydney',
          country: 'AUSTRALIA',
          description: 'The University of Sydney is a public research university in Sydney, Australia. Founded in 1850, it is Australia\'s oldest university and is regarded as one of the world\'s leading universities...',
        },
        {
          image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9',
          name: 'University of Melbourne',
          country: 'AUSTRALIA',
          description: 'The University of Melbourne is a public research university located in Melbourne, Australia. Founded in 1853, it is Australia\'s second oldest university and the oldest in Victoria...',
        },
      ],
      list: [
        {
          image: 'https://images.unsplash.com/photo-1529143642335-716492576b2e',
          name: 'Monash University',
          country: 'AUSTRALIA',
        },
        {
          image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be',
          name: 'UNSW Sydney',
          country: 'AUSTRALIA',
        },
      ],
    },
    IRELAND: {
      featured: [
        {
          image: 'https://images.unsplash.com/photo-1617246610501-d11b4829436b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVuYWRhJTIwdW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2OTI3MDA2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
          name: "St George's University",
          country: 'GRENADA',
          description: "St George's University is a private medical school and international university in Grenada, West Indies, offering degrees in medicine, veterinary medicine, public health, the...",
        },
        {
          image: 'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcmVsYW5kJTIwY29sbGVnZSUyMG1vZGVybiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2OTI3MDA2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'National College of Ireland',
          country: 'IRELAND',
          description: 'National College of Ireland is a not-for-profit, state-aided third-level education institution in Dublin, IRL offers undergraduate and postgraduate courses in business, computing, psychology & education...',
        },
      ],
      list: [
        {
          image: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJsaW4lMjBjaXR5JTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NjkyNzAwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Dublin City University',
          country: 'IRELAND',
        },
      ],
    },
    CANADA: {
      featured: [
        {
          image: 'https://images.unsplash.com/photo-1642130935796-1409d7e075dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGElMjB1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc2OTI3MDA2NHww&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Algonquin College',
          country: 'CANADA',
          description: 'Algonquin College is a publicly funded English-language college located in Ottawa, Ontario, Canada. The college has three campuses in Ottawa, one in Perth, and one in Pembroke...',
        },
        {
          image: 'https://images.unsplash.com/photo-1618255630366-f402c45736f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3JvbnRvJTIwY29sbGVnZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2OTI3MDA2OXww&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Humber College',
          country: 'CANADA',
          description: 'Humber College Institute of Technology & Advanced Learning is a public college in Toronto, Ontario, Canada. Established in 1967, it offers more than 200 programs including undergraduate, postgraduate...',
        },
      ],
      list: [
        {
          image: 'https://images.unsplash.com/photo-1724502555813-9ea4fe5d9c1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGlhbiUyMHVuaXZlcnNpdHklMjBtb2Rlcm58ZW58MXx8fHwxNzY5MjcwMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Capilano University',
          country: 'CANADA',
        },
        {
          image: 'https://images.unsplash.com/photo-1642130935796-1409d7e075dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGElMjB1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc2OTI3MDA2NHww&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Seneca Polytechnic',
          country: 'CANADA',
        },
      ],
    },
    'UNITED KINGDOM': {
      featured: [
        {
          image: 'https://images.unsplash.com/photo-1566835745069-cebca4b64ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1ayUyMHVuaXZlcnNpdHklMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkyNzAwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'University of Oxford',
          country: 'UNITED KINGDOM',
          description: 'The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world...',
        },
        {
          image: 'https://images.unsplash.com/photo-1707065634977-ad779c889242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxveGZvcmQlMjB1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc2OTI3MDA2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'University of Cambridge',
          country: 'UNITED KINGDOM',
          description: 'The University of Cambridge is a collegiate research university in Cambridge, United Kingdom. Founded in 1209 and granted a royal charter by Henry III in 1231, Cambridge is the second-oldest university...',
        },
      ],
      list: [
        {
          image: 'https://images.unsplash.com/photo-1566835745069-cebca4b64ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1ayUyMHVuaXZlcnNpdHklMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkyNzAwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Imperial College London',
          country: 'UNITED KINGDOM',
        },
      ],
    },
    'UNITED STATES': {
      featured: [
        {
          image: 'https://images.unsplash.com/photo-1617246610501-d11b4829436b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVuYWRhJTIwdW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2OTI3MDA2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Harvard University',
          country: 'UNITED STATES',
          description: 'Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636 and named for its first benefactor, clergyman John Harvard...',
        },
        {
          image: 'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcmVsYW5kJTIwY29sbGVnZSUyMG1vZGVybiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2OTI3MDA2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'MIT',
          country: 'UNITED STATES',
          description: 'The Massachusetts Institute of Technology is a private land-grant research university in Cambridge, Massachusetts. Established in 1861, MIT has since played a key role in modern technology...',
        },
      ],
      list: [
        {
          image: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJsaW4lMjBjaXR5JTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NjkyNzAwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Stanford University',
          country: 'UNITED STATES',
        },
      ],
    },
    GERMANY: {
      featured: [
        {
          image: 'https://images.unsplash.com/photo-1642130935796-1409d7e075dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGElMjB1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc2OTI3MDA2NHww&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Technical University of Munich',
          country: 'GERMANY',
          description: 'The Technical University of Munich is a public research university in Munich, Germany. It specializes in engineering, technology, medicine, and applied and natural sciences...',
        },
        {
          image: 'https://images.unsplash.com/photo-1566835745069-cebca4b64ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1ayUyMHVuaXZlcnNpdHklMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkyNzAwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Ludwig Maximilian University',
          country: 'GERMANY',
          description: 'Ludwig Maximilian University of Munich is a public research university in Munich, Germany. Founded in 1472, it is one of the oldest universities in continuous operation...',
        },
      ],
      list: [
        {
          image: 'https://images.unsplash.com/photo-1707065634977-ad779c889242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxveGZvcmQlMjB1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc2OTI3MDA2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
          name: 'Heidelberg University',
          country: 'GERMANY',
        },
      ],
    },
    'NEW ZEALAND': {
      featured: [
        {
          image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad',
          name: 'University of Auckland',
          country: 'NEW ZEALAND',
          description: 'The University of Auckland is a public research university based in Auckland, New Zealand. It is the largest, most comprehensive and highest-ranked university in New Zealand...',
        },
        {
          image: 'https://images.unsplash.com/photo-1477505982272-ead89926a577',
          name: 'University of Otago',
          country: 'NEW ZEALAND',
          description: 'The University of Otago is a collegiate university located in Dunedin, Otago, New Zealand. It scores highly for average research quality, and in 2006 was second in New Zealand...',
        },
      ],
      list: [
        {
          image: 'https://images.unsplash.com/photo-1589802829985-817e5113933c',
          name: 'Victoria University of Wellington',
          country: 'NEW ZEALAND',
        },
        {
          image: 'https://images.unsplash.com/photo-1523050335392-9bc5675e4739',
          name: 'University of Canterbury',
          country: 'NEW ZEALAND',
        },
      ],
    },
  };

  const currentData = destinationsData[activeCountry as keyof typeof destinationsData];

  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6B2C3E] mb-3">
            WE REPRESENT
          </h2>
        </div>

        {/* Country Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setActiveCountry(country)}
              className={`px-6 py-3 text-sm font-semibold rounded-md border-2 transition-all ${
                activeCountry === country
                  ? 'bg-[#6B2C3E] text-white border-[#6B2C3E]'
                  : 'bg-white text-[#6B2C3E] border-[#6B2C3E] hover:bg-[#6B2C3E]/10'
              }`}
            >
              {country}
            </button>
          ))}
          <Link
            to="/destinations"
            className="px-6 py-3 text-sm font-semibold rounded-md bg-[#6B2C3E] text-white hover:bg-[#7B3C4E] transition-all"
          >
            VIEW ALL
          </Link>
        </div>

        {/* Universities Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured University Cards (2 columns) */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {currentData.featured.map((university, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A7EA4] text-white text-xs font-semibold px-3 py-1 rounded">
                    {university.country}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A7EA4] mb-3">
                    {university.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {university.description}
                  </p>
                  <Link 
                    to={`/destinations/${activeCountry.toLowerCase().replace(/\s+/g, '')}`}
                    className="px-6 py-2 text-sm font-semibold text-[#0A7EA4] border-2 border-[#0A7EA4] rounded-full hover:bg-[#0A7EA4] hover:text-white transition-all inline-block"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar - University List */}
          <div className="space-y-4">
            {currentData.list.map((university, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4 p-4">
                  <ImageWithFallback
                    src={university.image}
                    alt={university.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-[#0A7EA4] mb-1">
                      {university.country}
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2">
                      {university.name}
                    </h4>
                    <Link 
                      to={`/destinations/${activeCountry.toLowerCase().replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A7EA4] hover:gap-2 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}