import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Destinations } from '../components/Destinations';
import { Testimonials } from '../components/Testimonials';
import { StatsCounter } from '../components/StatsCounter';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services limit={3} showViewAll={true} />
      <StatsCounter />
      <Destinations />
      <Testimonials />
    </>
  );
}