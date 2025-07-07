import React from 'react';
import { ArrowRight, User, Globe, Sparkles, Star, Zap } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Enhanced Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/30 rounded-full mix-blend-screen filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-teal-500/30 rounded-full mix-blend-screen filter blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-purple-500/30 rounded-full mix-blend-screen filter blur-xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full mix-blend-screen filter blur-2xl animate-pulse-slow"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/80 rounded-full animate-float-particle shadow-glow-blue"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Enhanced 3D Animated Globe */}
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 flex items-center justify-center animate-3d-rotate shadow-3xl relative overflow-hidden border-4 border-white/20">
              <Globe size={60} className="text-white animate-pulse z-10 drop-shadow-lg" />
              
              {/* Multiple glow layers */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400/50 to-teal-400/50 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 animate-pulse-slow"></div>
              
              {/* Enhanced sparkle effects */}
              <Sparkles className="absolute top-4 right-4 text-white animate-ping drop-shadow-lg" size={16} />
              <Sparkles className="absolute bottom-6 left-6 text-white animate-ping drop-shadow-lg" size={12} style={{ animationDelay: '1s' }} />
              <Star className="absolute top-8 left-8 text-yellow-300 animate-pulse" size={14} style={{ animationDelay: '2s' }} />
              <Zap className="absolute bottom-4 right-8 text-cyan-300 animate-bounce" size={12} style={{ animationDelay: '1.5s' }} />
              
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 animate-shimmer"></div>
            </div>
            
            {/* Multiple glow rings */}
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full blur-lg opacity-40 animate-pulse-glow"></div>
            <div className="absolute -inset-8 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-xl opacity-20 animate-spin-slow"></div>
            <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-10 animate-pulse-slow"></div>
          </div>
        </div>

        {/* Enhanced Name Display - No Blur, Strong Colors */}
        <div className="mb-12">
          <div className="relative">
            {/* Main Name with Strong Colors and No Blur */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-center mb-6 relative">
              <span className="inline-block animate-slide-in-right text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text font-extrabold tracking-wider drop-shadow-2xl">
                NEELAKSHI
              </span>
              <br />
              <span className="inline-block animate-slide-in-left text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text font-extrabold tracking-wider drop-shadow-2xl">
                KAUNDAL
              </span>
            </h1>
            
            {/* Enhanced Glow Effects Behind Name */}
            <div className="absolute inset-0 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-center">
              <span className="inline-block text-cyan-400/30 blur-sm animate-pulse">NEELAKSHI</span>
              <br />
              <span className="inline-block text-purple-500/30 blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}>KAUNDAL</span>
            </div>
            
            {/* Additional Color Layers for Depth */}
            <div className="absolute inset-0 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-center opacity-50">
              <span className="inline-block text-blue-300 animate-pulse-slow">NEELAKSHI</span>
              <br />
              <span className="inline-block text-pink-300 animate-pulse-slow" style={{ animationDelay: '1s' }}>KAUNDAL</span>
            </div>
          </div>
          
          {/* Professional Title */}
          <div className="relative mt-8">
            <p className="text-xl sm:text-2xl lg:text-3xl text-white font-bold animate-fade-in-up tracking-wide">
              <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text">Engineering Student</span>
              <span className="text-gray-300 mx-3">&</span>
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">Tech Enthusiast</span>
            </p>
            
            {/* Status Indicator */}
            <div className="flex items-center justify-center space-x-3 mt-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-glow-green"></div>
              <span className="text-lg text-gray-300 font-medium">Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Enhanced Interactive Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
          <button
            onClick={() => onNavigate('about')}
            className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white rounded-2xl font-bold text-xl shadow-3xl overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-glow-blue animate-button-glow border border-white/20"
          >
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Enhanced shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Pulse overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex items-center space-x-3">
              <span className="group-hover:animate-bounce drop-shadow-lg">My Details</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300 drop-shadow-lg" />
            </div>
            
            {/* Enhanced glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={() => onNavigate('about')}
            className="group relative px-12 py-6 bg-black/80 text-gray-200 rounded-2xl font-bold text-xl shadow-3xl border-2 border-gray-600/50 overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-glow-teal hover:border-teal-400/50"
          >
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/50 to-blue-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Enhanced shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-300/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="relative flex items-center space-x-3">
              <User size={24} className="group-hover:rotate-12 transition-transform duration-300 drop-shadow-lg" />
              <span className="group-hover:text-teal-300 transition-colors duration-300 drop-shadow-lg">About Me</span>
            </div>
            
            {/* Enhanced glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Enhanced Achievement Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-black/60 rounded-2xl p-8 shadow-3xl border border-white/10 hover:shadow-glow-blue transition-all duration-300 hover:scale-105 animate-fade-in-up relative overflow-hidden group" style={{ animationDelay: '0.8s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
            <div className="text-4xl font-bold text-blue-400 mb-3 drop-shadow-lg relative">3+</div>
            <div className="text-gray-300 font-medium text-lg relative">Years of Learning</div>
          </div>
          
          <div className="bg-black/60 rounded-2xl p-8 shadow-3xl border border-white/10 hover:shadow-glow-purple transition-all duration-300 hover:scale-105 animate-fade-in-up relative overflow-hidden group" style={{ animationDelay: '1s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
            <div className="text-4xl font-bold text-purple-400 mb-3 drop-shadow-lg relative">15+</div>
            <div className="text-gray-300 font-medium text-lg relative">Projects Completed</div>
          </div>
          
          <div className="bg-black/60 rounded-2xl p-8 shadow-3xl border border-white/10 hover:shadow-glow-teal transition-all duration-300 hover:scale-105 animate-fade-in-up relative overflow-hidden group" style={{ animationDelay: '1.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
            <div className="text-4xl font-bold text-teal-400 mb-3 drop-shadow-lg relative">5+</div>
            <div className="text-gray-300 font-medium text-lg relative">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;