import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-6 py-2 bg-[#6B2C3E]/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#6B2C3E] tracking-wide uppercase">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6 font-bold">
            Book Your Free <span className="text-[#6B2C3E]">Consultation</span>
          </h2>
          <p className="text-lg text-gray-600">
            Ready to start your study abroad journey? Contact us today for personalized guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B2C3E] focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B2C3E] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B2C3E] focus:border-transparent transition-all"
                  placeholder="+256 788 232 695"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B2C3E] focus:border-transparent resize-none transition-all"
                  placeholder="Tell us about your study abroad plans..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#6B2C3E] to-[#8B3C4E] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 mb-2">Phone Numbers</div>
                    <div className="space-y-1">
                      
                      <div className="text-gray-900 font-medium">+256 756 733 094</div>
                      <div className="text-gray-900 font-medium">+256 763 174 100</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#6B2C3E] to-[#8B3C4E] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 mb-2">Email</div>
                    <div className="space-y-1">
                      <a href="mailto:info@jestudyabroad.com" className="text-gray-900 font-medium hover:text-[#6B2C3E] transition-colors">
                        info@jestudyabroad.com
                      </a>
                      <div className="text-gray-900 font-medium">www.jestudyabroad.com</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#6B2C3E] to-[#8B3C4E] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 mb-2">Office Location</div>
                    <div className="text-gray-900 font-medium">
                      P.O. Box 200473 Nakawa K'la Mirage Complex<br />
                      Second Floor RM MC2 — 05 Kitintale<br />
                      Kampala, Uganda
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#D4A574]/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-[#6B2C3E]" />
                <h4 className="text-xl font-bold text-gray-900">Office Hours</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Monday - Friday:</span>
                  <span className="font-bold text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Saturday:</span>
                  <span className="font-bold text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Sunday:</span>
                  <span className="font-bold text-gray-900">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}