import { News } from '../components/News';
import { Events } from '../components/Events';

export function NewsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen text-white overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1648301033733-44554c74ec50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBjYW1wdXN8ZW58MXx8fHwxNzY5MjY1MjA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="News & Updates"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.5), rgba(0, 0, 0, 0.4))', zIndex: 2 }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            News & Events
          </h1>
          <p className="text-base sm:text-xl text-white/90 leading-relaxed">
            Stay updated with the latest news and upcoming events
          </p>
        </div>
      </section>

      {/* Events Component */}
      <Events />

      {/* News Component */}
      <News />
    </div>
  );
}