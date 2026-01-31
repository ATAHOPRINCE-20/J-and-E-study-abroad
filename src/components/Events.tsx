import { Calendar, MapPin, Clock } from 'lucide-react';

export function Events() {
  const events = [
    {
      title: 'UK Universities Education Fair 2026',
      date: 'February 15, 2026',
      time: '10:00 AM - 4:00 PM',
      location: 'Nakawa K\'la Mirage Complex, Kampala',
      description: 'Meet representatives from top UK universities and learn about study opportunities.',
    },
    {
      title: 'Canada Study Abroad Webinar',
      date: 'March 5, 2026',
      time: '2:00 PM - 3:30 PM',
      location: 'Online Event',
      description: 'Virtual session covering Canadian university admissions and visa processes.',
    },
    {
      title: 'Study in Europe Information Session',
      date: 'March 20, 2026',
      time: '11:00 AM - 1:00 PM',
      location: 'J&E Office, Kampala',
      description: 'Comprehensive guide to studying in European countries including scholarships.',
    },
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#6B2C3E]/10 rounded-full mb-4">
            <span className="text-sm text-[#6B2C3E]">Upcoming Events</span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Education Fairs & Events
          </h2>
          <p className="text-lg text-gray-600">
            Join our upcoming events to meet university representatives and learn more about study abroad opportunities.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <h3 className="text-xl text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.description}</p>
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-[#6B2C3E]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#6B2C3E]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#6B2C3E]" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-[#6B2C3E]/10 text-[#6B2C3E] rounded-full hover:bg-[#6B2C3E] hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}