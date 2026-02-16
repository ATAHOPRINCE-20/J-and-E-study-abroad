import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import LogoDefault from '../assets/logo3.png';
import LogoAlt from '../assets/logo1.png';

interface HeaderProps {
  scrolled?: boolean;
}

const destinationLinks = [
  { label: 'All Destinations', href: '/destinations' },
  { label: 'Study in Canada', href: '/destinations/canada' },
  { label: 'Study in Australia', href: '/destinations/australia' },
  { label: 'Study in Ireland', href: '/destinations/ireland' },
  { label: 'Study in UK', href: '/destinations/uk' },
  { label: 'Study in USA', href: '/destinations/usa' },
  { label: 'Study in Germany', href: '/destinations/germany' },
  { label: 'Study in New Zealand', href: '/destinations/newzealand' },
];

export function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(true);
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.label === 'Study Destinations') {
                return (
                  <div 
                    key={link.href} 
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link 
                      to="/destinations"
                      className={`text-sm font-medium transition-colors flex items-center gap-1 py-8 ${
                        location.pathname.startsWith('/destinations') ? 'text-[#6B2C3E]' : 'text-gray-700 hover:text-[#6B2C3E]'
                      }`}
                    >
                      {link.label}
                      <ChevronDown 
                        className="w-4 h-4 transition-transform" 
                        style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </Link>
                    {dropdownOpen && (
                      <div 
                        className="absolute left-0 w-56" 
                        style={{ top: '100%', zIndex: 100 }}
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                          {destinationLinks.map((dest) => (
                            <Link
                              key={dest.label}
                              to={dest.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#6B2C3E]"
                              onClick={() => setDropdownOpen(false)}
                            >
                              {dest.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors relative ${
                    isActive(link.href) ? 'text-[#6B2C3E]' : 'text-gray-700 hover:text-[#6B2C3E]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
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
                  link.label === 'Study Destinations' ? (
                    <div key={link.href} className="flex flex-col gap-2">
                       <button 
                        className={`text-sm font-medium text-left flex items-center gap-1 ${isActive('/destinations') ? 'text-[#6B2C3E]' : 'text-gray-700'}`}
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                       >
                         {link.label}
                         <ChevronDown 
                           className="w-4 h-4 transition-transform" 
                           style={{ transform: mobileDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                         />
                       </button>
                       {mobileDropdownOpen && (
                         <div className="pl-4 flex flex-col gap-2 border-l border-gray-100 ml-1">
                           {destinationLinks.map((dest) => (
                             <Link 
                               key={dest.label} 
                               to={dest.href} 
                               onClick={() => setMobileMenuOpen(false)} 
                               className="text-sm text-gray-600"
                             >
                               {dest.label}
                             </Link>
                           ))}
                         </div>
                       )}
                    </div>
                  ) : (
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
                  )
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