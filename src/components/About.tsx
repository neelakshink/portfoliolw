import React from 'react';
import { MapPin, GraduationCap, Heart, Mail, Phone, Linkedin, User, Sparkles, Star, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Dark section background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/30 to-black/70"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Dark Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text drop-shadow-lg">Neelakshi Kaundal</span>
          </h2>
          <button className="group relative inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-teal-600 via-blue-600 to-teal-700 text-white rounded-2xl font-bold shadow-3xl overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-glow-teal border border-white/20">
            {/* Dark background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Enhanced shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <User size={20} className="relative z-10 group-hover:rotate-12 transition-transform duration-300 drop-shadow-lg" />
            <span className="relative z-10 drop-shadow-lg">Know Me</span>
            <Sparkles size={16} className="relative z-10 group-hover:animate-spin transition-transform duration-300 drop-shadow-lg" />
            
            {/* Enhanced glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Enhanced Dark About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Dark Profile Image */}
          <div className="relative animate-fade-in-left">
            <div className="relative z-10 bg-black/60 backdrop-blur-lg rounded-3xl p-8 shadow-3xl border border-white/10 hover:shadow-glow-blue transition-all duration-500 hover:scale-105 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
              
              <div className="w-full h-64 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-teal-900/50 rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/10">
                <User size={80} className="text-blue-400 z-10 animate-pulse drop-shadow-lg" />
                
                {/* Enhanced floating elements */}
                <Star className="absolute top-4 right-4 text-yellow-400 animate-ping drop-shadow-lg" size={16} />
                <Sparkles className="absolute bottom-4 left-4 text-purple-400 animate-bounce drop-shadow-lg" size={14} />
                <Zap className="absolute top-8 left-8 text-cyan-400 animate-pulse" size={12} />
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 animate-pulse"></div>
                
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer-slow"></div>
              </div>
            </div>
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-3xl blur-lg opacity-40 animate-pulse-glow"></div>
          </div>

          {/* Enhanced Dark About Info */}
          <div className="space-y-6 animate-fade-in-right">
            <div className="group bg-black/60 backdrop-blur-lg rounded-2xl p-6 shadow-3xl border border-white/10 hover:shadow-glow-blue transition-all duration-500 hover:scale-105 hover:border-blue-400/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center relative">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <GraduationCap className="text-white drop-shadow-lg" size={28} />
                </div>
                Education
              </h3>
              <div className="space-y-3 relative">
                <div className="flex items-start space-x-3 group/item">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 group-hover/item:scale-125 transition-transform duration-300 shadow-glow-blue"></div>
                  <div>
                    <p className="font-semibold text-gray-200 group-hover/item:text-blue-400 transition-colors duration-300 drop-shadow-md">School: Punjab School Education Board (PSEB)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group/item">
                  <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-2 group-hover/item:scale-125 transition-transform duration-300 shadow-glow-teal"></div>
                  <div>
                    <p className="font-semibold text-gray-200 group-hover/item:text-teal-400 transition-colors duration-300 drop-shadow-md">College: DAV University, Jalandhar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-black/60 backdrop-blur-lg rounded-2xl p-6 shadow-3xl border border-white/10 hover:shadow-glow-green transition-all duration-500 hover:scale-105 hover:border-green-400/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center relative">
                <div className="p-2 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="text-white drop-shadow-lg" size={28} />
                </div>
                Location
              </h3>
              <p className="text-gray-200 font-medium group-hover:text-green-400 transition-colors duration-300 drop-shadow-md relative">From Punjab, India</p>
            </div>

            <div className="group bg-black/60 backdrop-blur-lg rounded-2xl p-6 shadow-3xl border border-white/10 hover:shadow-glow-red transition-all duration-500 hover:scale-105 hover:border-red-400/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center relative">
                <div className="p-2 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Heart className="text-white animate-pulse drop-shadow-lg" size={28} />
                </div>
                Passionate About
              </h3>
              <div className="flex flex-wrap gap-3 relative">
                {['AI/ML', 'Python', 'DevOps', 'Full Stack Development'].map((passion, index) => (
                  <span 
                    key={passion} 
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-glow-blue transform hover:scale-110 transition-all duration-300 hover:from-purple-600 hover:to-pink-600 cursor-pointer border border-white/20 relative overflow-hidden group/tag"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/tag:translate-x-full transition-transform duration-700"></div>
                    <span className="relative drop-shadow-md">{passion}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced Dark Contact Info */}
            <div className="group bg-black/60 backdrop-blur-lg rounded-2xl p-6 shadow-3xl border border-white/10 hover:shadow-glow-purple transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative">Get In Touch</h3>
              <div className="space-y-3 relative">
                <a 
                  href="mailto:neelakshikaundal89@gmail.com"
                  className="group/link flex items-center space-x-3 p-3 rounded-xl bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-900/50 hover:to-purple-900/50 transition-all duration-300 hover:shadow-lg border border-white/10 hover:border-blue-400/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover/link:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg group-hover/link:scale-110 transition-transform duration-300 shadow-lg relative">
                    <Mail size={20} className="text-white drop-shadow-lg" />
                  </div>
                  <span className="group-hover/link:text-blue-400 transition-colors duration-300 font-medium text-gray-200 drop-shadow-md relative">neelakshikaundal89@gmail.com</span>
                </a>
                
                <a 
                  href="tel:12345677896"
                  className="group/link flex items-center space-x-3 p-3 rounded-xl bg-gray-800/50 hover:bg-gradient-to-r hover:from-green-900/50 hover:to-teal-900/50 transition-all duration-300 hover:shadow-lg border border-white/10 hover:border-green-400/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent -translate-x-full group-hover/link:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="p-2 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg group-hover/link:scale-110 transition-transform duration-300 shadow-lg relative">
                    <Phone size={20} className="text-white drop-shadow-lg" />
                  </div>
                  <span className="group-hover/link:text-green-400 transition-colors duration-300 font-medium text-gray-200 drop-shadow-md relative">12345677896</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/public-profile/settings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center space-x-3 p-3 rounded-xl bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-900/50 hover:to-indigo-900/50 transition-all duration-300 hover:shadow-lg border border-white/10 hover:border-blue-400/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover/link:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="p-2 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-lg group-hover/link:scale-110 transition-transform duration-300 shadow-lg relative">
                    <Linkedin size={20} className="text-white drop-shadow-lg" />
                  </div>
                  <span className="group-hover/link:text-blue-400 transition-colors duration-300 font-medium text-gray-200 drop-shadow-md relative">LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;