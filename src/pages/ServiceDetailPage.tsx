import { useParams, Link } from 'react-router';
import { ArrowLeft, CheckCircle, ArrowRight, Send } from 'lucide-react';
import { allServices } from '../components/Services';
import { useState } from 'react';

export function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = allServices.find((s) => s.slug === serviceId);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service Inquiry:', { ...formData, service: service?.title });
    setIsSubmitted(true);
    // Reset after some time
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
          <Link to="/services" className="text-[#6B2C3E] hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen text-white overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.5), rgba(0, 0, 0, 0.4))', zIndex: 2 }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {service.fullDescription || service.description}
              </p>

              {service.paragraphs && service.paragraphs.length > 0 && (
                <div className="space-y-4 mb-8">
                  {service.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
              
              {service.bullets && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">What we offer:</h3>
                  <div className="grid gap-3">
                    {service.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#6B2C3E] mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inquire About {service.title}</h3>
              <p className="text-gray-600 mb-8 text-sm sm:text-base">
                Fill out the form below and our experts will get back to you with tailored advice.
              </p>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-100 text-green-800 p-6 rounded-2xl text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-1">Inquiry Sent!</h4>
                  <p className="text-sm">We'll contact you shortly regarding your {service.title} request.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B2C3E] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B2C3E] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+256..."
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B2C3E] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Message (Optional)</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={`Tell us about your needs for ${service.title.toLowerCase()}...`}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B2C3E] focus:border-transparent transition-all"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-[1.02] transition-all font-bold mt-2"
                  >
                    Send Inquiry
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
