import React, { useState } from 'react';
import { Menu, X, User, Code, Mail, Sparkles, Star } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-700/50 shadow-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 group cursor-pointer relative">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow-blue transition-all duration-300 group-hover:scale-110 relative overflow-hidden">
                <span className="text-white font-bold text-lg group-hover:animate-pulse drop-shadow-lg">NK</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <Sparkles className="absolute -top-1 -right-1 text-yellow-400 animate-ping drop-shadow-lg" size={12} />
              <Star className="absolute -bottom-1 -left-1 text-cyan-400 animate-pulse" size={10} />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 drop-shadow-lg">
              Neelakshi Kaundal
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 overflow-hidden border ${
                    currentSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-glow-blue border-white/20'
                      : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-glow-blue border-transparent hover:border-white/20'
                  }`}
                >
                  {/* Background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <Icon size={18} className="relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                  <span className="relative z-10 drop-shadow-md">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group p-2 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:shadow-glow-blue border border-transparent hover:border-white/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <div className="relative">
                {isMenuOpen ? (
                  <X size={24} className="group-hover:rotate-90 transition-transform duration-300 drop-shadow-lg" />
                ) : (
                  <Menu size={24} className="group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-gray-700/50 shadow-3xl animate-slide-down">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden animate-fade-in-up border relative ${
                    currentSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-glow-blue border-white/20'
                      : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-glow-blue border-transparent hover:border-white/20'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <Icon size={20} className="relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                  <span className="relative z-10 drop-shadow-md">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;