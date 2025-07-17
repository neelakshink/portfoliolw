import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/neelakshi-kaundal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/neelakshi-kaundal', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:neelakshi.kaundal@email.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-cyan-400">
              NEELAKSHI KAUNDAL
            </h3>
            <p className="text-gray-400 max-w-md">
              Passionate developer focused on creating innovative solutions that make a difference. 
              Always learning, always growing.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 group"
                  aria-label={link.label}
                >
                  <link.icon size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cyan-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cyan-400">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="font-medium">Email:</span> neelakshi.kaundal@email.com
              </p>
              <p className="text-gray-400">
                <span className="font-medium">Phone:</span> +91 98765 43210
              </p>
              <p className="text-gray-400">
                <span className="font-medium">Location:</span> New Delhi, India
              </p>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm rounded-full">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              Available for opportunities
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            © 2024 Neelakshi Kaundal. Made with 
            <Heart size={16} className="text-red-500 mx-1" /> 
            and lots of coffee.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Built with React & Tailwind CSS
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-cyan-500/50"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;