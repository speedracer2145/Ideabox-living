import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/logo_black.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Customization', href: '#customization' },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="section-padding container-max">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center h-20">
          <a href="/">
            <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
          </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
           <a href="https://wa.me/918217421934?text=Hi%20I%20would%20like%20to%20buy%20something" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            Request Quote
          </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-background">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="https://wa.me/918217421934?text=Hi%20I%20would%20like%20to%20buy%20something" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
              Request Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;