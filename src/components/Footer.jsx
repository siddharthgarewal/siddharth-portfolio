import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';
import { profileData } from '../data/mock';

const Footer = () => {
  const { personalInfo } = profileData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>© {currentYear} {personalInfo.name}</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-slate-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using</span>
            <Code className="w-4 h-4 text-blue-500" />
            <span>React</span>
            <span>and</span>
            <Coffee className="w-4 h-4 text-yellow-600" />
          </div>
        </div>

        {/* Back to top */}
        <div className="text-center mt-8 pt-8 border-t border-slate-800">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;