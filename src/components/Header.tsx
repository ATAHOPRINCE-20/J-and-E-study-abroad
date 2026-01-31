import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import LogoDefault from '../assets/logo3.png';
import LogoAlt from '../assets/logo1.png';

interface HeaderProps {
  scrolled?: boolean;
}

export function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Study Destinations', href: '/destinations' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={LogoDefault}
              alt="J&E Study Abroad logo"
              className="h-14 w-auto"
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                if (!el.dataset.fallback) {
                  el.src = LogoAlt;
                  el.dataset.fallback = 'true';
                }
              }}
            />
            {/* <div className="hidden sm:block">
              <div className="text-[#6B2C3E] font-bold text-base leading-tight">
                J&E STUDY ABROAD
              </div>
              <div className="text-[#6B2C3E] text-xs tracking-wide">COMPANY LIMITED</div>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(link.href) ? 'text-[#6B2C3E]' : 'text-gray-700 hover:text-[#6B2C3E]'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#6B2C3E] transition-all duration-300 ${
                  isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Book Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href) ? 'text-[#6B2C3E]' : 'text-gray-700 hover:text-[#6B2C3E]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 bg-gradient-to-r from-[#6B2C3E] to-[#8B3C4E] text-white rounded-full text-sm text-center font-semibold hover:shadow-lg transition-all"
              >
                Book Free Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}