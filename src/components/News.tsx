import { Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function News() {
  const articles = [
    {
      title: 'New Scholarship Opportunities for International Students in 2026',
      excerpt: 'Discover the latest scholarship programs available for students planning to study abroad this year.',
      date: 'January 20, 2026',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
    },
    {
      title: 'Changes to UK Student Visa Requirements',
      excerpt: 'Important updates on UK student visa regulations and what they mean for prospective students.',
      date: 'January 15, 2026',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
    },
    {
      title: 'Top 10 Universities in Canada for International Students',
      excerpt: 'A comprehensive guide to the best Canadian universities offering world-class education.',
      date: 'January 10, 2026',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#6B2C3E]/10 rounded-full mb-4">
            <span className="text-sm text-[#6B2C3E]">Latest Updates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            News & Articles
          </h2>
          <p className="text-lg text-gray-600">
            Stay informed with the latest news and insights about studying abroad.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-lg text-gray-900 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-sm text-[#6B2C3E] hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-white text-[#6B2C3E] border-2 border-[#6B2C3E] rounded-full hover:bg-[#6B2C3E] hover:text-white transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
