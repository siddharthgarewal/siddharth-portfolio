import React from 'react';
import { ArrowRight, Download, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { profileData } from '../data/mock';

const Hero = () => {
  const { personalInfo } = profileData;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for new opportunities
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                {personalInfo.name}
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-slate-300 font-light">
                {personalInfo.title}
              </h2>
              
              <p className="text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {personalInfo.phone}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative w-96 h-96 mx-auto">
              {/* Profile Image Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm"></div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
              
              {/* Profile Image */}
              <div className="absolute inset-4 rounded-xl overflow-hidden">
                <img
                  src="/assets/profile.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;