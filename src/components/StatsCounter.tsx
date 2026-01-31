import { useEffect, useState } from 'react';
import { Users, GraduationCap, Globe, Award } from 'lucide-react';

export function StatsCounter() {
  const stats = [
    {
      icon: Users,
      label: 'Students Placed',
      target: 5000,
      suffix: '+',
    },
    {
      icon: GraduationCap,
      label: 'Partner Universities',
      target: 250,
      suffix: '+',
    },
    {
      icon: Globe,
      label: 'Countries',
      target: 15,
      suffix: '+',
    },
    {
      icon: Award,
      label: 'Success Rate',
      target: 98,
      suffix: '%',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#6B2C3E] to-[#8B3C4E] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <CounterCard
                key={index}
                icon={Icon}
                label={stat.label}
                target={stat.target}
                suffix={stat.suffix}
                delay={index * 100}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface CounterCardProps {
  icon: React.ElementType;
  label: string;
  target: number;
  suffix: string;
  delay: number;
}

function CounterCard({ icon: Icon, label, target, suffix, delay }: CounterCardProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          setTimeout(() => {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);

            return () => clearInterval(timer);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${label}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [target, delay, label, hasAnimated]);

  return (
    <div
      id={`counter-${label}`}
      className="text-center group hover:scale-105 transition-transform duration-300"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
      </div>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm sm:text-base text-white/80 font-medium">{label}</div>
    </div>
  );
}
