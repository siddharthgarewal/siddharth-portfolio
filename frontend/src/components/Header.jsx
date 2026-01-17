import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { profileData } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const { personalInfo } = profileData;

  const handleAboutClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              {personalInfo.name.split(' ').map(name => name[0]).join('')}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.name === 'About') {
                    handleAboutClick(e);
                  } else {
                    handleNavClick(item.href);
                  }
                }}
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links & Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <Button
              size="sm"
              className="bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={(e) => {
                    if (item.name === 'About') {
                      handleAboutClick(e);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <Button
                  size="sm"
                  className="bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;